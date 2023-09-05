import { Time } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { DateHelperService } from '../../Services/date-helper.service';
@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent {

  constructor(
    public dialogRef: MatDialogRef<DateTimeComponent>,
    private dateHelperService: DateHelperService,
  ) {
    
  }
  resetTimeSlots() {
    this.dateHelperService.resetTimeSlots();
  }
  isSlotReserved(timeslot: string) {
    return this.dateHelperService.isSlotReserved(timeslot);
  }

  toggleTimeSlot(timeSlot: { time: string; selected: boolean }) {
    timeSlot.selected = !timeSlot.selected;
  }
  submitTimeSlots() {
    const selectedTimeSlots = this.dateHelperService.timeSlots
      .filter((ts) => ts.selected)
      .map((ts) => ts.time);
    this.dialogRef.close(selectedTimeSlots);
  }
  getTimeSlot(){
    return this.dateHelperService.timeSlots;
  }
}
