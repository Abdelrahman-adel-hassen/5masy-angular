import { ReservationStatus } from "./ReservationStatus";

export interface IReservation {
    id: number;
    start: string;
    duration: number;
    cost: number;
    status: ReservationStatus;
    stadiumName: string;
}