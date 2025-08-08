<script setup lang="ts">
import Container from '@/components/common/container/Container.vue';
import ContainerContent from '@/components/common/container/ContainerContent.vue';
import ContainerTitle from '@/components/common/container/ContainerTitle.vue';
import { useLanguageStore } from '@/stores/languageStore';
import { useProfileStore } from '@/stores/profileStore';

const profileStore = useProfileStore();
const languageStore = useLanguageStore();
</script>

<template>
    <div class="flex-1 flex flex-col h-full space-y-6">
        <Container>
            <ContainerTitle>
                {{ languageStore.getLanguage('education') }}
            </ContainerTitle>
            <ContainerContent class="space-y-5">
                <div v-for="item in profileStore.profile.educationExperiences">
                    <div>
                        {{ languageStore.getLanguage(item.duration) }}
                    </div>
                    <div>
                        {{ languageStore.getLanguage(item.title) }}
                    </div>
                    <div>
                        {{ languageStore.getLanguage(item.location) }}
                    </div>
                </div>
            </ContainerContent>
        </Container>

        <Container>
            <ContainerTitle>
                {{ languageStore.getLanguage('workingExperiences') }}
            </ContainerTitle>
            <ContainerContent class="space-y-5">
                <div v-for="item in profileStore.profile.workingExperiences">
                    <div>
                        {{ languageStore.getLanguage(item.duration) }}
                    </div>
                    <div>
                        {{ languageStore.getLanguage(item.title) }}
                    </div>
                    <div>
                        {{ languageStore.getLanguage(item.location) }}
                    </div>
                </div>
            </ContainerContent>
        </Container>
    </div>
</template>
