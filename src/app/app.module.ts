import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CalcToolModule} from './calc-tool/calc-tool.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CalcToolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
