// To parse this data:
//
//   import { Convert } from "./file";
//
//   const notpaid = Convert.toNotpaid(json);

export interface Notpaid {
    t_name:       string;
    f_name:       string;
    l_name:       string;
    phone:        string;
    name_booth:   string;
    name_zone:    string;
    status_reser: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toNotpaid(json: string): Notpaid[] {
        return JSON.parse(json);
    }

    public static notpaidToJson(value: Notpaid[]): string {
        return JSON.stringify(value);
    }
}
