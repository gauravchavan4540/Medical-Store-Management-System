import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { AddcatagoryComponent } from './admin/addcatagory/addcatagory.component';
import { ShowcategoryComponent } from './admin/showcategory/showcategory.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { GenerateBillComponent } from './employee/generate-bill/generate-bill.component';
import { ShowProductComponent } from './employee/show-product/show-product.component';
import { EmployeeAttandaceComponent } from './admin/employee-attandace/employee-attandace.component';
import { GeneratePDFComponent } from './employee/generate-pdf/generate-pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    LoginComponent,
    AddcatagoryComponent,
    ShowcategoryComponent,
    AddProductComponent,
    AddemployeeComponent,
    ShowProductComponent,
    GenerateBillComponent,
    EmployeeAttandaceComponent,
    GeneratePDFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
