import { Action } from '@ngrx/store';

export const LOAD = '[TakeATour] Load';
export const LOAD_COMPLETED = '[TakeATour] Load Completed';
export const LOAD_FAIL = '[TakeATour] Load Fail';

export class LoadAction implements Action {
    type = LOAD;
    constructor(public payload?: any) { }
}

export class LoadCompletedAction implements Action {
    type = LOAD_COMPLETED;
    constructor(public payload: any) { }
}

export class LoadFailedAction implements Action {
    type = LOAD_FAIL;
    constructor(public payload: any) { }
}

export type TakeATour_Actions =
    LoadAction | LoadCompletedAction;