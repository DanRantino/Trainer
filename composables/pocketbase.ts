import PocketBase from "pocketbase"

const pb = new PocketBase("http://127.0.0.1:8090/")

export const usePocketbase = () => {
	// pb.authStore.onChange(() => {
	// 	document.cookie = pb.authStore.exportToCookie()
	// })
	return pb
}
