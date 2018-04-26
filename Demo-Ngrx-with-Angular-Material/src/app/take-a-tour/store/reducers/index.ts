import { ActionReducerMap } from '@ngrx/store';
import * as takeATour from '../reducers/take-a-tour.reducers';

export interface State {
    takeATour: takeATour.TakeATour_State;
}

export const reducers: ActionReducerMap<State> = {
    takeATour: takeATour.reducer
}