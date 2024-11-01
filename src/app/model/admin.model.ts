// To parse this data:
//
//   import { Convert } from "./file";
//
//   const reservation = Convert.toReservation(json);

export interface Reservation {
    admin_id: string;
    email:    string;
    password: string;
    name:     string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toReservation(json: string): Reservation[] {
        return JSON.parse(json);
    }

    public static reservationToJson(value: Reservation[]): string {
        return JSON.stringify(value);
    }
}
