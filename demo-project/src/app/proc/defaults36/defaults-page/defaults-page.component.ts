import { Component, OnInit, ViewChild } from '@angular/core';
import {tblCurrenciesService} from '../../../services/Procurement/_ccg_EP_tblCurrency-service';
import {vwWorkflowService} from '../../../services/Procurement/vwWorkflow-service';
import {C_ccg_EP_tblDefaults} from '../../../models/_ccg_EP_tblDefaults';
import {tblDefaultsService} from '../../../services/Procurement/_ccg_EP_tblDefaults-service';
import {CustomService} from '../../../services/common-services/Custom-Service';
import { MessageDialogComponent, DialogMessageTypes } from '../../common/message-dialog/message-dialog.component';
import { ResponseStatus } from '../../enums/enum-repo';
import {vwSegmentSetupService} from '../../../services/Procurement/_ccg_EP_vwSegmentSetup-service';
import {vwTaxRateService} from '../../../services/Procurement/_ccg_EP_vwTaxRate-service';
import { vwUsersService } from '../../../services/Procurement/_ccg_vwUsers-service';
import { vwIncidentTypeService } from '../../../services/Procurement/_ccg_EP_vwIncidentType-service';
import { vwEventsService } from '../../../services/Procurement/_ccg_EP_vwEvents-service';
import { ConfirmDialogComponent } from '../../common/confirm-dialog/confirm-dialog.component';
import { vwRejectionSettingsService } from '../../../services/Procurement/_ccg_EP_vwRejectionSettings-service';

@Component({
  selector: 'app-defaults-page',
  templateUrl: './defaults-page.component.html',
  styleUrls: ['./defaults-page.component.css']
})
export class DefaultsPageComponent implements OnInit {
  datasource: any;
  toolbarButtonOptions: any = {
    text: 'Save Note',
    stylingMode: 'text',
    icon: 'save',
    onClick: () => this.ApplyClick()
  }
  ProjectTypes:any[]=[{id:1,text:"On Document"},{id:2,text:"In Line"}];
  ProjectTypesValue = this.ProjectTypes[0];
  ForceTypes:any[]=[{id:1,text:"All Acounts"},{id:2,text:"Balance sheet accounts"}];
  ForceTypesValue = this.ForceTypes[0];
  ResetFrequencyOptions:any[]=[{id:1,text:"Never"},{id:2,text:"Month"},{id:3,text:"Year"}];
  SelectRFQBiddersOptions:any[]=[{id:1,text:"Automatically"},{id:2,text:"User Selection"},{id:3,text:"Random"}];
  SupplierOptions:any[]=[{id:1,text:"Regional"},{id:2,text:"Linked"},{id:3,text:"All"}];

  newDefaultRecord:C_ccg_EP_tblDefaults=new C_ccg_EP_tblDefaults();
  readonlyEnabled: any;
  cTenderSample="";
  cReqSample="";
  vPass="";
  cRFQSample="";
  cDevSample="";
  bForceEnableValue: any;
  cPOSample="";
  ResetFrequencyOptionsValue=this.ResetFrequencyOptions[0];
  SelectRFQBiddersOptionsValue=this.SelectRFQBiddersOptions[0];
  SupplierOptionsValue=this.SupplierOptions[0];

  ddlCurrency=this.tblCurrenciesService.oDataSource;
  ddlWorkflows=this.vwWorkflowService.oDataSource;
  ddlTaxOptions=this.vwTaxRateService.oDataSource;
  ddlIncidentTypes = this.vwIncidentTypeService.oDataSource;
  lblReadOnly:boolean=true;
  checkBoxValue:boolean=false;
  lblReadOnlyNoDays:boolean = true;
  SupplierOverrideValue:boolean=false;
  loadingVisible:boolean=false;
  disAutoArchive:boolean = false;
  bRFQClosingDate:boolean = false;
  disDefBuyer:boolean=true;
  disiNoInvalidDays:boolean = true;
  disProjectTypes:boolean = true;
  bSetInvalidTenderValue:boolean = false;
  isNewResbumitSettingsPopupVisible:boolean = false;
  iPONextNum:string ="0";
  iPOPad:string ="0";
  iREQPad:string ="0";
  iREQNextNum:string ="0";
  iRFQPad:string ="0";
  iRFQNextNum:string ="0";
  iDevPad:string ="0";
  iDevNextNum:string ="0";
  iTendPad:string="0";
  iTendNextNum:string="0";
  cPOPadCharacter:string="";
  cPOPrefix:string="";
  cREQPrefix:string="";
  cREQPadCharacter:string="";
  cPOSuffix:string="";
  cREQSuffix:string="";
  cRFQPrefix:string="";
  cRFQPadCharacter:string="";
  cRFQSuffix:string="";

