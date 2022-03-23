export class C_ccg_EP_tblRequisitionLines
{
    public ID:number;
    public iRequisitionID:number;
    public iLineNumber:number;
    public cLineDescription:string;
    public cDescription:string;
    public fQuantity:number;
    public fLineUnitAmount:number;
    public fLineTotalAmount:number;
    public iGLST:number;
    public iLedgerAccountID:number;
    public cLineNote:string;
    public cInternalLineNote:string;
    public iProjectID:number;
    public iItemID:number;
    public iJobID:number;
    public iAreaID:number;
    public iCommodityID:number;
    public iUOM:number;
    public cUniqueCode:string;
    public cAvBudget:string; 
    public bBudgetAlert:boolean;
    public bInclVat:boolean;
    public fPriceQuotedExcl:number;
    public fPriceQuotedTax:number;
    public fPriceQuotedIncl:number;
    public iTaxType:number;
    public MaxLevel:number;
    public QtyOnHand:number;
    public fAvailQty:number;
}