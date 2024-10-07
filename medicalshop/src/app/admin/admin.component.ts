import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  
  whatToShow: number = 0;
  products: any;
  categories: any;
  name: string = '';

  constructor(public http: HttpClient, public app: AppComponent) {
    let url = app.baseUrl + 'login/getName' + app.id;
    http.get(url).subscribe((data: any) => {
      if (data == null) {
        window.alert('something is wrong');
      }
      else {
        this.name = data[0];
      }
    });
  }

  changeWhatToShow(num: number) {
    this.whatToShow = num;
    this.loadProduct();
    // this.loadCategories();
    return;
  }

  loadProduct() {
    const url = this.app.baseUrl + 'admin/getAllProducts' + this.app.id;
    this.http.get(url).subscribe(data => {
      // console.log(data)
      if (data == null) {
        window.alert('Something is Wrong');
      } else {
        this.products = data;
      }
    });

  }
  

  showcategory=false;
  showcategory1(): void {
    this.showcategory = !this.showcategory;
  }

  addcatagory=false;
  addcatagory1(): void {
  this.addcatagory = !this.addcatagory;
}


addemployee=false;
addemployee1(): void {
this.addemployee = !this.addemployee;
}

attandace=false;
attandace1(): void {
this.attandace = !this.attandace;
}






}
