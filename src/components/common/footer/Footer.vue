<script setup lang="ts">
import Separator from '../Separator.vue';
import type { Link, Profile } from '@/types/Profile';
import ButtonFooter from './ButtonFooter.vue';
import { useProfileStore } from '@/stores/profileStore';
import { Github, Linkedin, Mail } from 'lucide-vue-next';
import { useLanguageStore } from '@/stores/languageStore';

const profile: Profile = useProfileStore().profile;
const link: Link = profile.url;
</script>

<template>
    <div class="mt-auto mb-10 flex flex-col items-center">
        <div class="flex flex-row items-center space-x-5">
            <ButtonFooter label="GitHub" :href="link.gitHub">
                <Github />
            </ButtonFooter>

            <Separator />

            <ButtonFooter label="LinkedIn" :href="link.linkedIn">
                <Linkedin />
            </ButtonFooter>

            <Separator />

            <ButtonFooter label="E-Mail" :href="'mailto:' + link.mail">
                <Mail />
            </ButtonFooter>
        </div>

        <div class="flex flex-col items-center">
            <div>
                {{ useLanguageStore().getLanguage('lastUpdate') }}
            </div>
            <div>
                {{ useLanguageStore().getLanguage('author') }}
            </div>
        </div>
    </div>
</template>
