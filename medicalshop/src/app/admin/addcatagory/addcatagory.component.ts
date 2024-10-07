import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-addcatagory',
  templateUrl: './addcatagory.component.html',
  styleUrls: ['./addcatagory.component.css']
})
export class AddcatagoryComponent {
  list: any;
  constructor(public http: HttpClient, public app: AppComponent) {
      }
  

  name: string = '';
  addCategory() {
    if (!this.name.trim()) {
      window.alert('Please enter a category');
      return;
    }
    let url = this.app.baseUrl + 'admin/addNewCategory' + this.app.id;
    this.http.post(url, this.name).subscribe((data: any) => {
      if (data == null) {
        window.alert('something is wrong');
      }
      else {
        window.alert('add to category');
        this.list.push(data);
        this.name = data[0];
      }
    });
  }
  

}
