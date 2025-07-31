<script setup lang="ts">
import type { Skills } from '@/types/Skills';
import Container from '@/components/common/container/Container.vue';
import SkillsContainer from '@/components/About/SkillsContainer.vue';
import ContainerTitle from '@/components/common/container/ContainerTitle.vue';
import ContainerContent from '@/components/common/container/ContainerContent.vue';

const programmingLangs: Skills[] = [
    { icon: 'logos:javascript', label: 'JavaScript' },
    { icon: 'devicon:html5-wordmark', label: 'HTML'},
    { icon: 'logos:css-3', label: 'CSS' },
    { icon: 'vscode-icons:file-type-typescript-official', label: 'TypeScript' },
    { icon: 'vscode-icons:file-type-plsql', label: 'SQL' },
    { icon: 'mdi:language-csharp', label: 'C#' },
    { icon: 'vscode-icons:file-type-dartlang', label: 'Dart' },
    { icon: 'devicon:java-wordmark', label: 'JAVA'},
    { icon: 'vscode-icons:file-type-python', label: 'Python' }
]

const frontEndSkillsList: Skills[] = [
    { icon: 'vscode-icons:file-type-vue', label: 'Vue' },
    { icon: 'catppuccin:tailwind', label: 'Tailwind' },
    { icon: 'logos:dotnet', label: 'WinForms'},
    { icon: 'devicon:android', label: 'Android' },
    { icon: 'vscode-icons:file-type-flutter', label: 'Fluttter'},
]

const backendSkillsList: Skills[] = [
    { icon: 'vscode-icons:file-type-firebase', label: 'Firebase' },
    { icon: 'devicon:dotnetcore', label: '.NET Core' },
]

const databaseSkillsList: Skills[] = [
    { icon: 'devicon:microsoftsqlserver-wordmark', label: 'Microsoft SQL'},
    { icon: 'logos:mysql', label: 'My SQL'}
]

const languages: Skills[] = [
    { icon: 'icon-park:chinese', label: '中文 Mandarin'},
    { icon: 'icon-park:english', label: 'English'},
]
</script>

<template>
    <div class="flex-1 h-full w-full flex justify-center">
        <div class="flex-1 flex flex-col w-full items-center space-y-10">
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

                    <SkillsContainer title="Frontend Framework" :list="frontEndSkillsList" />

                    <SkillsContainer title="Backend Framework" :list="backendSkillsList"/>

                    <SkillsContainer title="Database Framework" :list="databaseSkillsList"/>
                </ContainerContent>
            </Container>

            <Container>
                <ContainerTitle>
                    Soft Skills
                </ContainerTitle>
                <ContainerContent>

                </ContainerContent>
            </Container>

            <Container>
                <ContainerTitle>
                    Languages
                </ContainerTitle>
                <ContainerContent>
                    <SkillsContainer title="" :list="languages" />
                </ContainerContent>
            </Container>
        </div>
    </div>
</template>
