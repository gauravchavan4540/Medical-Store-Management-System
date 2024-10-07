import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {





  name1: string = '';
  constructor( public http: HttpClient, public app: AppComponent) {
    let url = app.baseUrl + 'login/getName' + app.id;
    http.get(url).subscribe((data: any) => {
      if (data == null) {
        window.alert('something is wrong');
      }
      else {
        this.name1 = data[0];
      }
    });
  }


  generatebill=false;
  generatebill1(): void {
    this.generatebill = !this.generatebill;
  }

  showproduct=false;
  showproduct1(): void {
  this.showproduct = !this.showproduct;
}

//-----------------------------------------------------------
list: any;
  


employeename: string = '';
addCategory() {
  if (!this.employeename.trim()) {
    window.alert('Please enter a employeeName');
    return;
  }
  let url = this.app.baseUrl + 'employee/attandanceMark' + this.app.id;
  this.http.post(url, this.employeename).subscribe((data: any) => {
    if (data == null) {
      window.alert('something is wrong');
    }
    else {
      window.alert('Today attandance is mark');
      this.list.push(data);
      this.employeename = data[0];
    }
  });
}
  
logout(): void {
  // Single-line logout and navigation
  window.location.replace('http://example.com/login'); // Replace with the URL of your login page
}

}
  

