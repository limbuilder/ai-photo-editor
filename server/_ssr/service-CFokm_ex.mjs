import { __exportAll } from "./ssr.mjs";
import { and, eq, gt, inArray, isNull, or } from "../_libs/drizzle-orm.mjs";
import { db, permission, role, rolePermission, userRole } from "./schema-B6Pq5ts5.mjs";
import { getUuid } from "./hash-ZEFczJfC.mjs";
// node_modules/.nitro/vite/services/ssr/assets/service-CFokm_ex.js
function matchPermission(permissionCode, permissionCodes) {
	if (permissionCodes.includes(permissionCode)) return true;
	const parts = permissionCode.split(".");
	for (let i = parts.length - 1; i > 0; i--) {
		const wildcard = parts.slice(0, i).join(".") + ".*";
		if (permissionCodes.includes(wildcard)) return true;
	}
	if (permissionCodes.includes("*")) return true;
	return false;
}
var service_exports = /* @__PURE__ */ __exportAll({
	assignPermissionsToRole: () => assignPermissionsToRole,
	assignRoleToUser: () => assignRoleToUser,
	createPermission: () => createPermission,
	createRole: () => createRole,
	deletePermission: () => deletePermission,
	deleteRole: () => deleteRole,
	getRoleByName: () => getRoleByName,
	getRolePermissions: () => getRolePermissions,
	getUserPermissionCodes: () => getUserPermissionCodes,
	getUserRoles: () => getUserRoles,
	grantRoleForNewUser: () => grantRoleForNewUser,
	hasPermission: () => hasPermission,
	isAdminPermission: () => isAdminPermission,
	removeRoleFromUser: () => removeRoleFromUser,
	roleGrantsAdmin: () => roleGrantsAdmin,
	updatePermission: () => updatePermission,
	updateRole: () => updateRole
});
async function getRoleByName(name) {
	const [result] = await db().select().from(role).where(eq(role.name, name)).limit(1);
	return result;
}
async function createRole(data) {
	const [result] = await db().insert(role).values({
		id: getUuid(),
		...data,
		status: "active"
	}).returning();
	return result;
}
async function createPermission(data) {
	const [result] = await db().insert(permission).values({
		id: getUuid(),
		...data
	}).returning();
	return result;
}
async function assignPermissionsToRole(roleId, permissionIds) {
	await db().delete(rolePermission).where(eq(rolePermission.roleId, roleId));
	if (permissionIds.length > 0) await db().insert(rolePermission).values(permissionIds.map((pid) => ({
		id: getUuid(),
		roleId,
		permissionId: pid
	})));
}
async function assignRoleToUser(userId, roleId, expiresAt) {
	const [result] = await db().insert(userRole).values({
		id: getUuid(),
		userId,
		roleId,
		expiresAt: expiresAt || null
	}).returning();
	return result;
}
async function removeRoleFromUser(userId, roleId) {
	await db().delete(userRole).where(and(eq(userRole.userId, userId), eq(userRole.roleId, roleId)));
}
async function updateRole(id, data) {
	const [result] = await db().update(role).set(data).where(eq(role.id, id)).returning();
	return result;
}
async function deleteRole(id) {
	await db().update(role).set({ status: "inactive" }).where(eq(role.id, id));
}
async function updatePermission(id, data) {
	const [result] = await db().update(permission).set(data).where(eq(permission.id, id)).returning();
	return result;
}
async function deletePermission(id) {
	await db().delete(permission).where(eq(permission.id, id));
}
async function getRolePermissions(roleId) {
	return db().select({ permissionId: rolePermission.permissionId }).from(rolePermission).where(eq(rolePermission.roleId, roleId));
}
async function getUserRoles(userId) {
	return db().select({
		id: userRole.id,
		roleId: userRole.roleId,
		expiresAt: userRole.expiresAt,
		roleName: role.name,
		roleTitle: role.title
	}).from(userRole).innerJoin(role, eq(userRole.roleId, role.id)).where(eq(userRole.userId, userId));
}
async function getUserPermissionCodes(userId) {
	const now = /* @__PURE__ */ new Date();
	const roles = await db().select({ roleId: userRole.roleId }).from(userRole).innerJoin(role, eq(userRole.roleId, role.id)).where(and(eq(role.status, "active"), eq(userRole.userId, userId), or(isNull(userRole.expiresAt), gt(userRole.expiresAt, now))));
	if (roles.length === 0) return [];
	const roleIds = roles.map((r) => r.roleId);
	const perms = await db().select({ code: permission.code }).from(rolePermission).innerJoin(permission, eq(rolePermission.permissionId, permission.id)).where(inArray(rolePermission.roleId, roleIds));
	return [...new Set(perms.map((p) => p.code))];
}
async function hasPermission(userId, permissionCode) {
	return matchPermission(permissionCode, await getUserPermissionCodes(userId));
}
async function grantRoleForNewUser(params) {
	const { userId, configs } = params;
	if (configs.initial_role_enabled !== "true") return;
	const roleName = configs.initial_role_name;
	if (!roleName) return;
	const foundRole = await getRoleByName(roleName);
	if (!foundRole) return;
	if (await roleGrantsAdmin(foundRole.id)) {
		console.error(`initial role "${roleName}" carries admin permissions; not assigned`);
		return;
	}
	await assignRoleToUser(userId, foundRole.id);
}
/** Whether a permission code reaches the admin panel (`*`, `admin`, `admin.*`…). */
function isAdminPermission(code) {
	return code === "*" || code === "admin" || code.startsWith("admin.");
}
async function roleGrantsAdmin(roleId) {
	return (await db().select({ code: permission.code }).from(rolePermission).innerJoin(permission, eq(rolePermission.permissionId, permission.id)).where(eq(rolePermission.roleId, roleId))).some((r) => isAdminPermission(r.code));
}
export { assignPermissionsToRole, assignRoleToUser, createPermission, createRole, deletePermission, deleteRole, getRoleByName, getRolePermissions, getUserPermissionCodes, getUserRoles, grantRoleForNewUser, hasPermission, matchPermission, removeRoleFromUser, roleGrantsAdmin, service_exports, updatePermission, updateRole };
