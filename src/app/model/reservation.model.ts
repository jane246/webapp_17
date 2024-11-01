// To parse this data:
//
//   import { Convert } from "./file";
//
//   const reservation = Convert.toReservation(json);

export interface Reservation {
    id_reser:     string;
    date_reser:   string;
    date_pay:     string;
    id_booth:     string;
    img_pay:      string;
    data_product: string;
    id_member:    string;
    status_reser: string;
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
