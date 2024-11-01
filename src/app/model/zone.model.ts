// To parse this data:
//
//   import { Convert } from "./file";
//
//   const zone = Convert.toZone(json);

export interface Zone {
    id_zone:     string;
    name_zone:   string;
    num_booth:   string;
    id_event:    string;
    total_booth: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toZone(json: string): Zone[] {
        return JSON.parse(json);
    }

    public static zoneToJson(value: Zone[]): string {
        return JSON.stringify(value);
    }
}