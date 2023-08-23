export interface Idea {
    category: string[];
    created_at: string | null;
    description: string;
    estimated_time: string;
    id: number;
    title: string;
    user_id: number | null;
}