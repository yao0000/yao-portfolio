<script setup lang="ts">
import Container from '@/components/common/container/Container.vue';
import ContainerContent from '@/components/common/container/ContainerContent.vue';
import ContainerTitle from '@/components/common/container/ContainerTitle.vue';
</script>

<template>
    <div class="flex-1 flex flex-col h-full space-y-6">
        <Container>
            <ContainerTitle>
                Education
            </ContainerTitle>
            <ContainerContent class="space-y-5">
                <div>
                    <div>
                        Jan 2021 - Jan 2024
                    </div>
                    <div>
                        Bachelor of Information Technology (Honours) Communications and Networking
                    </div>
                    <div>
                        Universiti Tunku Abdul Rahman (UTAR Kampar Campus)
                    </div>
                </div>

                <div>
                    <div>
                        Jan 2016 - Nov 2018
                    </div>
                    <div>
                        Senior Commercial
                    </div>
                    <div>
                        Kluang Chong Hwa High School
                    </div>
                </div>
            </ContainerContent>
        </Container>

        <Container>
            <ContainerTitle>
                Working Experiences
            </ContainerTitle>
            <ContainerContent class="space-y-5">
                <div>
                    <div>
                        Junior Software Engineer
                    </div>
                    <div>
                        <span>
                            Sept 2024 -
                        </span>
                        <span class="italic">
                            Present
                        </span>
                    </div>
                    <div>
                        N2N Connect Berhad
                    </div>
                </div>

                <div>
                    <div>
                        Network Support Engineer (Intern)
                    </div>
                    <div>
                        Oct 2023 - Jan 2024
                    </div>
                    <div>
                        NGN Connection, N2N Connect Berhad
                    </div>
                </div>

                <div>
                    <div>
                        Retails Assistant
                    </div>
                    <div>
                        Dec 2018 - Dec 2020
                    </div>
                    <div>
                        Singapore
                    </div>
                </div>
            </ContainerContent>
        </Container>
    </div>
</template>
