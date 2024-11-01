// To parse this data:
//
//   import { Convert } from "./file";
//
//   const member = Convert.toMember(json);

export interface Member {
    id_member: string;
    t_name:    string;
    f_name:    string;
    l_name:    string;
    phone:     string;
    email:     string;
    password:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMember(json: string): Member {
        return JSON.parse(json);
    }

    public static memberToJson(value: Member): string {
        return JSON.stringify(value);
    }
}