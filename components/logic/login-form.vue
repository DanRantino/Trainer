<script setup lang="ts">
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { useForm } from "vee-validate"
import { loginSchema } from "~/types/login.schema"
import { ClientResponseError } from "pocketbase"

const router = useRouter()
const pb = usePocketbase()
const cookies = useCookie("pb_auth")

const form = useForm({
	validationSchema: loginSchema,
})
onMounted(() => {
	pb.authStore.loadFromCookie(cookies.value || "")
	if (pb.authStore.isValid) {
		router.push("/")
	}
})

const onSubmit = form.handleSubmit(async (values) => {
	try {
		await pb.collection("users").getFirstListItem(`email="${values.email}"`)
	} catch (err) {
		if (err instanceof ClientResponseError) {
			router.push("/signup")
		}
	}
	try {
		await pb.collection("users").authWithPassword(values.email, values.password)
		cookies.value = pb.authStore.exportToCookie({}, "pb_auth")
		router.push("/")
	} catch (err) {
		if (err instanceof ClientResponseError) {
			console.log("🚀 ~ onSubmit ~ err:", err)
		}
	}
})
</script>
<template>
	<form @submit="onSubmit">
		<Card class="w-[30vw] h-3/4">
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="h-32">
					<FormField v-slot="{ componentField }" name="email">
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									v-bind="componentField"
									placeholder="Email"
								/>
							</FormControl>
							<FormDescription> We'll never share your email. </FormDescription>
							<FormMessage />
						</FormItem>
					</FormField>
				</div>
				<div class="h-32">
					<FormField v-slot="{ componentField }" name="password">
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									v-bind="componentField"
									placeholder="Password"
								/>
							</FormControl>
							<FormDescription>
								We'll never share your password.
							</FormDescription>
							<FormMessage />
						</FormItem>
					</FormField>
				</div>
			</CardContent>
			<CardFooter>
				<Button type="submit">Login</Button>
			</CardFooter>
		</Card>
	</form>
</template>
