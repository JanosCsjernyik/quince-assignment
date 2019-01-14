import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { PersonsTableComponent } from './components/persons-table/persons-table.component';
import { AddPersonButtonComponent } from './components/add-person-button/add-person-button.component';
import { PersonService } from './services/person.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { PersonEffects } from './store/effects/person.effects';
import { DataDumpComponent } from './components/data-dump/data-dump.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsTableComponent,
    AddPersonButtonComponent,
    DataDumpComponent,
  ],
  imports: [
    ButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    CheckboxModule,
    CardModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects, PersonEffects])
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
