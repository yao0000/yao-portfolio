<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from '@iconify/vue';
import ButtonMenu from './ButtonMenu.vue';

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
    <div class="flex flex-row px-15 py-6 bg-black border-b border-gray-600">
        <div class="flex-1 flex">
            <a href="/">
                <div class="text-white cursor-pointer">
                    Yao's Portfolio
                </div>
            </a>
        </div>

        <div class="hidden lg:flex lg:flex-row">
            <ButtonMenu href="experiences">
                Experiences
            </ButtonMenu>

            <ButtonMenu href="/">
                Projects
            </ButtonMenu>

            <ButtonMenu href="about">
                About
            </ButtonMenu>
        </div>

        <div class="block lg:hidden">
            <div @click="isMenuShow = !isMenuShow" class="cursor-pointer w-[30px] h-[30px]">
                <Transition enter-active-class="transition duration-400" leave-active-class="transition duration-400"
                    enter-from-class="opacity-0 rotate-[-90deg]" enter-to-class="opacity-100 rotate-0"
                    leave-from-class="opacity-100 rotate-0" leave-to-class="opacity-0 rotate-[90deg]" mode="out-in">
                    <Icon :key="String(isMenuShow)"
                        :icon="isMenuShow ? 'material-symbols:close-rounded' : 'material-symbols:lists'"
                        class="w-full h-full" />
                </Transition>
            </div>
        </div>
    </div>
</template>
