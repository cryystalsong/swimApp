import { NgModule, ApplicationRef, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyErrorHandler } from './errorHandler';
import { MyApp } from '../app/app.component';

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule],
  bootstrap: [MyApp],
  providers: [
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
    }
  ]
})
export class AppModule { }