  cDevPrefix:string="";
  cDevPadCharacter:string="";
  cDevSuffix:string="";
  
  cTendPrefix:string="";
  cTendPadCharacter:string="";
  cTendSuffix:string="";
  ddlDefaultBuyer=this.vwUsersService.oDataSource;

  isInvitationEmailPopupVisible:boolean=false;
  isAlertEmailPopupVisible:boolean=false;
  bAutoArchiveValue:boolean = false;
  bAllEventscheckBoxValue:boolean = false;
  disEvent:boolean = true;
  disForceTypes:boolean = true;
  newResbmitSettingRecord:ResbmitSettingRecord = new ResbmitSettingRecord();

  cPFSuffix:string="";
  editorValue:String ="";
  editorCommitteValue:String="";
  editorAlertCommitteValue:String="";
  bAllowAutoRequisition: any;
  user=sessionStorage.getItem("UserID");
  selectedRecords:any[] = [];
  ddlOnResubmit:any[]= [{value: 1, name:"Back To Reject Step"},{value: 2, name:"Follow Workflow"}];
  ddlOnReject:any[]=[{value: 1, name:"Back To Requestor"},{value:2, name:"Follow workflow"}];
  ddlEvents=this.vwEventsService.oDataSource;
  ddlMSC=this.vwSegmentSetupService.oDataSource;
  @ViewChild(MessageDialogComponent)
  messageDialog!: MessageDialogComponent;
  @ViewChild(ConfirmDialogComponent)
  confirmDialog!: ConfirmDialogComponent;

  constructor(private tblDefaultsService:tblDefaultsService,private vwIncidentTypeService:vwIncidentTypeService,
    private vwSegmentSetupService:vwSegmentSetupService,private vwUsersService:vwUsersService,private vwRejectionSettingsService:vwRejectionSettingsService,
    private CustomService:CustomService,private tblCurrenciesService:tblCurrenciesService,private vwEventsService:vwEventsService,
    private vwWorkflowService:vwWorkflowService,private vwTaxRateService:vwTaxRateService) 
  { }

  ngOnInit() {
    this.LoadData();
    this.refreshGridEventLinks();
  }

  onValueChanged(e: any)
  {
    this.cPOSample = this.pad();
    this.cReqSample=this.PadR();
    this.cRFQSample=this.PadRFQ();
    this.cDevSample=this.PadDev();
    this.cTenderSample=this.PadTend();
  }

  AlleventsChanged(e: { value: boolean; })
  {
    if(e.value == true)
    {
      this.disEvent = true;
    }
    else
    {
      this.disEvent = false;
    }
  }

  checkboxForceEnabled(e: { value: boolean; })
  {
    if(e.value == true)
    {
      this.disForceTypes = false;
      this.disProjectTypes = false;
    }
    else
    {
      this.disForceTypes = true;
      this.disProjectTypes = true;
    }
  }

  bAllowOverridevalueChanged(e: { value: boolean; })
  {
    this.SupplierOverrideValue = e.value;
    this.newDefaultRecord.bAllowSuppOverride = e.value;
  }

  checkboxAllowAutoReq(e: { value: boolean; })
  {
    if(e.value==true)
    {
      this.disDefBuyer=false;
    }
    else{
      this.disDefBuyer=true;
    }
    this.newDefaultRecord.bAllowAutoRequisition=e.value;
  }

  checkboxAllowAutoArchive(e: { value: boolean; })
  {
    if(e.value==true)
    {
      this.disAutoArchive=false;
    }
    else{
      this.disAutoArchive=true;
    }

    this.newDefaultRecord.bAutoArchive = e.value;
  }

  pad()
  {
    let refGen = "";
    var x = this.newDefaultRecord.iPONextNum.toString().length;

    refGen = this.cPOPrefix;

    while (x < Number(this.iPOPad))
    {
      refGen += this.cPOPadCharacter;
        x++;
    }
    refGen += this.iPONextNum;
    refGen += this.cPOSuffix;
    return refGen;
  }

