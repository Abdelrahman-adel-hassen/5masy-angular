import { ReservationStatus } from "./ReservationStatus";
import { IReservationDate } from "./ReservationDate";

export interface IReservation {
    id: number;
    duration: number;
    cost: number;
    StadiumId:number;
    sellerId:number,
    buyerId:number,
    status: ReservationStatus;
    stadiumName: string;
    ReservationEndDateTime:string;
    Times:IReservationDate[]
}