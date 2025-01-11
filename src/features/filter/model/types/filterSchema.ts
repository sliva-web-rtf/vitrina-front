export interface FilterSchema {
    name: string;
    pageSize: number;
    page: number;

    customer?: string;
    projectType?: string;
    sphere?: string;
}
