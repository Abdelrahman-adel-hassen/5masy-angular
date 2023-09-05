import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStadium } from 'src/app/Shared/Models/Stadium';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DateTimeComponent } from 'src/app/Shared/components/date-time/date-time.component';
import { IReservation } from 'src/app/Shared/Models/Reservation';
import { ReservationStatus } from 'src/app/Shared/Models/ReservationStatus';
import { IReservationDate } from 'src/app/Shared/Models/ReservationDate';
import { DateHelperService } from 'src/app/Shared/Services/date-helper.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  selectedtimeSlots: string[] = [];
  selectedDate: Date = new Date();
  minDate = new Date();
  totalAmount = 0;
  selectedImage: string = '';
  selectedImageIndex: number = 0;
  stadium?: IStadium;
  quantity = 1;
  constructor(
    private dialog: MatDialog,
    private shopService: ShopService,
    private dateHelperService: DateHelperService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.shopService
      .getproduct(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe((stadium) => {
        this.stadium = stadium;
        this.selectedImage = this.stadium!.picturesUrl[0];
        this.dateHelperService.duration = this.stadium!.duration;
      });
  }
  selectImage(index: number) {
    this.selectedImage = this.stadium!.picturesUrl[index];
    this.selectedImageIndex = index;
  }
  ChooseTimeSlots() {
    this.getReservationDates();
  }

  getReservationDates() {
    this.shopService
      .getreservationDates(
        this.selectedDate,
        Number(this.activatedRoute.snapshot.paramMap.get('id'))
      )
      .subscribe((times) => {
        this.dateHelperService.selectedtimeSlotsfromOthers = times;
        console.log('times= ', times);
        this.setTimes();
      });
  }
  setTimes() {
    var dialogRef = this.openDateTimeComponent();
    this.TimeComponentClosing(dialogRef);
  }
  openDateTimeComponent() {
    const dialogRef = this.dialog.open(DateTimeComponent, {
      width: '50%',
    });
    return dialogRef;
  }
  TimeComponentClosing(dialogRef: MatDialogRef<DateTimeComponent, any>) {
    dialogRef.afterClosed().subscribe((selectedTimeSlots) => {
      if (selectedTimeSlots) {
        this.selectedtimeSlots = selectedTimeSlots;
        this.totalAmount = this.stadium!.cost * this.selectedtimeSlots.length;
      }
    });
  }
  dateOnchange() {
    this.dateHelperService.timeSlots = [];
    this.selectedtimeSlots = [];
    this.totalAmount = 0;
  }
  reserve() {
    console.log(`${this.selectedDate.toLocaleDateString().split("T")[0]}`,this.selectedDate);
    var x=new Date(`${this.selectedDate.toLocaleDateString().split("T")[0]} ${this.getMaxTime()}`);
    console.log(x,this.getMaxTime());
    const reservation: IReservation = {
      id: 0,
      StadiumId: this.stadium!.id,
      sellerId: 1,
      buyerId: 2,
      Times: this.selectedtimeSlots.map((ts) => this.convertStringTotime(ts)),
      cost: this.totalAmount,
      duration: this.stadium!.duration,
      stadiumName: this.stadium!.name,
      ReservationEndDateTime: new Date(`${this.selectedDate.toLocaleDateString().split("T")[0]} ${this.getMaxTime()}`).toISOString(),
      status: ReservationStatus.Responding,
    };
    console.log(reservation);
    this.shopService.createReservation(reservation).subscribe((res) => {
      if (res) this.router.navigate(['/Shop/confirm']);
    });
  }
  getMaxTime():string{
    
    return this.selectedtimeSlots.reduce(
      (max: any, current: any) =>
      this.convertNumber(current) > this.convertNumber(max) ? current : max
    );
  }
  convertNumber(date:string){
    return parseInt(date.replace(/\D/g, ''), 10) * (date.toLowerCase().includes('pm') ? 10 : 1);
  }
  convertStringTotime(time: string): IReservationDate {
    return { reservationTime: time, reservationId: 0 };
  }
}
