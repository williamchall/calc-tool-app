import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { resultReducer } from './calc-tool-reducers';
import {ReactiveFormsModule} from '@angular/forms';
import { CalcFormComponent } from './components/calc-form/calc-form.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [CalcFormComponent],
  exports: [CalcFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      result: resultReducer,
    }),
    StoreDevtoolsModule.instrument(),
  ]
})
export class CalcToolModule { }
