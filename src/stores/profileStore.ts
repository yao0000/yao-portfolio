import { defineStore } from 'pinia'
import { ref } from "vue";
import type { Profile, SkillsItem } from '@/types/Profile'
import { loadDocs } from '@/services/firebase';

export const useProfileStore = defineStore('profile', () => {
    const profile = ref<Profile>({} as Profile);

    const load = async(): Promise<void> => {
        await loadProfile();
        await loadSkills();
        await loadProjects();
    }

    const loadProfile = async() => {
        const data = await loadDocs('profile');
        // load Url
        const urls = data.find(item => item.id === "urls") as any;
        profile.value.url = urls;

        // load education
        const educationExp = data.find(item => item.id === "educations") as any;
        if (educationExp) {
            const list = educationExp.list.reverse();
            profile.value.educationExperiences = list.map((i: string) => ({
                title: `EDU${i}_title`,
                duration: `EDU${i}_duration`,
                location: `EDU${i}_location`,
            }))
        }

        // load working exp
        const workingExp = data.find(item => item.id === "workingExperiences") as any;
        if (workingExp) {
            const list = workingExp.list.reverse();
            profile.value.workingExperiences = list.map((i: string) => ({
                title: `WE${i}_title`,
                duration: `WE${i}_duration`,
                location: `WE${i}_location`,
            }))
        }
    }

    const loadSkills = async () => {
        const data = await loadDocs('skills');

        // load technical skills\
        const technicalSkills = data.find(item => item.id === 'technicalSkills') as any;
        const skillsList = [];
        skillsList.push(technicalSkills.programming);
        skillsList.push(technicalSkills.frontend);
        skillsList.push(technicalSkills.backend);
        skillsList.push(technicalSkills.database);
        profile.value.skillsList = skillsList;

        const softSkills = data.find(item => item.id === 'softSkills') as any;
        profile.value.softSkills = softSkills;

        
        // load languages
        const languages = data.find(item => item.id === 'languages') as SkillsItem | undefined;
        profile.value.languages = languages;
    }

    const loadProjects = async() => {
        const data = await loadDocs('projects') as any;
        profile.value.projects = data.sort((a: any, b: any) => b.value - a.value);
    }

    return {
        profile,
        load,
    }
})
