export interface Project {
    id: number;
    name: string;
    description: string;
    url?: string;
    github_url?: string;
    status: 'beta' | 'alpha' | 'stable' | 'experimental';
    category: string;
    order: number;
    is_featured: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface Coordinates {
    x: string;
    y: string;
    t: string;
}