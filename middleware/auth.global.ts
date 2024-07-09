export default defineNuxtRouteMiddleware((to) => {
	const pb = usePocketbase()
	if (to.path === "/login") {
		return
	}
	if (!pb.authStore.isValid) {
		return navigateTo("/login")
	}
})
