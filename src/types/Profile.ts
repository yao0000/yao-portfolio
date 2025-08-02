export interface Profile {
    url: Link;
    languages?: SkillsItem
    skillsList?: SkillsItem[]
    workingExperiences?: Experiences[]
    educationExperiences?: Experiences[]
}

export interface Link {
    resume: string;
    linkedIn: string;
    gitHub: string;
    mail: string;
    photo: string;
}

export interface SkillsItem {
    id: string;
    label?: string;
    list: Skills[];
}

export interface Skills {
    icon: string;
    label: string;
}

export interface Experiences {
    title: string;
    duration: string;
    location: string;
}
