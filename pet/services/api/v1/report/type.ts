export interface AllReportQueryParams {
    is_solved?: boolean;
    category: string | 'all';
}
export interface IAllReports {
    party_reports_count: number;
    reports_category_party?: IReport[];
    reports_category_system?: IReport[];
    success: boolean;
    system_reports_count: number;
}
export interface IReport {
    id: string;
    reporter_id: string;
    reportee_id?: string;
    description: string;
    is_solved: boolean;
}