  PadR()
  {
    let refGen = "";
    var x = this.newDefaultRecord.iREQNextNum.toString().length;

    refGen = this.cREQPrefix;

    while (x < Number(this.iREQPad))
    {
      refGen += this.cREQPadCharacter;
        x++;
    }
    refGen += this.iREQNextNum;
    refGen += this.cREQSuffix;
    return refGen;
  }

  PadRFQ()
  {
    let refGen = "";
    var x = this.newDefaultRecord.iRFQNextNum.toString().length;

    refGen = this.cRFQPrefix;

    while (x < Number(this.iRFQPad))
    {
      refGen += this.cRFQPadCharacter;
        x++;
    }
    refGen += this.iRFQNextNum;
    refGen += this.cRFQSuffix;
    return refGen;
  }

  PadDev()
  {
    let refGen = "";
    var x = this.newDefaultRecord.iDevNextNum.toString().length;

    refGen = this.cDevPrefix;

    while (x < Number(this.iDevPad))
    {
      refGen += this.cDevPadCharacter;
        x++;
    }
    refGen += this.iDevNextNum;
    refGen += this.cDevSuffix;
    return refGen;
  }

  PadTend()
  {
    let refGen = "";
    var x = this.newDefaultRecord.iTendNextNum.toString().length;

    refGen = this.cTendPrefix;

    while (x < Number(this.iTendPad))
    {
      refGen += this.cTendPadCharacter;
        x++;
    }
    refGen += this.iTendNextNum;
    refGen += this.cTendSuffix;
    return refGen;
  }

  LoadData()
  {
    this.loadingVisible=true;
    this.newDefaultRecord=new C_ccg_EP_tblDefaults();
    this.tblDefaultsService.searchNonOdata("tblDefaults").subscribe(
      (      data: { value: string | any[]; })=>{
        if(data.value.length!=0)
        {
          this.iPONextNum=data.value[0].iPONextNum.ToString();
          this.cPOPrefix=data.value[0].cPOPrefix;
          this.cPOPadCharacter=data.value[0].cPOPadCharacter;
          this.cPOSuffix=data.value[0].cPOSuffix;
          this.iPOPad=data.value[0].iPOPad.ToString();

          this.cREQPrefix=data.value[0].cREQPrefix;
          this.iREQPad=data.value[0].iREQPad.ToString();
          this.iREQNextNum=data.value[0].iREQNextNum.ToString();
          this.cREQSuffix=data.value[0].cREQSuffix;
          this.cREQPadCharacter=data.value[0].cREQPadCharacter;

          this.cRFQPrefix=data.value[0].cRFQPrefix;
          this.iRFQPad=data.value[0].iRFQPad.ToString();
          this.iRFQNextNum=data.value[0].iRFQNextNum.ToString();
          this.cRFQSuffix=data.value[0].cRFQSuffix;
          this.cRFQPadCharacter=data.value[0].cRFQPadCharacter;

          this.cDevPrefix=data.value[0].cDevPrefix;
          this.iDevPad=data.value[0].iDevPad.ToString();
          this.iDevNextNum=data.value[0].iDevNextNum.ToString();
          this.cDevSuffix=data.value[0].cDevSuffix;
          this.cDevPadCharacter=data.value[0].cDevPadCharacter;
          
          this.cTendPrefix=data.value[0].cTendPrefix;
          this.iTendPad=data.value[0].iTendPad.ToString();
          this.iTendNextNum=data.value[0].iTendNextNum.ToString();
          this.cTendSuffix=data.value[0].cTendSuffix;
          this.cTendPadCharacter=data.value[0].cTendPadCharacter;

          
          this.checkBoxValue=data.value[0].bUseWorkflowForRFQPublish;
          this.SupplierOverrideValue = data.value[0].bAllowSuppOverride;
          
          this.editorValue=data.value[0].cRFQEmail;
          this.editorCommitteValue=data.value[0].cCommitteeEmail;
          this.editorAlertCommitteValue=data.value[0].cAlertCommitteeEmail;

          this.newDefaultRecord=data.value[0];
          this.bAllowAutoRequisition=data.value[0].bAllowAutoRequisition;
          this.bAutoArchiveValue = data.value[0].bAutoArchive;
          this.vPass = data.value[0].cEmailPassword;

          this.bRFQClosingDate = data.value[0].bAutoRFQClosingDate;
          this.bSetInvalidTenderValue = data.value[0].bAutoTenderClosingDate;
          this.bForceEnableValue = data.value[0].bForceProjects;

          // Force Project Types Radio buttons
          if(data.value[0].iForceTypeID==1)
          {
            this.ForceTypesValue = this.ForceTypes[0];
          }
          else
          {
            this.ForceTypesValue = this.ForceTypes[1];
          }

          // Project Radio Buttons
          if(data.value[0].iProjectTypeID==1)
          {
            this.ProjectTypesValue = this.ProjectTypes[0];
          }
          else
          {
            this.ProjectTypesValue = this.ProjectTypes[1];
          }

          if(data.value[0].iPOResetFrequency==3)
          {
            this.ResetFrequencyOptionsValue=this.ResetFrequencyOptions[2];
          }
          else if(data.value[0].iPOResetFrequency==2)
          {
            this.ResetFrequencyOptionsValue=this.ResetFrequencyOptions[1];
          }
          else
          {
            this.ResetFrequencyOptionsValue=this.ResetFrequencyOptions[0];
          }
          // END

          if(data.value[0].iSelectRFQBidders==3)
          {
            this.SelectRFQBiddersOptionsValue=this.SelectRFQBiddersOptions[2];
          }
          else if(data.value[0].iSelectRFQBidders==2)
          {
            this.SelectRFQBiddersOptionsValue=this.SelectRFQBiddersOptions[1];
          }
          else
          {
            this.SelectRFQBiddersOptionsValue=this.SelectRFQBiddersOptions[0];
          }
          // END

          if(data.value[0].iSupplierOption==3)
          {
            this.SupplierOptionsValue=this.SupplierOptions[2];
          }
          else if(data.value[0].iSupplierOption==2)
          {
            this.SupplierOptionsValue=this.SupplierOptions[1];
          }
          else
          {
            this.SupplierOptionsValue=this.SupplierOptions[0];
          }
          // END


        }
        this.loadingVisible=false;
      },
      (      error: any)=>{
        this.loadingVisible=false;
        this.messageDialog.show("The system failed to load defaults, Please contact system admin.",DialogMessageTypes.SystemError);
      }
    )
  }

