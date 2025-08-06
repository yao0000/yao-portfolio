<script setup lang="ts">
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import Button from '@/components/common/controls/Button.vue';
import SkillsContainer from "@/components/About/SkillsContainer.vue";
import { useProfileStore } from "@/stores/profileStore";
import { useLanguageStore } from "@/stores/languageStore";

const profileStore = useProfileStore();
const projects = profileStore.profile.projects;

const languageStore = useLanguageStore();
const getLanguage = languageStore.getLanguage;
const isExpandedList = ref<Record<number, boolean>>({});
</script>

<template>
    <div v-for="item in projects" class="flex flex-col">
        <div class="rounded-b-none rounded-3xl border-2 border-white mt-5 px-10 py-5 text-lg flex w-full">
            <div>
                <div class="text-2xl font-extrabold">
                    {{ getLanguage(`PROJECT${item.value}_title`) }}
                </div>
                <div class="text-sm">
                    {{ getLanguage(`PROJECT${item.value}_duration`) }}
                </div>
            </div>
            <div class="ms-auto flex items-center">
                <Icon class="cursor-pointer" :icon="(isExpandedList[item.value] ?? true) ? 'material-symbols:keyboard-arrow-up' : 'material-symbols:keyboard-arrow-down-rounded'" width="50" height="50"
                    @click="isExpandedList[item.value] = !(isExpandedList[item.value] ?? true)" />
            </div>
        </div>

        <Transition name="expand">
            <div v-if="isExpandedList[item.value] ?? true"
                class="space-y-5 rounded-t-none rounded-3xl border-2 border-white px-10 py-5 text-lg flex flex-col w-full">
                <div>
                    <div
                        v-for="str in getLanguage(`PROJECT${item.value}_info`).split(languageStore.language === 'en-MY' ? '.' : '。')">
                        {{ str }}
                    </div>
                </div>

                <div v-if="item.tech">
                    <div class="font-bold text-xl">
                        {{ getLanguage('techStack') }}
                    </div>
                    <div>
                        <SkillsContainer :skills="{
                            id: '',
                            list: item.tech
                        }"></SkillsContainer>
                    </div>
                </div>

                <div v-if="item.url" class="space-y-2">
                    <div class="font-bold text-xl">
                        {{ getLanguage('reference') }}
                    </div>
                    <div class="grid md:flex md:flex-row sm:grid-cols-2 gap-4 mt-2">
                        <Button v-for="btn in item.url" :href="btn.link">
                            {{ btn.label }}
                        </Button>
                    </div>
                </div>
            </div>

        </Transition>
    </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.6s cubic-bezier(0.25, 1, 0.5, 0), opacity 0.4s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 1000px; /* adjust higher if your content might be taller */
  opacity: 1;
}
</style>
