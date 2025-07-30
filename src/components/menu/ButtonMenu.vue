<script setup lang="ts">
defineProps<{
    href: string;
}>();
</script>

<template>
    <router-link :to="href">

        <div class="
            text-white
            mx-5 cursor-pointer
            border-b-2
            border-transparent
            hover:border-current
            hover:px-5
            transition-all
            duration-300
        ">
            <slot />
        </div>

    </router-link>
</template>

<style scoped>
.div:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
}
</style>