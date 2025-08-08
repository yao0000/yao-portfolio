<script setup lang="ts">
import { ref } from "vue";
import Button from '@/components/common/controls/Button.vue';
import Container from '@/components/common/container/Container.vue';
import { useProfileStore } from "@/stores/profileStore";
import { useLanguageStore } from '@/stores/languageStore';
import Dialog from '@/components/ui/dialog/Dialog.vue';
import DialogContent from "@/components/ui/dialog/DialogContent.vue";

const profileStore = useProfileStore();
const getLanguage = useLanguageStore().getLanguage;

const showResumeDialog = ref(false);
const isIframeLoading = ref(false);

function openResumeDialog() {
    isIframeLoading.value = true;
    showResumeDialog.value = true;
}
</script>

<template>
    <div class="h-full flex-1 flex flex-col space-y-10 flex items-center">
        <Container class="flex-1 flex items-center justify-center items-center">
            <div class="flex flex-col md:flex-row md:space-x-15">
                <div class="overflow-hidden border-gray-800 flex items-center justify-center">
                    <img :src="profileStore.profile.url.photo"
                        class="w-[180px] h-[180px] rounded-full border-4 border-gray-800 object-cover"
                        alt="Profile photo" />
                </div>

                <div class="flex flex-col justify-center space-y-3">
                    <div class="text-2xl">
                        {{ getLanguage('helloIm') }}
                    </div>

                    <div class="text-3xl font-bold">
                        {{ getLanguage('sName') }}
                    </div>

                    <div class="text-sm">
                        {{ getLanguage('homeIntro') }}
                    </div>

                    <div class="text-xs italic">
                        {{ getLanguage('resumeInfo') }}
                    </div>

                    <Button @click="openResumeDialog">{{ getLanguage('resume') }}</Button>
                </div>
            </div>
        </Container>
    </div>

    <Dialog v-model:open="showResumeDialog">

        <DialogContent class="h-[38rem] flex justify-center items-center bg-gray-800">
            <div v-if="isIframeLoading" class="absolute inset-0 flex justify-center items-center z-10 bg-black/50">
                <div class="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe
                :src="profileStore.profile.url.resume"
                width="100%" height="600px" class="w-[470px] h-[32rem] relative z-0" style="border:none;" @load="isIframeLoading = false"></iframe>
        </DialogContent>
    </Dialog>

</template>
