export class Vendors{
    DCLink:number;
    Account:string;
    Name:string;
    Title:string;
    Init:string;
    Contact_Person:string;
    Physical1:string;
    Physical2:string;
    Physical3:string;
    Physical4:string;
    Physical5:string;
    PhysicalPC:string;
    Addressee:string;
    Post1:string;
    Post2:string;
    Post3:string;
    Post4:string;
    Post5:string;
    PostPC:string;
    Delivered_To:string;
    Telephone:string;
    Telephone2:string;
    Fax1:string;
    Fax2:string;
    AccountTerms:number;
    CT:boolean;
    Tax_Number:string;
    Registration:string;
    Credit_Limit:number;
    Interest_Rate:number;
    Discount:number;
    On_Hold:boolean;
    BFOpenType:number;
    EMail:string;
    BankLink:number; //bank PK ID
    bankName:string; //as
    Counter:number; //bank FK ID
    BranchCode:number;
    BankAccNum:number;
    BankAccType:string;
    AutoDisc:number;
    DiscMtrxRow:number;
    DCBalance:number;
    CheckTerms:boolean;
    UseEmail:string;
    iBusTypeID:number;
    iBusClassID:number;
    iCountryID:number;
    cAccDescription:string;
    cWebPage:string;
    dTimeStamp:Date;
    iClassID:number; // vendorGroup FK ID
    venGroupDescr:string; //as
    idVenClass:number; //vendorGroup PK ID
    iAreasID:number; //area FK ID
    areaDescr:string; //as
    // idAreas:number; //area PK ID
    cBankRefNr:string;
    iCurrencyID:number;
    bStatPrint:boolean;
    bStatEmail:boolean;
    cStatEmailPass:boolean;
    bForCurAcc:boolean;
    bRemittanceChequeEFTS:number;
    fForeignBalance:number;
    iSettlementTermsID:number; //settlementTerm FK ID
    settlementTermCode:string; //as
    idSettlementTerms:number; //settlementTerm PK ID
    bSourceDocPrint:boolean;
    bSourceDocEmail:boolean;
    iEUCountryID:number;
    iDefTaxTypeID:number; //taxType FK ID
    taxRateDescription:string; //as
    idTaxRate:number; //taxType PK ID
    iAgeingTermID:number; //ageingPeriod FK ID
    ageingPeriodDescription:string; //as
    ageingPeriodDescription1:string;
    ageingPeriodDescription2:string;
    ageingPeriodDescription3:string;
    ageingPeriodDescription4:string;
    ageingPeriodDescription5:string;
    ageingPeriodDescription6:string;
    ageingPeriodDescription7:string;
    iTermDescOption:number;
    iTermID:number; //ageingPeriod PK ID
    termDescription1:string;
    termDescription2:string;
    termDescription3:string;
    termDescription4:string;
    termDescription5:string;
    termDescription6:string;
    termDescription7:string;
    cTermDesc1:string;
    cTermDesc2:string;
    cTermDesc3:string;
    cTermDesc4:string;
    cTermDesc5:string;
    cTermDesc6:string;
    cTermDesc7:string;
    iBankDetailType:number; 
    cBankAccHolder:string;
    cIDNumber:number;
    cPassportNumber:number;
    cBankCode:number;
    cSwiftCode:number;
    iBankDetailID:number; //bankDetail FK ID
    bankAccountName:string; //as
    idBankDetail:number; //bankDetail PK ID
    Vendor_iBranchID:number;
    Vendor_dCreatedDate:Date;
    Vendor_dModifiedDate:Date;
    Vendor_iCreatedBranchID:number;
    Vendor_iModifiedBranchID:number;
    Vendor_iCreatedAgentID:number;
    Vendor_iModifiedAgentID:number;
    Vendor_iChangeSetID:number;
    Vendor_Checksum:string;
    iSPQueueID:number;
    iTaxState:number; //taxState FK ID
    taxStateDescription:string; //as
    idState:number; //taxState PK ID
    bTaxVerified:boolean;
    dDateTaxVerified:Date;
    cRMCDApprovalNumber:number;
    dRMCDApprovalDate:Date;
    bObjectToProcess:boolean;
    bStatEmailPeople:boolean;
    bSourceDocEmailPeople:boolean;
    iTaxCountryID:number; //taxCountry FK ID
    taxCountryDescription:string; //as
    idTaxCountry:number; //taxCountry PK ID

}