  bSetInvalidvalueChanged(e: any)
  {
    if(this.bSetInvalidTenderValue == true)
    {
      this.disiNoInvalidDays = false;
    }
    else
    {
      this.newDefaultRecord.iTenderClosingDateDays = null;
      this.disiNoInvalidDays = true;
    }
  }

  checkboxRFQClosingDate(e: { value: boolean; })
  {
    this.newDefaultRecord.bAutoRFQClosingDate = this.bRFQClosingDate;
    if(e.value == true)
    {
      this.lblReadOnlyNoDays = false;
    }
    else
    {
      this.newDefaultRecord.iRFQClosingDateDays = null;
      this.lblReadOnlyNoDays = true;
    }
  }

  bWorkflowvalueChanged(e: { value: boolean; })
  {
    if(e.value==true)
    {
      this.lblReadOnly=false;
    }
    else
    {
      this.lblReadOnly=true;
    }
  }

  ApplyClick()
  {
    this.newDefaultRecord.iPOResetFrequency=this.ResetFrequencyOptionsValue.id;
    this.newDefaultRecord.iSelectRFQBidders=this.SelectRFQBiddersOptionsValue.id;
    this.newDefaultRecord.iSupplierOption=this.SupplierOptionsValue.id;
    this.newDefaultRecord.bUseWorkflowForRFQPublish=this.checkBoxValue;

    this.newDefaultRecord.cPOPadCharacter=this.cPOPadCharacter;
    this.newDefaultRecord.iPONextNum=Number(this.iPONextNum);
    this.newDefaultRecord.cPOPrefix=this.cPOPrefix;
    this.newDefaultRecord.iPOPad=Number(this.iPOPad);
    this.newDefaultRecord.cPOSuffix=this.cPOSuffix;

    this.newDefaultRecord.cREQPrefix=this.cREQPrefix;
    this.newDefaultRecord.iREQPad=Number(this.iREQPad);
    this.newDefaultRecord.iREQNextNum=Number(this.iREQNextNum);
    this.newDefaultRecord.cREQSuffix=this.cREQSuffix;
    this.newDefaultRecord.cREQPadCharacter=this.cREQPadCharacter;

    this.newDefaultRecord.cRFQPrefix=this.cRFQPrefix;
    this.newDefaultRecord.iRFQPad=Number(this.iRFQPad);
    this.newDefaultRecord.iRFQNextNum=Number(this.iRFQNextNum);
    this.newDefaultRecord.cRFQSuffix=this.cRFQSuffix;
    this.newDefaultRecord.cRFQPadCharacter=this.cRFQPadCharacter;

    this.newDefaultRecord.cDevPrefix=this.cDevPrefix;
    this.newDefaultRecord.iDevPad=Number(this.iDevPad);
    this.newDefaultRecord.iDevNextNum=Number(this.iDevNextNum);
    this.newDefaultRecord.cDevSuffix=this.cDevSuffix;
    this.newDefaultRecord.cDevPadCharacter=this.cDevPadCharacter;

    this.newDefaultRecord.cTendPrefix=this.cTendPrefix;
    this.newDefaultRecord.iTendPad=Number(this.iTendPad);
    this.newDefaultRecord.iTendNextNum=Number(this.iTendNextNum);
    this.newDefaultRecord.cTendSuffix=this.cTendSuffix;
    this.newDefaultRecord.cTendPadCharacter=this.cTendPadCharacter;

    this.newDefaultRecord.cRFQEmail=this.editorValue;
    this.newDefaultRecord.cCommitteeEmail=this.editorCommitteValue;
    this.newDefaultRecord.cAlertCommitteeEmail=this.editorAlertCommitteValue;
    this.newDefaultRecord.bAllowSuppOverride = this.SupplierOverrideValue;
    this.newDefaultRecord.cEmailPassword = this.vPass;
    this.newDefaultRecord.iForceTypeID = this.ForceTypesValue.id;
    this.newDefaultRecord.iProjectTypeID = this.ProjectTypesValue.id;

    if(this.newDefaultRecord.bAutoRFQClosingDate == true && this.newDefaultRecord.iRFQClosingDateDays == null || this.newDefaultRecord.bAutoRFQClosingDate == true && this.newDefaultRecord.iRFQClosingDateDays == undefined)
    {
      this.messageDialog.show("You enabled setting the RFQ closing date but failed to capture the number of days, Please enter number of days and try again.",DialogMessageTypes.Information);
    }
    else
    {
      this.loadingVisible=true;
      this.CustomService.utilitiesPost("NonOdataDefaults/CreateDefault?UserID="+this.user,this.newDefaultRecord).subscribe(
        (        data: { Status: ResponseStatus; StatusDescription: string; })=>{
          this.loadingVisible=false;
          if(data.Status==ResponseStatus.Success)
          {
            this.LoadData();
            this.messageDialog.show("Changes applied successfully.",DialogMessageTypes.Information);
          }
          else
          {
            this.messageDialog.show(data.StatusDescription,DialogMessageTypes.Information);
          }
        },
        (        error: any)=>{
          this.loadingVisible=false;
          this.messageDialog.show("Failed.",DialogMessageTypes.SystemError);
        }
      )
    }
    
  }

