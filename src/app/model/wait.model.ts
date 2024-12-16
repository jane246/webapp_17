// To parse this data:
//
//   import { Convert } from "./file";
//
//   const wait = Convert.toWait(json);

export interface Wait {
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
    public static toWait(json: string): Wait[] {
        return JSON.parse(json);
    }

    public static waitToJson(value: Wait[]): string {
        return JSON.stringify(value);
    }
}
