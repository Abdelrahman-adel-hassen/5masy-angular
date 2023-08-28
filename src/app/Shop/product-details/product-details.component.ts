import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { IStadium } from 'src/app/Shared/Models/Stadium';
import { MatDialog } from '@angular/material/dialog';
import { DateTimeComponent } from 'src/app/Shared/components/date-time/date-time.component';
import { Time } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  timeSlots: { time: string; selected: boolean }[] = [];
  selectedtimeSlotsfromOthers:string[]=[];
  selectedtimeSlots:string[]=[];
  selectedDate: Date = new Date();
  currentdDate: Date|undefined;
  minDate = new Date();
  totalAmount=0;
  constructor(
    private dialog: MatDialog,
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getProduct();
  }
  private openTimePickerDialog() {
    this.getReservationDates();
  }
  selectedImage: string = ''; // Holds the URL of the selected image
  selectedImageIndex: number = 0; // Index of the selected image, initially set to 0
  stadium?: IStadium;
  quantity = 1;

  selectImage(index: number) {
    this.selectedImage = this.stadium!.picturesUrl[index];
    this.selectedImageIndex = index;
  }
  ChooseDateAndTime() {
    this.openTimePickerDialog();
  }
  getProduct() {
    this.shopService
      .getproduct(Number(this.activatedRoute.snapshot.paramMap.get('id')))
      .subscribe((stadium) => {
        this.stadium = stadium;
        this.selectedImage = this.stadium!.picturesUrl[0];
      });
  }
  getReservationDates() {
    console.log('date=  ', this.selectedDate);
    if(this.currentdDate==this.selectedDate){
      this.settimes();
      return;
    }
    this.currentdDate=this.selectedDate;
    this.shopService
      .getreservationDates(this.selectedDate)
      .subscribe((times) => {
        console.log("times=",times,this.selectedDate);
        this.selectedtimeSlotsfromOthers=times;
        this.timeSlots=[];
        this.settimes();
      
      });
  }
  settimes(){
    const dialogRef = this.dialog.open(DateTimeComponent, {
      data: {timeSlots:this.timeSlots,selectedtimeSlotsfromOthers:this.selectedtimeSlotsfromOthers},
      width: '50%',
    });

    dialogRef
      .afterClosed()
      .subscribe(( selectedTimeSlots ) => {
        if (selectedTimeSlots) {
          this.selectedtimeSlots=selectedTimeSlots;
          this.totalAmount=this.stadium!.cost*this.selectedtimeSlots.length;
          console.log(selectedTimeSlots);
        }
      });
  }
}
