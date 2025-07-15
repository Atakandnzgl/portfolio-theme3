import { ThemeEnum } from "../enums/ThemeEnum";
import { Blog } from "./Blog";

export interface Skill {
    title: string;
    description: string;
}

export interface Experience {
    title: string;
    description: string;
    date: string;
}

export interface SocialMedia {
    icon: string; // MUI ikon bileşeni tipi
    link: string;
}

interface Portfolio {
    _id: string;
    firstName: string;
    lastName: string;
    imgUrl: string;
    userName: string;
    themeId: number;
    about: string;
    role: string;
    city: string;
    country: string;
    email: string;
    skills: Skill[];
    experiences: Experience[];
    socialMedias: SocialMedia[];
    activeTheme: ThemeEnum
    availableThemes: ThemeEnum[]
    blogs: Blog[]
}

export default Portfolio; 