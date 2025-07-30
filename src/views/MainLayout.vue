<script setup lang="ts">
import MenuBar from '@/components/menu/MenuBar.vue';
</script>

<template>
    <div class="flex flex-col h-full overflow-y-auto">
        <MenuBar class="sticky top-0 left-0 right-0 z-50"/>
        <div class="flex-1 px-15 py-5">
            <router-view />
        </div>
    </div>
</template>
