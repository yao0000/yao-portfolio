<script setup lang="ts">
import { ref } from "vue";
import MainLayout from "@/views/MainLayout.vue";
import LoadingView from "./views/LoadingView.vue";
import { onMounted } from "vue";
import { useProfileStore } from "./stores/profileStore";
import { useLanguageStore } from "./stores/languageStore";

const profileStore = useProfileStore();
const isLoading = ref(true);
const langStore = useLanguageStore();
onMounted(async() => {
  await profileStore.load();
  await langStore.loadTranslations();
  isLoading.value = false;
})

</script>

<template>
  <div class="h-screen">
    <LoadingView v-if="isLoading" />
    <MainLayout v-else class="h-full bg-black"/>
  </div>
</template>
