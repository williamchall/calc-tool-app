import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CalcToolState } from '../../CalcToolState';
import { Observable } from 'rxjs';
import { AddAction, SubtractAction, MultiplyAction, DivideAction, ClearAction } from '../../calc-tool.actions';
@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {
  //$ not required, denotes stream
  result$: Observable<number>;
  history$: Observable<Array<any>>;

  calcForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<CalcToolState>
  ) { }

  ngOnInit() {
    this.calcForm = this.fb.group({
      numInput: 0,
    });

    this.result$ = this.store.select('result');
    this.history$ = this.store.select('history');
    console.log('history:  ' + this.history$);
  }

  doAdd() {
    this.store.dispatch(new AddAction(this.calcForm.value.numInput));
  }

  doSubtract() {
    this.store.dispatch(new SubtractAction(this.calcForm.value.numInput));
  }

  doMultiply() {
    this.store.dispatch(new MultiplyAction(this.calcForm.value.numInput));
  }

  doDivide() {
    this.store.dispatch(new DivideAction(this.calcForm.value.numInput));
  }

  doClear() {
    //  this.result$ = this.store.select('result') = '';
    //  this.history$ = this.store.select('history');
    // this.store.dispatch(new ClearHistory());
    this.store.dispatch(new ClearAction());

  }

}
