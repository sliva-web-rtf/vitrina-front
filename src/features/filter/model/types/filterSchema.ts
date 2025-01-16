export interface FilterSchema {
    name: string;
    pageSize: number;
    page: number;

    customer?: string;
    type?: string;
    sphere?: string;
}