  EmailInvitationOkayClick()
  {
    this.newDefaultRecord.cCommitteeEmail=this.editorCommitteValue;
    this.isInvitationEmailPopupVisible=false;
  }

  EmailAlertOkayClick()
  {
    this.newDefaultRecord.cAlertCommitteeEmail=this.editorAlertCommitteValue;
    this.isAlertEmailPopupVisible=false;
  }

  EditAlertEmail()
  {
    this.isAlertEmailPopupVisible=true;
  }


  EmailInvitationCloseClick()
  {
    this.isInvitationEmailPopupVisible=false;
  }

  EmailAlertCloseClick()
  {
    this.isAlertEmailPopupVisible=false;
  }

  EditInvitationEmail()
  {
    this.isInvitationEmailPopupVisible=true;
  }

  newEventAdd()
  {
    this.newResbmitSettingRecord = new ResbmitSettingRecord();
    this.newResbmitSettingRecord.bBudgetRejection = false;
    this.newResbmitSettingRecord.bBudgetResubmit = false;
    this.isNewResbumitSettingsPopupVisible = true;
  }

  resubmitCloseClick()
  {
    this.isNewResbumitSettingsPopupVisible = false;
  }

  resubmitSaveClick()
  {
    if(this.bAllEventscheckBoxValue == false && this.newResbmitSettingRecord.iEventID == null || this.bAllEventscheckBoxValue == false && this.newResbmitSettingRecord.iEventID == undefined)
    {
      this.messageDialog.show("Event is required.",DialogMessageTypes.Information);
    }
    else
    {
      this.newResbmitSettingRecord.bAllEvents = this.bAllEventscheckBoxValue;
      this.loadingVisible = true;
      this.CustomService.utilitiesPost("NonODataRejectionSettings/AddSettings?UserID="+this.user,this.newResbmitSettingRecord).subscribe(
        (        data: { Status: ResponseStatus; StatusDescription: string; })=>{
          this.loadingVisible = false;
          if(data.Status == ResponseStatus.Success)
          {
            this.isNewResbumitSettingsPopupVisible = false;
            this.refreshGridEventLinks();
          }
          else if(data.Status == ResponseStatus.Exception)
          {
            this.messageDialog.show("Failed, Exception error.",DialogMessageTypes.Information);
          }
          else
          {
            this.messageDialog.show(data.StatusDescription,DialogMessageTypes.Information);
          }
        },
        (        error: any)=>{
          this.loadingVisible = false;
          this.messageDialog.show("System error, please contact the system administrator.",DialogMessageTypes.SystemError);
        }
      )
    }
  }

