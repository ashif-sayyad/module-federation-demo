export class IncidentAction
{
    public iIncidentID: number;
    // public ID:number;
    public iIncidentTypeID: number; //
    public iActionID: number;//
    public iModuleID: number;//
    public cDescription:string;//
    public cEmailMessage:string;//
    public cOutline:string;
    public iStatusID: number;//
    public iWorkflowStepID: number;
    public iCurrentUserID: number;
    public iDebtorID: number;//Logged in user id
    public iSupplierID: number;
    public bIsLastStep:boolean;
    public iPriorityID:number;
    public fAmount:number;
}