import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent {
  timeSlots: { time: string; selected: boolean }[];
  selectedtimeSlotsfromOthers:string[]=[];
  constructor(
    public dialogRef: MatDialogRef<DateTimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {timeSlots:any,selectedtimeSlotsfromOthers:any}
  ) {
    this.timeSlots = data.timeSlots;
    this.selectedtimeSlotsfromOthers=data.selectedtimeSlotsfromOthers;
    this.generateTimeSlots();
  }

  generateTimeSlots() {
    if (this.timeSlots?.length > 0) return;
    const startTime = 0; // Starting time in hours (24-hour format)
    const endTime = 24; // Ending time in hours (24-hour format)
    const interval = 0.25; // Time interval in hours (e.g., 0.5 means minutes)

    for (let i = startTime; i < endTime; i += interval) {
      const time = this.formatTime(i);
      this.timeSlots.push({ time: time, selected: false });
    }
  }
  doesthisslotisreserved(timeslot:string){
    return this.selectedtimeSlotsfromOthers.length>0&&this.selectedtimeSlotsfromOthers.includes(timeslot);
  }
  // formatTime12Hour(time: number): string {
  //   const period = time >= 12 ? 'PM' : 'AM';
  //   const hours = time >= 12 ? (time === 12 ? 12 : time - 12) : (time === 0 ? 12 : time);
  //   const minutes = Math.round((time - Math.floor(time)) * 60);
  //   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  // }
  formatTime(time: number): string {
    const hours = Math.floor(time);
    const minutes = (time - hours)*60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  }

  toggleTimeSlot(timeSlot: { time: string; selected: boolean }) {
    timeSlot.selected = !timeSlot.selected;
  }

  submitTimeSlots() {
    const selectedTimeSlots = this.timeSlots.filter((ts) => ts.selected);
    this.dialogRef.close(selectedTimeSlots);
  }
  resetTimeSlots() {
    this.timeSlots = [];
    this.generateTimeSlots();
  }
}
