import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.page.html',
  styleUrls: ['./add-receipt.page.scss'],
})
export class AddReceiptPage implements OnInit {
  receiptType = ['Income', 'Outcome'];

  constructor() { }

  ngOnInit() {
  }

}
