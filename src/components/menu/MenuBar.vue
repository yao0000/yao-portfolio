<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from '@iconify/vue';
import ButtonMenu from './ButtonMenu.vue';
import { useLanguageStore } from "@/stores/languageStore";

const languageStore = useLanguageStore();

const isMenuShow = ref(false);

const updateMenuShow = () => {
    isMenuShow.value = window.matchMedia('(min-width: 1024px)').matches ? false : isMenuShow.value
}
onMounted(() => {
    updateMenuShow();
    window.addEventListener('resize', updateMenuShow);
})

onUnmounted(() => {
    window.removeEventListener('resize', updateMenuShow);
})
</script>

<template>
    <div class="flex flex-col px-15 bg-black">
        <div class="flex pt-2">
            <div class="ms-auto cursor-pointer">
                <Icon v-if="languageStore.language === 'en-MY'" icon="icon-park:chinese" width="25" height="25"
                    @click="() => languageStore.language = 'zh-CN'" />
                <Icon v-else icon="icon-park:english" width="25" height="25"
                    @click="() => languageStore.language = 'en-MY'" />
            </div>
        </div>

        <div class="flex flex-row py-3 border-b border-gray-600">

            <div class="flex-1 flex">
                <a href="/">
                    <div class="text-white cursor-pointer">
                        Yao's Portfolio
                    </div>
                </a>
            </div>
            <div class="hidden lg:flex lg:flex-row">
                <ButtonMenu href="experiences">
                    {{ languageStore.getLanguage('experiences') }}
                </ButtonMenu>

                <ButtonMenu href="projects">
                    {{ languageStore.getLanguage('projects') }}
                </ButtonMenu>

                <ButtonMenu href="about">
                    {{ languageStore.getLanguage('about') }}
                </ButtonMenu>
            </div>

            <div class="block lg:hidden">
                <div @click="isMenuShow = !isMenuShow" class="cursor-pointer w-[30px] h-[30px]">
                    <Transition enter-active-class="transition duration-400"
                        leave-active-class="transition duration-400" enter-from-class="opacity-0 rotate-[-90deg]"
                        enter-to-class="opacity-100 rotate-0" leave-from-class="opacity-100 rotate-0"
                        leave-to-class="opacity-0 rotate-[90deg]" mode="out-in">
                        <Icon :key="String(isMenuShow)"
                            :icon="isMenuShow ? 'material-symbols:close-rounded' : 'material-symbols:lists'"
                            class="w-full h-full" />
                    </Transition>
                </div>
            </div>
        </div>

        <!-- Mobile menu items -->
        <Transition enter-active-class="transition-all duration-300 ease-out" class="h-screen"
            leave-active-class="transition-all duration-300 ease-in">
            <div v-if="isMenuShow" class="flex flex-col border-b border-gray-600 py-4">
                <ButtonMenu href="experiences" @click="isMenuShow = false">
                    {{ languageStore.getLanguage('experiences') }}
                </ButtonMenu>
                <ButtonMenu href="projects" @click="isMenuShow = false">
                    {{ languageStore.getLanguage('projects') }}
                </ButtonMenu>
                <ButtonMenu href="about" @click="isMenuShow = false">
                    {{ languageStore.getLanguage('about') }}
                </ButtonMenu>
            </div>
        </Transition>
    </div>

</template>
