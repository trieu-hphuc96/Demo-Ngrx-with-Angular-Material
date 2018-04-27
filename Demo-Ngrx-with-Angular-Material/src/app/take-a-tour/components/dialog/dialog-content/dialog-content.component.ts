import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatMenuTrigger } from '@angular/material';
import { TakeATour } from '../../../../mock-takeATour';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  currentStep : TakeATour;
  isFirstStep : boolean = true;
  isLastStep : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TakeATour[]) {
      this.currentStep = data[0];
     }

  ngOnInit(){}
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  previousStep(){
    this.currentStep = this.data[this.currentStep.index - 1]
    if(this.currentStep.index === 0) this.isFirstStep = true;
      this.isLastStep = false;
  }

  nextStep(){
    this.currentStep = this.data[this.currentStep.index + 1]
    if(this.currentStep.index === this.data.length - 1) this.isLastStep = true;
    console.log(this.currentStep.index)
    console.log(this.data.length)
    this.isFirstStep = false;
  }

  onMenuClick(step: TakeATour){
    this.currentStep = step;
    this.isFirstStep = false;
    this.isLastStep = false;
    if(this.currentStep.index === 0) this.isFirstStep = true;
    if(this.currentStep.index === this.data.length - 1) this.isLastStep = true;
  }
}
