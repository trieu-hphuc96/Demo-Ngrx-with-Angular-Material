import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as takeATourReducer from '../../store/reducers';
import * as takeATourAction from '../../store/actions/take-a-tour.actions';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../store/models/message';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  isShow$ : Observable<boolean>;
  message$: Observable<Message>;

  constructor(private store: Store<takeATourReducer.State>) {
      this.isShow$ = store.select('takeATour').select('isShow');
      this.message$ = store.select('takeATour').select('message');

      this.isShow$.subscribe(res => console.log(res));
      this.message$.subscribe(res => console.log(res));
   }

  ngOnInit() {
  }

  showDialog(){
    this.store.dispatch(new takeATourAction.LoadAction());
  }
}
