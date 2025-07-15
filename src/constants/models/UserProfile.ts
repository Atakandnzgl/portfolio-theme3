export interface SocialMedia {
    icon: string;
    placeholder: string;
    value: string;
}

export interface Skill {
    title: string;
    description: string;
}

export interface Experience {
    title: string;
    description: string;
    date: string;
}

export interface UserProfile {
    _id: string;
    userId: string;
    fullName: string;
    companyName: string | null;
    email: string;
    role: string;
    linkNick: string;
    about: string;
    showcase: string;
    profileImg: string;
    socialMedias: SocialMedia[];
    city: string;
    country: string;
    workState: boolean;
    skills: Skill[];
    experiences: Experience[];
    createdAt: string;
    updatedAt: string;
    activeTheme: string;
    availableThemes: string[];
    hasPortfolio: boolean;
} 