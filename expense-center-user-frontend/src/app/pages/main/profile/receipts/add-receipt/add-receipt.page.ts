import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.page.html',
  styleUrls: ['./add-receipt.page.scss'],
})
export class AddReceiptPage implements OnInit {
  title: string;
  date: Date;
  amount: number;
  category: string;
  receiptType: string;
  receiptFile: string;
  categoryTypes = ['Income', 'Outcome'];
  receiptTypes = ['Income', 'Outcome'];

  constructor() { }

  ngOnInit() {
  }

  addReceipt() {
    console.log('Title: ' + this.title);
    console.log('Date: ' + this.date);
    console.log('Amount: ' + this.amount);
    console.log('Category: ' + this.category);
    console.log('Receipt type: ' + this.receiptType);
    console.log('Receipt file: ' + this.receiptFile);
  }

  changeTitle(value: string) {
    this.title = value;
  }

  changeDate(value: Date) {
    this.date = value;
  }

  changeAmount(value: string) {
    this.amount = parseFloat(value);
  }

  changeCategory(value: string) {
    this.category = value;
  }

  changeReceiptFile(value: string) {
    this.receiptFile = value;
  }

}
