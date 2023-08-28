import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pagination } from '../Shared/Models/Pagination';
import { StadiumParams } from '../Shared/Models/StadiumParams';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
  }
  GetStatiums(statiumParams: StadiumParams) {
    let params = new HttpParams();
    if (statiumParams.search){
      params = params.append('Search', statiumParams.search);
      params = params.append('SearchType', statiumParams.searchType);
    } 
    params = params.append('PageIndex', statiumParams.pageIndex.toString());
    params = params.append('PageSize', statiumParams.pageSize.toString());
    return this.http.get<Pagination>(this.apiUrl + 'Stadium', {
      params: params,
    });
  }
}
