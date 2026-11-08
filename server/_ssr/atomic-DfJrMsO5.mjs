import { envConfigs } from "./ssr.mjs";
import { sql } from "../_libs/drizzle-orm.mjs";
import { db } from "./schema-B6Pq5ts5.mjs";
// node_modules/.nitro/vite/services/ssr/assets/atomic-DfJrMsO5.js
/**
* Atomic multi-statement writes that work on every backend, D1 included.
*
* D1 has no interactive transactions (no BEGIN … read … COMMIT across round
* trips) — only `batch()`, which commits a fixed list of statements all or
* nothing. So an atomic write is expressed the same way everywhere: read what
* you need first, build every statement up front, and state each condition
* that must hold as a `guard` step instead of an `if` between statements.
*
* - D1 / SQLite / Turso: the steps run as one `batch()`; a guard that fails
*   aborts the batch.
* - Postgres / MySQL: the steps run in order inside a real
*   transaction; a guard locks the rows it checks (`FOR UPDATE` where
*   supported) and throws.
*
* Either way a failed guard surfaces as `AtomicGuardError` and nothing is
* written. Guards see every earlier step's writes, so they work both as
* preconditions (before an update) and postconditions (after a decrement).
*/
var AtomicGuardError = class extends Error {};
function guard(g) {
	return {
		kind: "guard",
		...g
	};
}
function mode() {
	return [
		"d1",
		"sqlite",
		"turso"
	].includes(envConfigs.database_provider) ? "batch" : "transaction";
}
var isGuard = (s) => s?.kind === "guard";
/**
* Run `build(q)`'s steps atomically. `q` is the executor to build every
* statement from (a transaction or the batch-capable db) — never `db()`.
*/
async function atomic(build) {
	if (mode() === "transaction") {
		await db().transaction(async (tx) => {
			for (const step of build(tx)) {
				if (!step) continue;
				if (isGuard(step)) {
					if ((await tx.select({ ok: sql`case when ${step.require} then 1 else 0 end` }).from(step.table).where(step.where).for("update")).some((r) => Number(r.ok) !== 1)) throw new AtomicGuardError(step.message);
				} else await step;
			}
		});
		return;
	}
	const q = db();
	const steps = build(q).filter(Boolean);
	const guards = steps.filter(isGuard);
	const statements = steps.map((step) => {
		if (!isGuard(step)) return step;
		const column = step.table[step.column];
		return q.update(step.table).set({ [step.column]: sql`case when ${step.require} then ${column} else null end` }).where(step.where);
	});
	if (!statements.length) return;
	try {
		await q.batch(statements);
	} catch (error) {
		const text = errorText(error);
		const failed = guards.find((g) => text.includes(`NOT NULL constraint failed: ${tableName(g.table)}.${g.table[g.column].name}`));
		if (failed) throw new AtomicGuardError(failed.message);
		throw error;
	}
}
function tableName(table) {
	return table[Symbol.for("drizzle:Name")];
}
function errorText(error) {
	const parts = [];
	let e = error;
	for (let i = 0; e && i < 5; i++, e = e.cause) parts.push(String(e?.message ?? e));
	return parts.join(" | ");
}
export { AtomicGuardError, atomic, guard };
