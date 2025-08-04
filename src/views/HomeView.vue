<script setup lang="ts">
import Button from '@/components/common/controls/Button.vue';
import Container from '@/components/common/container/Container.vue';
import { useProfileStore } from "@/stores/profileStore";

const profileStore = useProfileStore();
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
                        Hello I'm
                    </div>

                    <div class="text-3xl font-bold">
                        Yao
                    </div>

                    <div class="text-sm">
                        I passionate about fullstack development. Turning ideas into innovative development.
                    </div>

                    <div class="text-xs italic">
                        Click button below to explore my latest information.
                    </div>

                    <Button :href="profileStore.profile.url.resume">Resume</Button>
                </div>
            </div>
        </Container>
    </div>
</template>
