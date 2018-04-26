import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import * as TAKEATOUR_ACTIONS from '../actions/take-a-tour.actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TakeATourEffects {

    constructor(private actions$: Actions) {

    }

    @Effect()
    loadTakeATour: Observable<Action> = this.actions$
        .ofType(TAKEATOUR_ACTIONS.LOAD)
        .switchMap(() => 
            of(new TAKEATOUR_ACTIONS.LoadCompletedAction(true))  
        )
        .catch(() => of(new TAKEATOUR_ACTIONS.LoadFailedAction(null)))

}