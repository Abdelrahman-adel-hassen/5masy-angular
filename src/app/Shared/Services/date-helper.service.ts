import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateHelperService {
  timeSlots: { time: string; selected: boolean }[] = [];
  selectedtimeSlotsfromOthers: string[] = [];
  duration: number = 1;
  constructor() {
    this.generateTimeSlots();
  }
  generateTimeSlots() {
    if (this.timeSlots?.length > 0) return;
    const startTime = 0;
    const endTime = 24;
    const interval = this.duration / 60;

    for (let i = startTime; i < endTime; i += interval) {
      const time = this.formatTime12Hour(i);
      this.timeSlots.push({ time: time, selected: false });
    }
  }
  formatTime12Hour(time: number): string {
    const period = time >= 12 ? 'PM' : 'AM';
    const hours =
      Math.floor(time) == 0 || Math.floor(time) == 12
        ? 12
        : Math.floor(time) % 12;
    const minutes = Math.round((time - Math.floor(time)) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${period}`;
  }
  resetTimeSlots() {
    this.timeSlots.length = 0;
    this.generateTimeSlots();
  }
  isSlotReserved(timeslot: string) {
    return (
      this.selectedtimeSlotsfromOthers.length > 0 &&
      this.selectedtimeSlotsfromOthers.includes(timeslot)
    );
  }

  toggleTimeSlot(timeSlot: { time: string; selected: boolean }) {
    timeSlot.selected = !timeSlot.selected;
  }
}
