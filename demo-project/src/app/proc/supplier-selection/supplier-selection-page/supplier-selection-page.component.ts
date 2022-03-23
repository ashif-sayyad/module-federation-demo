import { Component, ViewChild } from '@angular/core';
import { vwSupplierCommoditiesService } from '../../../services/Procurement/_ccg_EP_vwSupplierCommodities-service';
import { CustomService } from '../../../services/common-services/Custom-Service';
import { ResponseStatus } from '../../enums/enum-repo';
import { DialogMessageTypes, MessageDialogComponent } from '../../common/message-dialog/message-dialog.component';
import {vwSelectedSupplierService} from '../../../services/Procurement/_ccg_EP_vwSelectedSuppliers-service';
import { vwRFQService } from '../../../services/Procurement/_ccg_EP_vwRFQ-service';
import { vwRFQResponseService } from '../../../services/Procurement/_ccg_EP_vwRFQResponse-service';
import { C_ccg_EP_tblProcurementMethods } from 'src/app/models/C_ccg_EP_tblProcurementMethods';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { vwRFQLinesService } from '../../../services/Procurement/_ccg_EP_vwRFQLines-service';

@Component({
  selector: 'app-supplier-selection-page',
  templateUrl: './supplier-selection-page.component.html',
  providers: [DatePipe],
  styleUrls: ['./supplier-selection-page.component.css']
})
export class SupplierSelectionPageComponent {
  datasourceRFQCommodities!: string | any[];
  datasourceSuppliers: any;
  newReqRecord!: { ID: string; iProcurementMethodID: string; cRequestNumber: string; dRequisitionDate: string | number | Date; };
  datasourceSuppliersLinked: any;
  selectedSupplierRecords:any[]=[];
  selectedSuppLinkRecords:any[]=[];
  datasourceReceiveRFQ:any[]=[];
  datasourceReceiveRFQLines:any[]=[];
  selectedCommodityID=0;
  public iNumberOfsuppliers=0;
  RequisitionID!: string | number;
  bAdditional!: boolean;
  lblSelectedProcMethod: string = "";
  selectedSupplierModel:SelectedSupplierModel=new SelectedSupplierModel();
  selectedProcMethodDetails: C_ccg_EP_tblProcurementMethods = new C_ccg_EP_tblProcurementMethods();
  newReceiveRHead:NewReceiveRHead=new NewReceiveRHead();
  isSupplierSelectionPopupVisible:boolean=false;
  isSuppliersPopupVisible:boolean=false;
  loadingVisible:boolean=false;

  @ViewChild(MessageDialogComponent)
  messageDialog!: MessageDialogComponent;

  constructor(private vwSupplierCommoditiesService:vwSupplierCommoditiesService,private vwRFQLinesService:vwRFQLinesService,private router: Router,private DatePipe:DatePipe,private vwRFQResponseService:vwRFQResponseService,private vwRFQService:vwRFQService,private vwSelectedSupplierService:vwSelectedSupplierService,private CustomService:CustomService) { }

  public getCommodities(datasourceLines:any)
  {
    this.datasourceRFQCommodities=datasourceLines;
  }

  public display()
  {
    this.selectedSupplierRecords=[];
      this.CustomService.utilitiesGet("NonODataSupplierList/GetSupplierCommodities?iRequisitionID="+this.RequisitionID).subscribe(
        (        data: any)=>{
          this.datasourceSuppliers=data;
          this.isSuppliersPopupVisible=true;
        },
        (        error: any)=>{
          this.messageDialog.show("Failed.",DialogMessageTypes.SystemError);
        }
      )
  }

  public hide()
  {
    this.isSupplierSelectionPopupVisible=false;
  }

  BackMainClick()
  {
    this.router.navigate(['/requisitionincidents']);
  }

