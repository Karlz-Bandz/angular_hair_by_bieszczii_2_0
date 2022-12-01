import { Description } from "./description";

export interface Client{

    id: number;
    clientName: string;
    clientSurname: string;
    phoneNumber: string;

    descriptions: Description[];

}