  ConfirmYesClick()
  {
    this.confirmDialog.hide();
    this.loadingVisible = true;
      this.CustomService.utilitiesGet("NonODataRejectionSetting/DeleteSettings?UserID="+this.user+"&ID="+this.selectedRecords[0].ID).subscribe(
        (        data: { Status: ResponseStatus; StatusDescription: string; })=>{
          this.loadingVisible = false;
          if(data.Status == ResponseStatus.Success)
          {
            this.refreshGridEventLinks();
          }
          else if(data.Status == ResponseStatus.Exception)
          {
            this.messageDialog.show("Failed, Exception error.",DialogMessageTypes.Information);
          }
          else
          {
            this.messageDialog.show(data.StatusDescription,DialogMessageTypes.Information);
          }
        },
        (        error: any)=>{
          this.loadingVisible = false;
          this.messageDialog.show("Failed, Sysyem error.",DialogMessageTypes.SystemError);
        }
      )
  }

  deleteEventRecord()
  {
    if(this.selectedRecords[0]== null || this.selectedRecords[0] == undefined)
    {
      this.messageDialog.show("Please select a record.",DialogMessageTypes.Information);
    }
    else
    {
      this.confirmDialog.show("Confirm Delete","Are you sure you wish to delete this record?");
    }
  }

  editRecordEvent()
  {
    if(this.selectedRecords[0]== null || this.selectedRecords[0] == undefined)
    {
      this.messageDialog.show("Please select a record.",DialogMessageTypes.Information);
    }
    else
    {
      Object.assign(this.newResbmitSettingRecord,this.selectedRecords[0]);
      this.isNewResbumitSettingsPopupVisible = true;
    }
  }

  refreshGridEventLinks()
  {
    this.vwRejectionSettingsService.searchNonOdata("vwRejectionSettings").subscribe(
      (      data: { value: any; })=>{
        this.datasource =  data.value;
      }
    )
  }

  onToolbarPreparing(e: { toolbarOptions: { items: { location: string; locateInMenu: string; widget: string; options: { hint: string; icon: string; text: string; type: string; onClick: () => void; }; }[]; }; }) {
    e.toolbarOptions.items.unshift(
      {
      location: 'before',
      locateInMenu: 'auto',
      widget: 'dxButton',
      options: {
        hint: 'New',
        icon: 'plus',
        text: 'Add New',
        type: 'normal',
        onClick: this.newEventAdd.bind(this)
      }
    },
    {
      location: 'before',
      locateInMenu: 'auto',
      widget: 'dxButton',
      options: {
        hint: 'edit',
        icon: 'edit',
        text: 'Edit',
        type: 'normal',
        onClick: this.editRecordEvent.bind(this)
      }
    },
    {
      location: 'before',
      locateInMenu: 'auto',
      widget: 'dxButton',
      options: {
        hint: 'Delete',
        icon: 'trash',
        text: 'Delete',
        type: 'normal',
        onClick: this.deleteEventRecord.bind(this)
      }
    },
    {
      location: 'after',
      locateInMenu: 'auto',
      widget: 'dxButton',
      options: {
        hint: 'Refresh',
        icon: 'refresh',
        text: 'Refresh',
        type: 'normal',
        onClick: this.refreshGridEventLinks.bind(this)
      }
    }
    );
  }
}

class ResbmitSettingRecord
{
  public ID!: number;
  public iEventID!: number;
  public iResubmissionTypeID!: number;
  public iRejectionTypeID!: number;
  public bBudgetResubmit!: boolean;
  public bBudgetRejection!: boolean;
  public bAllEvents!: boolean;
  public iCreatedUserID!: number;
  public dDateCreated!: string;
}