  DoneClick()
  {
    var valid=true;
    for(let x=0;x<this.datasourceRFQCommodities.length;x++)
    {
      if(this.datasourceRFQCommodities[x])
      this.vwSelectedSupplierService.searchNonOdata("vwSelectedSuppliers?$filter=iCommodityID eq "+this.datasourceRFQCommodities[x].iCommodityID+" and iRequisitionID eq "+this.RequisitionID).subscribe(
        (        dataLinked: { value: string | any[]; })=>{
          if(dataLinked.value.length!=this.iNumberOfsuppliers)
          {
            valid=false;
          }

          if(x==this.datasourceRFQCommodities.length-1)
          {
            if(valid==true)
            {
              this.isSupplierSelectionPopupVisible=false;
              this.refreshReceiveQuotes();
            }
            else
            {
              this.messageDialog.show("You have to have "+this.iNumberOfsuppliers+" suppliers for each commodity.",DialogMessageTypes.Information);
            }
          }
        }
      )
    }
  }

  refreshReceiveQuotes()
  {
    this.newReceiveRHead=new NewReceiveRHead();
    this.loadingVisible=true;
    this.vwRFQService.searchNonOdata("vwRFQ?$filter=iRequisitionID eq "+this.newReqRecord.ID).subscribe(
      (      data: { value: any[]; })=>{
        this.datasourceReceiveRFQ=data.value;
        this.vwRFQResponseService.searchNonOdata("vwRFQResponse?$filter=iRequisitionID eq "+this.newReqRecord.ID).subscribe(
          (          dataLines: { value: any[]; })=>{
            this.datasourceReceiveRFQLines=dataLines.value;
            this.CustomService.utilitiesGet("NonODataMethodDetails/GetProcurementDetails?ID="+this.newReqRecord.iProcurementMethodID).subscribe(
              (              dataProc: C_ccg_EP_tblProcurementMethods)=>{
                this.selectedProcMethodDetails=dataProc;
                this.lblSelectedProcMethod=this.selectedProcMethodDetails.cTitle;
                this.newReceiveRHead.cReqNumber=this.newReqRecord.cRequestNumber;
                this.newReceiveRHead.dRequisitionDate=this.DatePipe.transform(this.newReqRecord.dRequisitionDate,'dd/MM/yyyy');
                this.loadingVisible=false;
              },
              (              error: any)=>{
                this.loadingVisible=false;
              }
              )      
            }
            )
      },
      (      error: any)=>{
        this.loadingVisible=false;
      })
  }

  filterSuppliersLinked(e: { data: { iCommodityID: number; iRequisitionID: any; }; })
  {
    this.selectedCommodityID=e.data.iCommodityID;
    this.RequisitionID=e.data.iRequisitionID;

    this.vwSelectedSupplierService.searchNonOdata("vwSelectedSuppliers?$filter=iCommodityID eq "+this.selectedCommodityID+" and iRequisitionID eq "+this.RequisitionID).subscribe(
      (      dataLinked: { value: any; })=>{
        this.datasourceSuppliersLinked=dataLinked.value;
      }
    )
  }

  Assign()
  {
    if(this.selectedCommodityID==0)
    {
      this.messageDialog.show("Please select a commodity first.",DialogMessageTypes.Information);
    }
    else
    {
      this.selectedSupplierRecords=[];
      this.vwSupplierCommoditiesService.searchNonOdata("vwSupplierCommodities?$filter=iCommodityID  eq "+this.selectedCommodityID).subscribe(
        (        data: { value: any; })=>{
          this.datasourceSuppliers=data.value;
          this.isSuppliersPopupVisible=true;
        }
      )
    }
  }

