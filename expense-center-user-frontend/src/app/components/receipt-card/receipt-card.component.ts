import { Receipt } from './../../interfaces/Receipt';
import { Component, Input, OnInit } from '@angular/core';
import { stringifyDate } from 'src/utilities/functions';

@Component({
  selector: 'app-receipt-card',
  templateUrl: './receipt-card.component.html',
  styleUrls: ['./receipt-card.component.scss'],
})
export class ReceiptCardComponent implements OnInit {
  @Input() receipt: Receipt;

  constructor() { }

  ngOnInit() { }

}
