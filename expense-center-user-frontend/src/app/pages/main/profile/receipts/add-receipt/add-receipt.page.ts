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

  changeTitle(value: string) {
    this.title = value;
  }

  changeDate(value: Date) {
    this.date = value;
  }

  changeAmount(value: number) {
    this.amount = value;
  }

  changeCategory(value: string) {
    this.category = value;
  }

  changeReceiptFile(value: string) {
    this.receiptFile = value;
  }

}
