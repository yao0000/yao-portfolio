<script setup lang="ts">
defineProps<{
    href: string;
}>();
</script>

<template>
    <router-link :to="href">

        <div class="
            text-white
            lg:mx-5
            lg:-pl-5
            pl-5
            cursor-pointer
            lg:border-b-2
            border-transparent
            hover:border-current
            lg:hover:px-5
            lg:hover:bg-transparent
            hover:bg-gray-700
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