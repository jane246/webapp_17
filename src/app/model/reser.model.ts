// To parse this data:
//
//   import { Convert } from "./file";
//
//   const reser = Convert.toReser(json);

export interface Reser {
    t_name:     string;
    f_name:     string;
    l_name:     string;
    name_zone:  string;
    price:      string;
    name_booth: string;
    status:     string;
    id_reser:   string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toReser(json: string): Reser[] {
        return JSON.parse(json);
    }

    public static reserToJson(value: Reser[]): string {
        return JSON.stringify(value);
    }
}
