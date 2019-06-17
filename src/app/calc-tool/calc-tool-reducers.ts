import { CalcToolActions, CalcToolActionsUnion } from './calc-tool.actions';

export const resultReducer = (state = 0, action: CalcToolActionsUnion) => {
    console.log('state: ', state, "action:  ", action);
    switch (action.type) {
        case CalcToolActions.Add:
            return state + action.value;
        case CalcToolActions.Subtract:
            return state - action.value;
        case CalcToolActions.Multiply:
            return state * action.value;
        case CalcToolActions.Divide:
            return state / action.value;
        default:
            return state;
    }
}