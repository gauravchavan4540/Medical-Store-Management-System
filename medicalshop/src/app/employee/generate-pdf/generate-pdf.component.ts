import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
  import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css']
})
export class GeneratePDFComponent implements OnInit {

    message: string | null = null;
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if (params['logout']) {
          this.message = 'You have been logged out successfully.';
        }
      });
    }
  }
  


  








