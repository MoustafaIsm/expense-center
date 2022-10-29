import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.page.html',
  styleUrls: ['./add-receipt.page.scss'],
})
export class AddReceiptPage implements OnInit {
  category: string;
  receiptType = ['Income', 'Outcome'];

  constructor() { }

  ngOnInit() {
  }

  changeCategory(value: string) {
    this.category = value;
  }

}
