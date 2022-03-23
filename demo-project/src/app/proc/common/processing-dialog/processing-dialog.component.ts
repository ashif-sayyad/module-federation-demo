import { Component, OnInit } from '@angular/core';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-processing-dialog',
  templateUrl: './processing-dialog.component.html',
  styleUrls: ['./processing-dialog.component.css']
})
export class ProcessingDialogComponent implements OnInit {

  constructor() { }
  // constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }

  show(){
    // this.spinnerService.show();
  }

  hide(){
    // this.spinnerService.hide();
  }
}
