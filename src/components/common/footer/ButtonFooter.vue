<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    label: string;
    href: string;
}>();

const displayText = ref("");
let timer: number | null = null;

const innerText = () => {
    displayText.value = ''
    let i = 0
    if (timer) clearInterval(timer)

    timer = window.setInterval(() => {
        displayText.value += props.label[i]
        i++
        if (i >= props.label.length && timer) clearInterval(timer)
    }, 80)
}

const clear = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
    displayText.value = ''
}
</script>

<template>
    <a :href="href" target="_blank">
        <div class="group flex flex-row cursor-pointer" @mouseenter="innerText" @mouseleave="clear">
            <slot />
            <div v-if="displayText" class="ml-3">
                {{ displayText }}
            </div>
        </div>
    </a>
</template>
