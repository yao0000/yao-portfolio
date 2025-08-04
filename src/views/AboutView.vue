<script setup lang="ts">
import Container from '@/components/common/container/Container.vue';
import SkillsContainer from '@/components/About/SkillsContainer.vue';
import ContainerTitle from '@/components/common/container/ContainerTitle.vue';
import ContainerContent from '@/components/common/container/ContainerContent.vue';
import { useProfileStore } from '@/stores/profileStore';
import { useLanguageStore } from '@/stores/languageStore';

const profileStore = useProfileStore();
const languageStore = useLanguageStore();
</script>

<template>
    <div class="flex-1 h-full w-full flex justify-center">
        <div class="flex-1 flex flex-col w-full items-center space-y-10">
            <Container>
                <ContainerTitle>
                    {{ languageStore.getLanguage('hello') }}
                </ContainerTitle>
                <ContainerContent>
                    <div v-for="paragraph in languageStore.getLanguage('intro').split('\n')">
                        {{ paragraph }}
                    </div>
                </ContainerContent>
            </Container>

            <Container>
                <ContainerTitle>
                    {{ languageStore.getLanguage('technicalSkills') }}
                </ContainerTitle>
                <ContainerContent class="space-y-5">
                    <div v-for="item in profileStore.profile.skillsList" >
                        <SkillsContainer :skills="item" :isTitleShow="true" />
                    </div>
                </ContainerContent>
            </Container>

            <Container>
                <ContainerTitle>
                    {{ languageStore.getLanguage('softSkills') }}
                </ContainerTitle>
                <ContainerContent>

                </ContainerContent>
            </Container>

            <Container>
                <ContainerTitle>
                    {{ languageStore.getLanguage('languages') }}
                </ContainerTitle>
                <ContainerContent>
                    <SkillsContainer :item="profileStore.profile.languages" />
                </ContainerContent>
            </Container>
        </div>
    </div>
</template>
