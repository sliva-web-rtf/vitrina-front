export interface ProjectsRequest {
    readonly page: number;
    readonly pageSize: number;
    readonly semester: number;
    readonly name: string;
    readonly period: string;
    readonly organization: string;
}
