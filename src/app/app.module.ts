import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MatModule } from './mat/mat.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovalentCodeEditorModule } from '@covalent/code-editor';

import { LatestComponent } from './latest/latest.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatModule,
    CovalentCodeEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
