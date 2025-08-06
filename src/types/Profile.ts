export interface Profile {
    url: Link;
    languages?: SkillsItem
    skillsList?: SkillsItem[]
    softSkills?: SkillsItem
    workingExperiences?: Experiences[]
    educationExperiences?: Experiences[]
    projects?: Project[]
}

export interface Link {
    resume: string;
    linkedIn: string;
    gitHub: string;
    mail: string;
    photo: string;
}

export interface SkillsItem {
    id?: string;
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

export interface Project {
    title: string;
    info: string;
    value: number;
    duration: string;
    tech: Skills[];
    url: {label: string; link: string}[]
}