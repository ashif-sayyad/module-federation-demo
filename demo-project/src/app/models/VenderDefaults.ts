export class VendorDefaults {
    idVenDef:number;
    AutoYN:string;
    AutoLength:number;
    AutoAlphaLength:number;
    UpperAccNo:string;
    ForceProject:boolean;
    DefaultTxDesc:boolean;
    LatestVDPrice:boolean;
    FilterStartLength:number;
    iTaxRateIdNoCharge:number; //Tax rate FK ID
    taxRateCode: number; //as
    idTaxRate: number; //Tax rate PK ID
    iPEXTrCodeID:number;
    iLEXTrCodeID:number;
    fTaxPromptAmount:number;
    iDelAddressCodeID1:number; //delivery address FK ID
    IDDelAddressCode:number; //delivery address PK ID
    codeAddressOne:string; //as
    iDelAddressCodeID2:number; //delivery address FK ID
    codeAddressTwo:string; //as
    bUseAllocStoredProc:number;
    bInvTxCheckAccAfterChange:boolean;
    iEFTSLayoutID:number; //EFTS layout FK ID
    idEFTSLayout:number; //EFTS layout PK ID
    eftsDescription:string; //as
    cEFTSPathOutFile:string;
    iDefaultTermID:number; //terms FK ID
    iTermID: number; //terms PK ID
    termCode:string; // as
    iRevProfitAcc:number;
    iRevLossAcc:number;
    iProvForRevAcc:number;
    iRemitBatchManageOpt:number;
    VenDef_iBranchID:number;
    VenDef_dCreatedDate:Date;
    VenDef_dModifiedDate:Date;
    VenDef_iCreatedBranchID:number;
    VenDef_iModifiedBranchID:number;
    VenDef_iCreatedAgentID:number;
    VenDef_iModifiedAgentID:number;
    VenDef_iChangeSetID:number;
    VenDef_Checksum:number;
    iPDAgentID:number;
    iPDPromptOpt:number;
    dPDLastPrompt:Date;
    cEFTSFileName:string;
    bEFTSAutoNumbers:boolean;
    iEFTSPadLength:number;
    cEFTSPrefix:string;
}