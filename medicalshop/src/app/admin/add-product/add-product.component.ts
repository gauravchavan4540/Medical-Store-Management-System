import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  @Input() products: any; // All Products
  @Input() categories: any; // All Categories

  name: string = '';
  price: number = 0;
  quantity: number = 0;
  description: string = '';
  discount: number = 0;
  catid: number = 0;

  constructor(public http: HttpClient, public app: AppComponent, public comp: AdminComponent) {
  }

  ngOnInit(): void {
    this.loadCategories(); // Load categories when the component initializes
    // this.loadProduct(); // Load products when the component initializes
  }

  loadCategories() {
    const url = `${this.app.baseUrl}admin/getAllCategories`;
    this.http.get<any>(url).subscribe(data => {
      if (data == null) {
        window.alert('Something is Wrong');
      } else {
        // console.log(data)
        this.categories = data;
      }
    });
  }

  addProduct() {
    if (!this.name.trim() || this.price == 0 || this.quantity == 0 || this.discount == 0 || !this.description.trim()) {
      window.alert('All fields are Mandatory');
      return;
    }

    const product = {
      name: this.name,
      userid: this.app.id,
      price: this.price,
      quantity: this.quantity,
      description: this.description,
      discount: this.discount,
      categoryid: this.catid
    };

    const url = `${this.app.baseUrl}admin/addNewProduct`;
    this.http.post(url, product).subscribe((data: any) => {
      if (data == null) {
        window.alert('Something is wrong');
      } else {
        this.products.push(data);
        this.comp.loadProduct();
        this.resetForm();
      }
    });
  }

  resetForm(): void {
    this.name = '';
    this.price = 0;
    this.quantity = 0;
    this.description = '';
    this.discount = 0;
    this.catid = 0;
  }

}
