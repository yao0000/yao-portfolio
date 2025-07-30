<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Skills } from '@/types/Skills';
import ContainerTitle from '../common/container/ContainerTitle.vue';

defineProps<{
    title: string;
    list: Skills[]
}>();

</script>

<template>
    <div>

        <ContainerTitle>
            {{ title }}
        </ContainerTitle>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-2">
            <div v-for="item in list"
                class="flex flex-wrap items-center px-2 py-2 space-x-2 cursor-default border-2 rounded-lg bg-gray-800 hover:-translate-y-1 duration-300">
                <Icon :icon="item.icon" />
                <div>
                    {{ item.label }}
                </div>
            </div>
        </div>
    </div>
</template>
