import { IStadium } from "./Stadium";

export interface Pagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IStadium[];
}