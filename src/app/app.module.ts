import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotesComponent } from './notes/notes.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule}  from '@angular/forms';
import { InterfacedialogueComponent } from './interfacedialogue/interfacedialogue.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotesComponent,
    FeedbackComponent,
    NotFoundComponent,
    InterfacedialogueComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
