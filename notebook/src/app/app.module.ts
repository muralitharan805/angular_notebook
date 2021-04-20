import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test1Component } from './test1/test1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileEditerComponent } from './profile-editer/profile-editer.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    ProfileEditerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
