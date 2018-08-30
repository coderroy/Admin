import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { PropertylistComponent } from './admin-home/propertylist/propertylist.component';
import { OwnerlistComponent } from './admin-home/ownerlist/ownerlist.component';
import { UserlistComponent } from './admin-home/userlist/userlist.component';
import { VerificationComponent } from './admin-home/verification/verification.component';
import { ReadfeedbackComponent } from './admin-home/readfeedback/readfeedback.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule } from "@angular/router";
import { AdminserviceService } from "src/app/adminservice.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PropertylistComponent,
    OwnerlistComponent,
    UserlistComponent,
    VerificationComponent,
    ReadfeedbackComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule, AppRoutingModule,
    HttpClientModule
  ],
  providers: [AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
