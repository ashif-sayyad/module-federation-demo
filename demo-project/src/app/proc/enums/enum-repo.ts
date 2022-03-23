export enum ResponseStatus
{
    Success,
    Failure,
    Exception
}
export enum ResponseIncidentAction
{
    Request=1,
    Assign=2,
    Acknowledge=3,
    Close=4,
    Escalate=5,
    ReOpen=6,
    Approve=7,
    Reject=8
}

export enum QuoteSourcing
{
    RequestForQuote = 1,
    MiniTender = 2,
    BidSpecification = 3,
    ContractedServices = 4,
    PanelSuppliers = 5
}



export enum Competitive
{
    Competitive = 1,
    NonCompetitive = 2,
    Both = 3
}

export enum CommodityType
{
Account = 1,
Supplier = 2,
User = 3
}



export enum QuestionType
{
    RadioButton = 1,
    // CheckBox = 2,
    Text = 2
}

export enum RequestStatus
{
    Saved = 1,
    Request = 2,
    Approved = 3,
    Rejected = 4,
    ApprovedForRFQ = 5,
    SentToSupplier = 6,
    ReceivedQuotation = 7,
    QuotationEvaluated = 8,
    VendorSelect = 9,
    ApprovedForPO = 10,
    ApprovedForStockConsumption = 11,
    RejectedForRFQ = 12,
    Archived = 13,
    ApprovedForTender = 14,
    Closed = 15
}

export enum Events
{
    ApproveRequisition = 1,
    EvaluateQuotation = 2,
    GenerateRFQ = 3,
    ProspectiveSupplierApproval = 4,
    ReceiveQuotations = 5,
    RFQApproval = 6,
    ProcurementMethod = 7,
    BidSpecification = 8,
    MMBidApproval = 9,
    BECResponsiveness = 10,
    BECEvaluation = 11,
    PriceEvaluation = 12,
    BidAdjudication = 13,
    ApproveSupplier = 14,
    AccountingOfficer = 15,
    GeneratePO = 16,
    BudgetVerification = 17
}

export enum UDFOptions
{
    EvaluationCriteria = 1,
    Supplier = 2
}

export enum DeviationStatus
{
    InProgress = 1,
    Approved = 2,
    Rejected = 3
}

export enum IncidentCategories
{
    Requisition=1,
    Deviation=2
}

export enum TenderStatuses
{
InProgess = 1,
Invalid,
Appointed,
Closed
}