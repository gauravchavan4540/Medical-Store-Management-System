import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-showcategory',
  templateUrl: './showcategory.component.html',
  styleUrls: ['./showcategory.component.css']
})
export class ShowcategoryComponent {

  list: any;
  constructor(public http: HttpClient, public app: AppComponent) {
      }

      
  ngOnInit(): void {
    this.loadCategories();  // Load categories when the component initializes
  }

  loadCategories(): void {
    const url = this.app.baseUrl + 'admin/getAllCategories';
    this.http.get<any>(url).subscribe(data => {
      if (data == null) {
        window.alert('Something is Wrong');
      } else {
        this.list = data;
      }
    });
  }

  deleteCategory(id: number): void {
    if (window.confirm('Are you sure you want to delete this category?')) {
      const url = `${this.app.baseUrl}admin/deleteCategory/${id}`;
      this.http.delete(url).subscribe(response => {
        this.loadCategories();
        return response;
      });
    }
  }
}
