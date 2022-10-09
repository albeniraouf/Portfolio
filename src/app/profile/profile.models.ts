import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Company {
  name: string;
  link: string;
  description: string;
  image?: string;
  imageStyle?: string;
  showName: boolean;
}
export interface Experience {
  company: Company;
  title: string;
  startDate: Date;
  endDate?: Date;
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
  icon?: IconDefinition;
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
  birthDate: Date;
  address: string;
  addressOnMap: string;
  languages: string[];
  whoAmI: string;
}
export default interface Profile {
  experiences: Experience[];
  skills: string[];
  educations: Education[];
  about: About;
  emails: string[];
  phones: string[];
}
