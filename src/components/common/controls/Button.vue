<script setup lang="ts">
import { LinkIcon } from "@heroicons/vue/24/outline";
defineProps<{
    href: string;
}>();
</script>

<template>
    <div class="flex flex-row">
        <a :href="href" target="_blank">
            <button
                class="w-50px cursor-pointer bg-gray-500 py-2 px-3 space-x-2 rounded-lg flex flex-row items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-blue-500 hover:to-yellow-500 transition-colors duration-300">
                <div>
                    <slot></slot>
                </div>
                <LinkIcon class="w-4 h-4" />
            </button>
        </a>
    </div>
</template>
