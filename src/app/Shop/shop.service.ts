import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStadium } from '../Shared/Models/Stadium';
import { environment } from 'src/environments/environment';
import { ReservationStatus } from '../Shared/Models/ReservationStatus';
import { IReservation } from '../Shared/Models/Reservation';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getproduct(id: number) {
    return this.http.get<IStadium>(this.baseUrl + 'Stadium/' + id);
  }
  getreservations(
    status: ReservationStatus,
    buyerId?: number,
    sellerId?: number
  ) {
    let params = new HttpParams();
    params = params.append('status', status);
    if (buyerId) {
      params = params.append('buyerId', buyerId.toString());
    }
    if (sellerId) {
      params = params.append('sellerId', sellerId.toString());
    }

    return this.http.get<IReservation[]>(this.baseUrl + 'Reservation', {
      params: params,
    });
  }
  getreservationDates(
    start:Date
  ) {
    let params = new HttpParams();
    params = params.append('start', start.toDateString());
  console.log("isotostring= ",start);
    return this.http.get<string[]>(this.baseUrl + 'Reservation/Dates', {
      params: params,
    });
  }
}
