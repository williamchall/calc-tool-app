import { Action } from '@ngrx/store';

export enum CalcToolActions {
    Add = '[CalcTool] Add',
    Subtract = '[CalcTool] Subtract',
    Multiply = '[CalcTool] Multiply',
    Divide = '[CalcTool] Divide',
    Clear = '[CalcTool] Clear',
}

export class AddAction implements Action {
    type = CalcToolActions.Add;
    constructor(public value: number) { }
}
export class SubtractAction implements Action {
    type = CalcToolActions.Subtract;
    constructor(public value: number) { }
} 
export class DivideAction implements Action {
    type = CalcToolActions.Divide;
    constructor(public value: number) { }
} 
export class MultiplyAction implements Action {
    type = CalcToolActions.Multiply;
    constructor(public value: number) { }
}

export class ClearAction implements Action {
    type = CalcToolActions.Clear;
}


export type CalcToolActionsUnion = AddAction | SubtractAction | MultiplyAction | DivideAction | ClearAction;

