import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UserComponentComponent } from './user-component/user-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { ManagerComponentComponent } from './manager-component/manager-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    AdminComponentComponent,
    ManagerComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
