export interface BlogContent {
    _id?: string;
    tag: "p" | "h2" | "img"
    type: "text" | "file";
    placeholder: string;
    className: string;
    align: 'left' | 'right' | 'center';
    content: string;
    scale?: number;
    alt?: string;
    caption?: string;
}

export interface Blog {
    _id: string;
    title: string;
    userId: string;
    directLink?: string;
    coverImg?: string;
    content: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    tags?: string[];
} 