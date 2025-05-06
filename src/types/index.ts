export interface Project {
    id: string;
    title: string;
    description: string;
    detailedSummary: string;
    link: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export interface Skill {
    category: string;
    technologies: string[];
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}