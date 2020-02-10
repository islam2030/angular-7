import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { InputFormatDirective } from './input-format.directive';



@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    InputFormatDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
