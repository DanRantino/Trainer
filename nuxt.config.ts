// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss", "@nuxt/eslint"],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},

	compatibilityDate: "2024-07-04",
	typescript: {
		tsConfig: {
			compilerOptions: {
				baseUrl: ".",
			},
		},
	},
})
