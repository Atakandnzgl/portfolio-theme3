export interface BasePaginationModel<T> {
    data: T[];
    pageOptions: {
        page: number;
        limit: number;
    }
} 