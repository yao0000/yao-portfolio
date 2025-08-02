import { loadDocs } from "@/services/firebase";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLanguageStore = defineStore('language', () => {
    const _language = ref('en-MY');
    const translations = ref<any[]>([]);

    const language = computed({
        get: () => {
            return _language.value;
        },
        set: (newLanguage: string = '') => {
            _language.value = newLanguage ?? 'en-MY';
            sessionStorage.setItem('lang', _language.value);
        } 
    })

    const loadTranslations = async () => {
        translations.value = await loadDocs('languages');
    }

    const getLanguage = (key: string) => {
        const item = translations.value.find(obj => obj.id === key);
        return item ? item[language.value] : ""
    }
    
    return {
        language,
        loadTranslations,
        getLanguage
    }
})
