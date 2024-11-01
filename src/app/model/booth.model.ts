// To parse this data:
//
//   import { Convert } from "./file";
//
//   const booth = Convert.toBooth(json);

export interface Booth {
    id_booth:   string;
    name_booth: string;
    width:      string;
    length:     string;
    product:    string;
    id_zone:    string;
    price:      string;
    img_booth:  string;
    status:     string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toBooth(json: string): Booth[] {
        return JSON.parse(json);
    }

    public static boothToJson(value: Booth[]): string {
        return JSON.stringify(value);
    }
}