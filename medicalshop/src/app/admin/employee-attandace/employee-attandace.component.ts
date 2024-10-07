import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminComponent } from '../admin.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-employee-attandace',
  templateUrl: './employee-attandace.component.html',
  styleUrls: ['./employee-attandace.component.css']
})
export class EmployeeAttandaceComponent {

  list: any;
  constructor(public http: HttpClient, public app: AppComponent) {
  }
ngOnInit(): void {
this.loadCategories();  // Load categories when the component initializes
}

  loadCategories(): void {
    const url = this.app.baseUrl + 'admin/Attadance';
    this.http.get<any>(url).subscribe(data => {
      if (data == null) {
        window.alert('Something is Wrong');
      } else {
        this.list = data;
      }  
    });
  }
  
}
