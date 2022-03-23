import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base-service';

@Injectable({
    providedIn: 'root'
  })

export class vwCommitteeMembersService extends BaseService<string>{
    route = 'vwCommitteeMembers';
    override orderBy = 'ID';
  }