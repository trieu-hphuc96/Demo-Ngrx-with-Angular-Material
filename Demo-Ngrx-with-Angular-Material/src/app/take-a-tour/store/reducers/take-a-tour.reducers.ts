import * as TAKEATOUR_ACTIONS from '../actions/take-a-tour.actions';
import { Message, MessageType } from '../models/message';

export interface TakeATour_State {
    isShow: boolean;
    loading: boolean;
    message: Message
};

const initialState: TakeATour_State = {
    isShow: false,
    loading: false,
    message: null
};

export function reducer(currenState = initialState, action: TAKEATOUR_ACTIONS.TakeATour_Actions): TakeATour_State {
    switch (action.type) {
        case TAKEATOUR_ACTIONS.LOAD: {
            return Object.assign({}, currenState, {
                loading: true,
                numberIncompletedTasks: 0
            });
        }
        case TAKEATOUR_ACTIONS.LOAD_COMPLETED: {
            const tasks = action.payload;
            return {
                ...currenState,
                isShow : true,
                loading: false,
                message: {
                    type: MessageType.Success,
                    content: 'Load successed'
                }
            }
        }

        case TAKEATOUR_ACTIONS.LOAD_FAIL:
            {
                return {
                    ...currenState,
                    loading: false,
                    message: {
                        type: MessageType.Error,
                        content: 'Error loading'
                    }
                }
            }

        default: {
            return currenState;
        }
    }
}

export const getLoading = (state: TakeATour_State) => state.loading;
export const getTasks = (state: TakeATour_State) => state.isShow;
export const getMessage = (state: TakeATour_State) => state.message;