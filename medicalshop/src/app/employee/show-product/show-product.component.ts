import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EmployeeComponent } from '../employee.component';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {

  list: any;
  constructor(public http: HttpClient, public app: AppComponent) {
  }
ngOnInit(): void {
this.loadCategories();  // Load categories when the component initializes
}

  loadCategories(): void {
    const url = this.app.baseUrl + 'employee/getAllproduct';
    this.http.get<any>(url).subscribe(data => {
      if (data == null) {
        window.alert('Something is Wrong');
      } else {
        this.list = data;
      }  
    });
  }
  

}