  SuppliersAddClick()
  {
    this.loadingVisible=true;
    this.selectedSupplierModel=new SelectedSupplierModel();
    this.selectedSupplierModel.iRequisitionID=this.RequisitionID;
    this.selectedSupplierModel.Suppliers=this.selectedSupplierRecords;

    // if(this.selectedSupplierModel.Suppliers.length<this.iNumberOfsuppliers)
    // {
    //   this.loadingVisible=false;
    //   this.messageDialog.show("The number of selected suppliers cannot be less than the required number of suppliers.",DialogMessageTypes.Information);
    // }
    // else
    // {
      this.CustomService.utilitiesPost("NonODataSuppliers/SelectedSupliers?iSupplierNumber="+this.iNumberOfsuppliers+"&bAdditional="+this.bAdditional,this.selectedSupplierModel).subscribe(
        (        data: { Status: ResponseStatus; StatusDescription: string; })=>{
          this.loadingVisible=false;
          if(data.Status==ResponseStatus.Success)
          {
            this.refreshGrid();
            this.isSuppliersPopupVisible=false;
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
    // }
  }

  SuppliersCloseClick()
  {
    this.isSuppliersPopupVisible=false;
  }

  Remove()
  {
    if(this.selectedSuppLinkRecords[0]==null || this.selectedSuppLinkRecords[0] == undefined)
    {
      this.messageDialog.show("Please select the linked supplier you want to remove.",DialogMessageTypes.Information);
    }
    else
    {
      this.CustomService.utilitiesGet("NonODataSuppliers/RemoveSelectedSupplier?ID="+this.selectedSuppLinkRecords[0].ID).subscribe(
        (        data: { Status: ResponseStatus; StatusDescription: string; })=>{
          if(data.Status==ResponseStatus.Success)
          {
            this.refreshGrid();
          }
          else
          {
            this.messageDialog.show(data.StatusDescription,DialogMessageTypes.Information);
          }
        },
        (        error: any)=>{
          this.messageDialog.show("Failed.",DialogMessageTypes.SystemError);
        }
      )
    }
  }

  SuppliersProcessClick()
  {
    console.log("Process");
  }

  refreshGrid()
  {
    this.vwSelectedSupplierService.searchNonOdata("vwSelectedSuppliers?$filter=iCommodityID eq "+this.selectedCommodityID+" and iRequisitionID eq "+this.RequisitionID).subscribe(
      (      dataLinked: { value: any; })=>{
        this.datasourceSuppliersLinked=dataLinked.value;
      }
    )
  }

  refreshCommodities()
  {
    this.datasourceRFQCommodities=this.datasourceRFQCommodities;
  }

  onToolbarPreparingCommodities(e: { toolbarOptions: { items: { location: string; locateInMenu: string; widget: string; options: { hint: string; icon: string; text: string; type: string; onClick: () => void; }; }[]; }; })
  {
    e.toolbarOptions.items.unshift(
      {
        location: 'after',
        locateInMenu: 'auto',
        widget: 'dxButton',
        options: {
          hint: 'Refresh Commodities',
          icon: 'refresh',
          text: 'Refresh',
          type: 'normal',
          onClick: this.refreshCommodities.bind(this)
        }
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
        text: 'Assign',
        type: 'normal',
        onClick: this.Assign.bind(this)
      }
    },
    {
      location: 'before',
      locateInMenu: 'auto',
      widget: 'dxButton',
      options: {
        hint: 'Remove',
        icon: 'clear',
        text: 'Remove',
        type: 'normal',
        onClick: this.Remove.bind(this)
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
        onClick: this.refreshGrid.bind(this)
      }
    },
    );
  }
}

class SelectedSupplierModel
{
  public iRequisitionID!: any;
  public Suppliers!: vwSupplierCommodities[];
}

class vwSupplierCommodities
{
  public CommodityAccessID!: number;
  public iCommodityID!: number;
  public ID!: number;
  public cAccount!: string;
  public cName!: string;
  public cEmail!: string;
  public cTelephone!: string;
  public cContactPerson!: string;
  public bBEECompliant!: boolean;
  public bBEECertValid!: boolean;
}

class NewReceiveRHead
{
  public cReqNumber!: string;
  public dRequisitionDate!: any;
}