// To parse this data:
//
//   import { Convert } from "./file";
//
//   const paid = Convert.toPaid(json);

export interface Paid {
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
    public static toPaid(json: string): Paid[] {
        return JSON.parse(json);
    }

    public static paidToJson(value: Paid[]): string {
        return JSON.stringify(value);
    }
}
