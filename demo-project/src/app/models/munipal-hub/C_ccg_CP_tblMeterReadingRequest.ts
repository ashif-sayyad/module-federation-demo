export class C_ccg_CP_tblMeterReadingRequest {
    public idMeter:number;
    public DCLink:number;
    public dReadingDate:Date;
    public dSubmitDate:Date;
    public fNewReading:number;
    public fConsumption:number;
    public cMeterLocation: string;
    public cAccount:string;
    public cStatus:string;
    public iIncidentID:number;
    public cMeterRejectReason:string;
  }