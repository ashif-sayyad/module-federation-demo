import { Component, OnInit, ViewChild } from '@angular/core';
import {vwCommoditiesService} from '../../../services/Procurement/_ccg_vwCommodities-service';
import {vwAccountsCommodyAccessService} from '../../../services/Procurement/_ccg_vwAccountsCommodyAccess-service';
import { MessageDialogComponent, DialogMessageTypes } from '../../common/message-dialog/message-dialog.component';
import {vwAccountsService} from '../../../services/Procurement/_ccg_EP_vwAccounts-service';
import { C_ccg_EP_tblCommodities } from 'src/app/models/C_ccg_EP_tblCommodities';
import {CustomService} from '../../../services/common-services/Custom-Service';
import { ResponseStatus, CommodityType } from '../../enums/enum-repo';

@Component({
  selector: 'app-acc-com-acc',
  templateUrl: './acc-com-acc.component.html',
  styleUrls: ['./acc-com-acc.component.css']
})
export class AccComAccComponent implements OnInit {

  datasourceAccounts: any;
  datasourceCommLink: any;
  datasourceCommodities: any;
  
  selectedAccountRecords:any[]=[];
  selectedCommRecords:any[]=[];
  selectedCommLinkRecords:any[]=[];

  isCommodidtiesPopupVisible:boolean=false;
  loadingVisible:boolean=false;
  newAccountCommodityAccess:NewAccountCommodityAccess=new NewAccountCommodityAccess();

  @ViewChild(MessageDialogComponent)
  messageDialog!: MessageDialogComponent;
  constructor(private vwCommoditiesService:vwCommoditiesService,private vwAccountsCommodyAccessService:vwAccountsCommodyAccessService,
    private vwAccountsService:vwAccountsService,private CustomService:CustomService) 
    { 
      this.AssignInline=this.AssignInline.bind(this);
      this.RemoveInline=this.RemoveInline.bind(this);
    }

  ngOnInit() {
    this.refreshGridAccounts();
  }

  refreshGridAccounts()
  {
    this.loadingVisible =true;
    this.vwAccountsService.searchNonOdata("vwAccounts").subscribe(
      (      data: { value: any; })=>{
        this.datasourceAccounts=data.value;
        this.loadingVisible =false;
      },
      (      error: any)=>{
        this.loadingVisible =false;
      }
    )
  }

  refreshGridLinkComms()
  {
    this.loadingVisible=true;
      this.CustomService.utilitiesGet("NonODataCommoditiesList/CommoditiesList?type="+CommodityType.Account+"&ID="+this.selectedAccountRecords[0].AccountLink).subscribe(
        (        data: any)=>{
          this.datasourceCommodities=data;
          this.loadingVisible=false;
        },
        (        error: any)=>{
          this.loadingVisible=false;
        }
      )
  }

  refreshGrid()
  {
    this.vwAccountsCommodyAccessService.searchNonOdata("vwAccountCommodityAccess?$filter=iAccountID eq "+this.selectedAccountRecords[0].AccountLink).subscribe(
      (      data: { value: any; })=>{
        this.datasourceCommLink=data.value;
      },
      (      error: any)=>{

      }
    )
  }

  Assign()
  {
    if(this.selectedAccountRecords[0]==null || this.selectedAccountRecords[0] == undefined)
    {
      this.messageDialog.show("Please select an account to assign the commodities to.",DialogMessageTypes.Information);
    }
    else
    {
      this.loadingVisible=true;
      this.CustomService.utilitiesGet("NonODataCommoditiesList/CommoditiesList?type="+CommodityType.Account+"&ID="+this.selectedAccountRecords[0].AccountLink).subscribe(
        (        data: any)=>{
          this.datasourceCommodities=data;
          this.loadingVisible=false;
        },
        (        error: any)=>{
          this.loadingVisible=false;
        }
      )
      this.selectedCommRecords=[];
      this.isCommodidtiesPopupVisible=true;
    }
  }

