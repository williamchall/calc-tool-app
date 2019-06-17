import { Action } from '@ngrx/store';
export interface CalcToolState {
    result: number;
    history: Array<Action>;
}