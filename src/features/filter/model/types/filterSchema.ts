export interface FilterSchema {
    name: string;
    period: string;
    organization: string;
    semester: number | null;
    pageSize: number;
    page: number;
}
