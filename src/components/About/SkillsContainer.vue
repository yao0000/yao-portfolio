<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { SkillsItem } from '@/types/Profile';
import ContainerTitle from '../common/container/ContainerTitle.vue';
import { useLanguageStore } from '@/stores/languageStore';

const props = defineProps<{
    item?: SkillsItem
    skills?: SkillsItem
    isTitleShow?: boolean
}>();

const languageStore = useLanguageStore()
</script>

<template>
    <div>
        <ContainerTitle v-if="isTitleShow && (item?.label || skills?.label)">
            {{ languageStore.getLanguage(item?.label ?? skills?.label ?? '') }}
        </ContainerTitle>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-2">
            <div v-if="item" v-for="data in item.list"
                class="flex flex-wrap items-center px-2 py-2 space-x-2 cursor-default border-2 rounded-lg bg-gray-800 hover:-translate-y-1 duration-300">
                <Icon :icon="data.icon" />
                <div>
                    {{ data.label }}
                </div>
            </div>

            <div v-if="skills" v-for="data in skills.list"
                class="flex flex-wrap items-center px-2 py-2 space-x-2 cursor-default border-2 rounded-lg bg-gray-800 hover:-translate-y-1 duration-300">
                <Icon :icon="data.icon" />
                <div>
                    {{ data.label }}
                </div>
            </div>
        </div>
    </div>
</template>
