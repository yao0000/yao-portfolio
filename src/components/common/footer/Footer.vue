<script setup lang="ts">
import Separator from '../Separator.vue';
import ButtonFooter from './ButtonFooter.vue';
import { Github, Linkedin, Mail } from 'lucide-vue-next';
</script>

<template>
    <div class="mt-auto mb-10 flex flex-col items-center">
        <div class="flex flex-row items-center space-x-5">
            <ButtonFooter label="GitHub" href="https://github.com/yao0000">
                <Github />
            </ButtonFooter>

            <Separator />

            <ButtonFooter label="LinkedIn" href="https://www.linkedin.com/in/yao-en-chong-b315612aa">
                <Linkedin />
            </ButtonFooter>

            <Separator />

            <ButtonFooter label="E-Mail" href="mailto:cyaoen@gmail.com">
                <Mail />
            </ButtonFooter>
        </div>

        <div class="flex flex-col items-center">
            <div>
                Last Updated: 30/7/2025
            </div>
            <div>
                © Yao En Chong
            </div>
        </div>
    </div>
</template>
