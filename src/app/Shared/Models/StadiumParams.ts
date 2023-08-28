import { SearchType } from "./SearchType";

export class StadiumParams {
    pageIndex: number=1;
    pageSize: number=8;
    searchType: SearchType=SearchType.name;
    search: string | null=null;
}
