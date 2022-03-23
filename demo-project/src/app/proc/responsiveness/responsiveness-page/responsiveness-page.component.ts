import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from '../../common/confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent, DialogMessageTypes } from '../../common/message-dialog/message-dialog.component';
import {ResponseStatus,QuestionType} from '../../enums/enum-repo';
import {CustomService} from '../../../services/common-services/Custom-Service';
import {C_ccg_EP__tblResponsiveness} from '../../../models/C_ccg_EP__tblResponsiveness';
import {vwResponsivenessService} from '../../../services/Procurement/_ccg_vwResponsiveness-service';

@Component({
  selector: 'app-responsiveness-page',
  templateUrl: './responsiveness-page.component.html',
  styleUrls: ['./responsiveness-page.component.css']
})

export class ResponsivenessPageComponent implements OnInit {

  datasource: any;
  newResponsivenessRecord:C_ccg_EP__tblResponsiveness=new C_ccg_EP__tblResponsiveness();
  selectedRecords:C_ccg_EP__tblResponsiveness[]=[];
  isNewResponsivenessPopupVisible:boolean=false;
  loadingVisible:boolean=false;
  @ViewChild(ConfirmDialogComponent)
  confirmDialog!: ConfirmDialogComponent;
  @ViewChild(MessageDialogComponent)
  messageDialog!: MessageDialogComponent;
  user=sessionStorage.getItem("UserID");
  constructor(private CustomService:CustomService,private vwResponsivenessService:vwResponsivenessService) 
  { 
    this.newRecord = this.newRecord.bind(this);
    this.inlineEdit = this.inlineEdit.bind(this);
    this.inlineDelete = this.inlineDelete.bind(this);
  }

  ngOnInit() {
    this.refreshGrid();
  }
  refreshGrid()
  {
    this.loadingVisible =true;
    this.vwResponsivenessService.searchNonOdata("vwResponsiveness").subscribe(
      (      data: { value: any; })=>{
        this.datasource=data.value;
        this.loadingVisible =false;
      },
      (      error: any)=>{
        this.loadingVisible =false;
      }
    )
  }

  newRecord()
  {
    this.newResponsivenessRecord=new C_ccg_EP__tblResponsiveness();
    this.newResponsivenessRecord.bMandatory=false;
    this.isNewResponsivenessPopupVisible=true;
  }

  inlineDelete(e: { row: { data: C_ccg_EP__tblResponsiveness; }; })
  {
    this.selectedRecords[0] = e.row.data;
    this.confirmDialog.show("Delete","Are you sure you want to delete this record?");
  }

  inlineEdit(e: { row: { data: any; }; })
  {
    Object.assign(this.newResponsivenessRecord,e.row.data);
    this.isNewResponsivenessPopupVisible=true;
  }

  editRecord()
  {
    if(this.selectedRecords[0] == undefined || this.selectedRecords[0]==null)
    {
      this.messageDialog.show("Please select the record you want to edit.",DialogMessageTypes.Information);
    }
    else
    {
      Object.assign(this.newResponsivenessRecord,this.selectedRecords[0]);
      this.isNewResponsivenessPopupVisible=true;
    }
  }
  deleteRecord()
  {
    if(this.selectedRecords[0] == undefined || this.selectedRecords[0]==null)
    {
      this.messageDialog.show("Please select the record you want to delete.",DialogMessageTypes.Information);
    }
    else
    {
      this.confirmDialog.show("Delete","Are you sure you want to delete this record?");
    }
  }
  addNewSaveClick()
  {
    if(this.newResponsivenessRecord.cDescription=="" || this.newResponsivenessRecord.cDescription == undefined)
    {
      this.messageDialog.show("Description is required.",DialogMessageTypes.Information);
    }
    else if(this.newResponsivenessRecord.bMandatory==null || this.newResponsivenessRecord.bMandatory == undefined)
    {
      this.messageDialog.show("Please indicate if mandatory or not.",DialogMessageTypes.Information);
    }
    else
    {
      this.loadingVisible=true;
      this.CustomService.utilitiesPost("NonODataResponsiveness/CreateResponsiveness?UserID=1",this.newResponsivenessRecord).subscribe(
        (        data: { Status: ResponseStatus; StatusDescription: string; })=>{
          this.loadingVisible=false;
          if(data.Status==ResponseStatus.Success)
          {
            this.isNewResponsivenessPopupVisible=false;
            this.refreshGrid();
          }
          else
          {
            this.messageDialog.show(data.StatusDescription,DialogMessageTypes.Information);
          }
        },
        (        error: any)=>{
          this.loadingVisible=false;
          this.messageDialog.show("Saving failed.",DialogMessageTypes.Information);
        }
      )
    }
  }
  addNewCloseClick()
  {
    this.isNewResponsivenessPopupVisible=false;
  }
  valueChanged(e: any)
  {
    console.log(e);
  }
  ConfirmYesClick()
  {
    this.confirmDialog.hide();
    this.loadingVisible=true;
    this.CustomService.utilitiesGet("NonODataResponsiveness/DeleteResponsiveness?ID="+this.selectedRecords[0].ID+"&UserID="+this.user).subscribe(
      (      data: { Status: ResponseStatus; StatusDescription: string; })=>{
        this.loadingVisible=false;
        if(data.Status==ResponseStatus.Success)
        {
          this.refreshGrid();
        }
        else
        {
          this.messageDialog.show(data.StatusDescription,DialogMessageTypes.Information);
        }
      },
      (      error: any)=>{
        this.loadingVisible=false;
        this.messageDialog.show("Deleting failed.",DialogMessageTypes.Information);
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
        text: 'New',
        type: 'normal',
        onClick: this.newRecord.bind(this)
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
        onClick: this.editRecord.bind(this)
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
        onClick: this.deleteRecord.bind(this)
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
