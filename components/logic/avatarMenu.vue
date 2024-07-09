<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const pb = usePocketbase()
const image = ref()
image.value = `http://127.0.0.1:8090/api/files/_pb_users_auth_/k9cwguro3obdx5v/${pb.authStore.model?.avatar}`
</script>
<template>
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Avatar class="h-20 w-20">
				<AvatarImage
					v-if="pb.authStore.model?.avatar"
					:src="image"
					alt="Avatar image"
				/>
				<AvatarFallback v-else> DF </AvatarFallback>
			</Avatar>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel> Teste </DropdownMenuLabel>
			<DropdownMenuItem>
				<div class="flex items-center space-x-2">Teste</div>
			</DropdownMenuItem>
			<DropdownMenuSeparator />
		</DropdownMenuContent>
	</DropdownMenu>
</template>
