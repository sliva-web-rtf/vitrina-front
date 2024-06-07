export interface ProjectsRequest {
    readonly page: number;
    readonly pageSize: number;
    readonly semester: number | null;
    readonly name: string;
    readonly period: string;
    readonly organization: string;
}
