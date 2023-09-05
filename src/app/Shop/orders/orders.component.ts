import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ReservationStatus } from 'src/app/Shared/Models/ReservationStatus';
import { IReservation } from 'src/app/Shared/Models/Reservation';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  sellerId?: number;
  buyerId?: number;
  status: ReservationStatus;
  reservations: IReservation[];
  reservationStatus;
  constructor(private shopService: ShopService) {
    this.sellerId = undefined;
    this.buyerId = 2;
    this.status = ReservationStatus.All;
    this.reservations = [];
    this.reservationStatus = ReservationStatus;
  }
  ngOnInit(): void {
    this.getReservations();
  }
  transform(value: number, enumType: any): string {
    return enumType[value];
  }
  getReservations() {
    this.shopService
      .getreservations(this.status, this.buyerId, this.sellerId)
      .subscribe((res) => {
        if (res) {
          this.reservations = res;
        }
      });
  }
  setSatatus(status: ReservationStatus) {
    this.status = status;
    console.log(status);
    this.getReservations();
  }
  canelOrder(id: number) {
    this.shopService
      .cancelReservatoin(id, this.reservationStatus.Canceled)
      .subscribe((res) => {
        if (res) this.getReservations();
      });
  }
}
