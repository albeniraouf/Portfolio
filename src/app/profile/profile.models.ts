import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Skill {
    name: string;
    percentage: number;
}
export interface Company {
    name: string;
    link: string;
    description: string;
}
export interface Experience {
    company: Company;
    title: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    coreFunctionalities: string[];
    technologiesAndLanguages: string[];
}
export interface Education {
    startDate: Date;
    endDate?: Date;
    title: string;
    description: string;
    college: string;
    achievements: string[];
}
export interface Account {
    url: string;
    website: string;
    icon: IconDefinition;
}
export interface About {
    name: string;
    job: string;
    accounts: Account[];
    birthDate: Date,
    address: string;
    languages: string[];
    whoAmI: string;
}
export default interface Profile {
    experiences: Experience[];
    skills: Skill[];
    educations: Education[];
    about: About;
    emails: string[];
    phones: string[];
}