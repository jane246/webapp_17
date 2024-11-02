// To parse this data:
//
//   import { Convert } from "./file";
//
//   const event = Convert.toEvent(json);

export interface Event {
    id_event:   string;
    name_event: string;
    date_start: string;
    date_end:   string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toEvent(json: string): Event[] {
        return JSON.parse(json);
    }

    public static eventToJson(value: Event[]): string {
        return JSON.stringify(value);
    }
}
