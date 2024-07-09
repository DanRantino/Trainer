<script setup lang="ts">
import LogicMenu from "@/components/logic/menu.vue"
</script>
<template>
	<div class="absolute h-screen w-screen top-0 left-0 overflow-hidden">
		<LogicMenu />
		<div
			class="flex w-screen h-[screen-6rem] items-center justify-center bg-primary"
		>
			<slot />
		</div>
	</div>
</template>
