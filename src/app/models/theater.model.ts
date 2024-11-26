import { Seat } from "./seat.model";

export class Theater {
    id?: number;
    location: string;
    capacity: number;
    //Tiene muchas sillas
    seats?: Seat[]
}
