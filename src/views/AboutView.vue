<script setup lang="ts">
import type { Skills } from '@/types/Skills';
import Footer from '@/components/common/footer/Footer.vue';
import Container from '@/components/common/container/Container.vue';
import SkillsContainer from '@/components/About/SkillsContainer.vue';
import ContainerTitle from '@/components/common/container/ContainerTitle.vue';
import ContainerContent from '@/components/common/container/ContainerContent.vue';

const programmingLangs: Skills[] = [
    { icon: 'logos:javascript', label: 'JavaScript' },
]

const frontEndSkillsList: Skills[] = [
    { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
    { icon: 'catppuccin:tailwind', label: 'Tailwind' },
    { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' }
]
</script>

<template>
    <div class="h-full w-full flex justify-center">
        <div class="flex flex-col w-full items-center space-y-10">
            <Container>
                <ContainerTitle>
                    Hello, there
                </ContainerTitle>
                <ContainerContent>
                    My name is Chong Yao En. I graduated from Universiti Tunku Abdul Rahman (UTAR) with a degree in ICT,
                    majoring in Communication and Networking.
                    <br />
                    I am proficient in various programming languages. As a developer, I am dedicated to realise the
                    idea, and also resolve the real-world problems.
                </ContainerContent>
            </Container>

            <Container>
                <ContainerTitle>
                    Technical Skills
                </ContainerTitle>
                <ContainerContent class="space-y-5">
                    <SkillsContainer title="Programming Languages" :list="programmingLangs" />

                    <SkillsContainer title="Frontend" :list="frontEndSkillsList" />
                </ContainerContent>
            </Container>
            <Footer />
        </div>
    </div>
</template>
