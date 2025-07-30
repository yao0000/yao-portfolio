<script setup lang="ts">
import { LinkIcon } from "@heroicons/vue/24/outline";
import Footer from '@/components/common/footer/Footer.vue';
import Button from '@/components/common/controls/Button.vue';
import Container from '@/components/common/container/Container.vue';
</script>

<template>
    <div class="h-full flex-1 flex flex-col space-y-10 flex items-center">
        <Container class="flex-1 flex items-center">
            <div class="flex flex-row space-x-15">
                <div
                    class="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 inline-block flex items-center">
                    <img src="/src/assets//img//Profile_Photo.jpeg" />
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

                    <div class="flex">
                        <a href="https://drive.google.com/file/d/1gvdD45rRXmg8vxsU1GoBaH9SxQuT6A3O/view?usp=drive_link"
                            target="_blank">
                            <Button
                                class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-blue-500 hover:to-yellow-500 transition-colors duration-300">
                                <div>
                                    Resume
                                </div>
                                <LinkIcon class="w-4 h-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
        <div class="flex flex-row">
            <Footer />
        </div>
    </div>
</template>
