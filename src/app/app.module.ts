import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageOutputComponent } from './message-output/message-output.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageInputComponent,
    MessageOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
