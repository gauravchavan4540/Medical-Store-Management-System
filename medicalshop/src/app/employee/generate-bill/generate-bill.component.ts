import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})

export class GenerateBillComponent {
  categories: any;
  products: any;
  catid: number = 0; // Default to 0 to load all products
  cartItems: any[] = [];

  showCart: boolean = false;
  orders: any[] = [];
  totalAmount: number = 0;
  quantity: number = 0;

  constructor(private http: HttpClient, private app: AppComponent) { }

 

  loadProduct(): void {

    let url = `${this.app.baseUrl}employee/getProductsBuyer`;

    if (this.catid === 0) {
      // Special case for loading all products
      url = `${this.app.baseUrl}employee/getAllproduct`;
    }

    this.http.get(url).subscribe({
      next: (data: any) => {
        if (data && data.length > 0) {
          this.products = data;
        } else {
          window.alert('No products found with the given criteria.');
        }
      },
      error: () => window.alert('Something is wrong')
    });
  }


  addToCart(p: any): void {
    const url = `${this.app.baseUrl}employee/addToCart/${p.id}/${this.app.id}`;
    this.http.get(url).subscribe({
      next: (data: any) => {
        if (data == 1) {
          window.alert('Already added in a cart');
        } else if (data == 2) {
          window.alert('Added into cart');
          this.loadCartProducts();
        } else {
          window.alert('Something is wrong');
        }
      },
      error: () => window.alert('Something is wrong')
    });
  }

  loadCartProducts(): void {
    const url = `${this.app.baseUrl}employee/getCartProducts/${this.app.id}`;
    this.http.get(url).subscribe({
      next: (data: any) => {
        if (data == 0 || data === null) {
          window.alert("Cart is Empty");
          this.showCart = false;
        } else if (data) {
          this.cartItems = data;
          this.updateTotalAmount();
          this.showCart = true;
        } else {
          window.alert('Something is wrong');
        }
      },
      error: () => window.alert('Something is wrong')
    });
  }

  cartProduct(): void {
    this.loadCartProducts();
  }

  placeOrder() {
    const cartIds = this.cartItems.map((item: any) => item.id);
    const url = `${this.app.baseUrl}employee/placeOrder/${this.app.id}`;
    this.http.post(url, cartIds).subscribe({
      next: response => {
        if (response === 1) {
          this.cartItems = [];
          this.showCart = false;
          window.alert('Order placed successfully.');
        } else {
          window.alert('Something went wrong while placing the order.');
        }
      },
      error: () => window.alert('Something went wrong while placing the order.')
    });
  }

  updateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((sum, item) => {
      const quantity = item.newQuantity && !isNaN(item.newQuantity) && item.newQuantity > 0 ? item.newQuantity : 1;
      return sum + this.calculateDiscountedAmount(item) * quantity;
    }, 0);
  }


  calculateDiscountedAmount(item: any): number {
    if (item.quantity < (item.newQuantity ?? 0)) {
      window.alert("There are only " + item.quantity + " " + item.name + " available in stock");
      item.newQuantity = 1; // Reset to a valid value
      return 0;
    }
    const discount = item.discount ?? 0;
    return item.price * (1 - discount / 100);
  }


  handleQuantityChange(item: any) {
    if (isNaN(item.newQuantity) || item.newQuantity <= 0) {
      window.alert("Invalid quantity entered. Setting to 1.");
      return item.newQuantity = 1; // Reset to a default value
    }
    this.updateTotalAmount();
    return
  }

  removeItemFromCart(productId: number): void {
    const url = `${this.app.baseUrl}employee/removeFromCart/${productId}/${this.app.id}`;
    this.http.delete(url).subscribe((data: any) => {
      if (data === 1) {
        window.alert('Item removed successfully');
        this.loadCartProducts(); // Reload cart products after removal
      } else if (data === 0) {
        window.alert("Item not removed");
      }
      else window.alert('Something went wrong')
    });
  }


  print(): void {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(document.getElementById('printable-content')?.innerHTML || '');
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  }




}

 
  

  


