import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {EmployeeDashboardComponent} from './employee-dashboard/employee-dashboard.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AddEditInvoiceComponent } from './employee-dashboard/add-edit-invoice/add-edit-invoice.component';


const routes: Routes = [
   {path:'',redirectTo:'registration',pathMatch:'full'},
   {path:'registration',component:RegistrationComponent},
   {path:'login',component:LoginComponent},
   {path:'employeedashboard',component:EmployeeDashboardComponent},
   {path:'admindashboard',component:AdminDashboardComponent},
   {path:'admindashboard/addinvoice',component:AddEditInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
