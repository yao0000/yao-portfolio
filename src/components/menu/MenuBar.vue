<script setup lang="ts">
import ButtonMenu from './ButtonMenu.vue';
</script>

<template>
    <div class="flex flex-row px-15 py-6 bg-black border-b border-gray-600">
        <div class="flex-1">
            <a href="/">
                <div class="text-white cursor-pointer">
                    Yao's Portfolio
                </div>
            </a>
        </div>

        <div class="hidden lg:flex lg:flex-row">
            <ButtonMenu href="/">
                Working Experiences
            </ButtonMenu>

            <ButtonMenu href="/">
                Project Experiences
            </ButtonMenu>

            <ButtonMenu href="about">
                About
            </ButtonMenu>
        </div>
    </div>
</template>
