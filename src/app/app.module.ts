import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { PersonsTableComponent } from './components/persons-table/persons-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsTableComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
