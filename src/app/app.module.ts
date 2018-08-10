import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FormsModule } from '@angular/forms';

import {EmployeeService} from './shared/employee.service';



import { AppComponent } from './app.component';

import { environment } from '../environments/environment';


import { EmployeeComponent } from './employee/employee/employee.component';



@NgModule({

  declarations: [

    AppComponent,

    EmployeeComponent,

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,

    FormsModule,

  ],

  providers: [EmployeeService],

  bootstrap: [AppComponent]

})

export class AppModule { }
