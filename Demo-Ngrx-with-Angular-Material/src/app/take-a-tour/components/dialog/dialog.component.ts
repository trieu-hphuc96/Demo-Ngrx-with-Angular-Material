import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as takeATourReducer from '../../store/reducers';
import * as takeATourAction from '../../store/actions/take-a-tour.actions';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../store/models/message';
import { MatDialog } from '@angular/material';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { TakeATourService } from '../../../takeATour.service';
import { TakeATour } from '../../../mock-takeATour';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  isShow$ : Observable<boolean>;
  message$: Observable<Message>;

  takeATours: TakeATour[] = [];

  constructor(
    public dialog: MatDialog,
    private store: Store<takeATourReducer.State>,
    private takeATourService: TakeATourService
  ) {
      this.isShow$ = store.select('takeATour').select('isShow');
      this.message$ = store.select('takeATour').select('message');

      this.isShow$.subscribe(res => console.log(res));
      this.message$.subscribe(res => console.log(res));
      this.takeATourService.getTakeAToures().subscribe(takeATours => this.takeATours = takeATours)
   }

  ngOnInit() {
  }

  showDialog(): void{
    this.store.dispatch(new takeATourAction.LoadAction());
    
    let dialogRef = this.dialog.open(DialogContentComponent, {
      width: '50%',
      height: '87%',
      data: this.takeATours,
      panelClass: 'takeATour-container',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