  AssignInline(e: { row: { data: { AccountLink: string; }; }; })
  {
    this.loadingVisible=true;
    this.selectedAccountRecords[0] = e.row.data;
    this.CustomService.utilitiesGet("NonODataCommoditiesList/CommoditiesList?type="+CommodityType.Account+"&ID="+e.row.data.AccountLink).subscribe(
      (      data: any)=>{
        this.datasourceCommodities=data;
        this.loadingVisible=false;
      },
      (      error: any)=>{
        this.loadingVisible=false;
      }
    )
    this.selectedCommRecords=[];
    this.isCommodidtiesPopupVisible=true;
  }

  CommoditiesAddClick()
  {
    if(this.selectedCommRecords[0]==null || this.selectedCommRecords[0] == undefined)
    {
      this.messageDialog.show("Please select at least one commodity to assign.",DialogMessageTypes.Information);
    }
    else
    {
      this.loadingVisible=true;
      this.newAccountCommodityAccess = new NewAccountCommodityAccess();
      this.newAccountCommodityAccess.iAccountID = this.selectedAccountRecords[0].AccountLink;
      this.newAccountCommodityAccess.Commodities = this.selectedCommRecords;

      this.CustomService.utilitiesPost("NonODataAccountCommodityAccess/CreateAccountCommodityAccess",this.newAccountCommodityAccess).subscribe(
        (        data: { Status: ResponseStatus; StatusDescription: string; })=>{
          this.loadingVisible=false;
          if(data.Status==ResponseStatus.Success)
          {
            this.isCommodidtiesPopupVisible=false;
            this.refreshGrid();
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

  CommoditiesCloseClick()
  {
    this.isCommodidtiesPopupVisible=false;
  }

  Remove()
  {
    if(this.selectedCommLinkRecords[0]==null || this.selectedCommLinkRecords[0] == undefined)
    {
      this.messageDialog.show("Please select a record.",DialogMessageTypes.Information);
    }
    else
    {
      this.loadingVisible=true;
      this.CustomService.utilitiesGet("NonODataAccountCommodityAccess/DeleteAccountCommodityAccess?ID="+this.selectedCommLinkRecords[0].ID).subscribe(
        (        data: any)=>{
          this.loadingVisible=false;
          this.refreshGrid();
        },
        (        error: any)=>{
          this.loadingVisible=false;
          this.messageDialog.show("Failed.",DialogMessageTypes.SystemError);
        }
      )
    }
  }

  RemoveInline(e: { row: { data: any; }; })
  {
    this.loadingVisible=true;
    this.selectedCommLinkRecords[0]= e.row.data;
    this.CustomService.utilitiesGet("NonODataAccountCommodityAccess/DeleteAccountCommodityAccess?ID="+this.selectedCommLinkRecords[0].ID).subscribe(
      (      data: any)=>{
        this.loadingVisible=false;
        this.refreshGrid();
      },
      (      error: any)=>{
        this.loadingVisible=false;
        this.messageDialog.show("Failed.",DialogMessageTypes.SystemError);
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

  onToolbarPreparingAccounts(e: { toolbarOptions: { items: { location: string; locateInMenu: string; widget: string; options: { hint: string; icon: string; text: string; type: string; onClick: () => void; }; }[]; }; }) {
    e.toolbarOptions.items.unshift(
    {
      location: 'after',
      locateInMenu: 'auto',
      widget: 'dxButton',
      options: {
        hint: 'Refresh',
        icon: 'refresh',
        text: 'Refresh',
        type: 'normal',
        onClick: this.refreshGridAccounts.bind(this)
      }
    },
    );
  }

  onToolbarPreparingLinkComms(e: { toolbarOptions: { items: { location: string; locateInMenu: string; widget: string; options: { hint: string; icon: string; text: string; type: string; onClick: () => void; }; }[]; }; }) {
    e.toolbarOptions.items.unshift(
    {
      location: 'after',
      locateInMenu: 'auto',
      widget: 'dxButton',
      options: {
        hint: 'Refresh',
        icon: 'refresh',
        text: 'Refresh',
        type: 'normal',
        onClick: this.refreshGridLinkComms.bind(this)
      }
    },
    );
  }
}

class NewAccountCommodityAccess
{
  public iAccountID!: number;
  public Commodities!: C_ccg_EP_tblCommodities[];
}