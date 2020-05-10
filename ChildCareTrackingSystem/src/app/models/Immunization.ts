export default class Immunization{
    immunizationid:string;
    profileid:string;
scheduledetails:Schedule[];
}

export class Vaccine{
name:string;
manufacture:string;
type:string;
expiredate:Date
}
export class Schedule{
    vaccineschedule:number
    vaccine:Vaccine[];
}