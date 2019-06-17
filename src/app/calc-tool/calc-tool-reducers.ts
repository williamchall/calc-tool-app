import { CalcToolActions, CalcToolActionsUnion, AddAction, DivideAction, MultiplyAction, SubtractAction } from './calc-tool.actions';
import { Action } from '@ngrx/store';
export const resultReducer = (state = 0, action: CalcToolActionsUnion) => {
    //console.log('state: ', state, "action:  ", action);
    switch (action.type) {
        case CalcToolActions.Add:
            return state + (action as AddAction).value;
        case CalcToolActions.Subtract:
            return state - (action as SubtractAction).value;
        case CalcToolActions.Multiply:
            return state * (action as MultiplyAction).value;
        case CalcToolActions.Divide:
            return state / (action as DivideAction).value;
        case CalcToolActions.Clear:
            return 0;
        default:
            return state;
    }
}

export const historyReducer = (history: Array<Action>, action: CalcToolActionsUnion) => {
    if (action.type === CalcToolActions.Clear) {
        history = new Array(0);
        return history;
    } else {
        //console.log('action.type: ', action.type, "action.value:  ", action.value);
        if (history === undefined) {
            history = new Array(0);
        }

        return history.concat(action);
    }
}