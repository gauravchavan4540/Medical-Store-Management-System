import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  @Input() employees: any; // All Employees

  employeename : string = '';
  address : string = '';
  qualification : string ='';
  age: number = 0;
  salary: number = 0;
  list : any;

  constructor(public http: HttpClient, public app: AppComponent, public comp: AdminComponent) {}


  ngOnInit(): void {
    this.loadCategories();  // Load categories when the component initializes
    }
    
      loadCategories(): void {
        const url = this.app.baseUrl + 'admin/getEmployeess';
        this.http.get<any>(url).subscribe(data => {
          if (data == null) {
            window.alert('Something is Wrong');
          } else {
            this.list = data;
          }  
        });
      }
    


  addEmployee() {
    if (!this.employeename.trim() || !this.address.trim() || !this.qualification.trim() || this.age == 0 || this.salary == 0) {
      window.alert('All fields are Mandatory');
      return;
    }

    const employee = {
      employeename: this.employeename,
      address: this.address,
      qualification : this.qualification,
      age: this.age,
      salary: this.salary,
    };

    const url = `${this.app.baseUrl}admin/addemployees`;
    this.http.post(url, employee).subscribe({
      next: (data: any) => {
        if (data == null) {
          window.alert('Something is wrong');
        } else {
          window.alert('Added the employee');
          this.employees.push(data);
          this.resetForm();
        }
      },
      error: (error: any) => {
        console.error('There was an error!', error);
        window.alert('There was an error! Check the console for details.');
      }
    });
  }

  resetForm(): void {
    this.employeename  = '';
    this.address  = '';
    this.qualification ='';
    this.age = 0;
    this.salary = 0;
  }
}


