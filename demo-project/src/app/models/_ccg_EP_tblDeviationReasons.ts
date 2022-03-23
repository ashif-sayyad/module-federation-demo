export class _ccg_EP_tblDeviationReasons
{
    public ID:number;
    public cName:string;
    public cDescription:string;
    public iCreatedBy:number;
    public dDateCreated:Date;
    public iLastModifiedBy:number;
    public dDateLastModified:Date;
}

export class _ccg_EP_vwDeviationReasons
{
    public ID:number;
    public cReason:string;
    public bIsEmergency:boolean;
    public iCreatedBy:number;
    public dDateCreated:Date;
    public iLastModifiedBy:number;
    public dDateLastModified:Date;
    public iIncidentTypeID:number;
    public cIncidentType:string;
}