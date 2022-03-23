import {ResponseStatus} from '../../municipal-hub/enums/responsestatus';

export class UserInfo
{
    public  Status:ResponseStatus; 
    public  dclink:number;
    public username :string;
    public responseMsg :string;
    public role :string;
    public database :string;
    public userid:number;
    public oActive:boolean;
    public bFirstTime:boolean;
    public accountnumber:string;
}