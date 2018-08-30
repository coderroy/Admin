import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerlistComponent } from "./admin-home/ownerlist/ownerlist.component";
import { PropertylistComponent } from "./admin-home/propertylist/propertylist.component";
import { ReadfeedbackComponent } from "./admin-home/readfeedback/readfeedback.component";
import { UserlistComponent } from "./admin-home/userlist/userlist.component";
import { VerificationComponent } from "./admin-home/verification/verification.component";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import {AdminHomeComponent } from "./admin-home/admin-home.component";

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'owenerlist', component: OwnerlistComponent },
  { path: 'propertylist', component: PropertylistComponent },
  { path: 'readfeedbck', component: ReadfeedbackComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'verification', component: VerificationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
