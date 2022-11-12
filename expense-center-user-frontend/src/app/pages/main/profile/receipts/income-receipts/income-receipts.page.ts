import { Receipt } from './../../../../../interfaces/Receipt';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-income-receipts',
  templateUrl: './income-receipts.page.html',
  styleUrls: ['./income-receipts.page.scss'],
})
export class IncomeReceiptsPage implements OnInit {
  incomeReceipts: Receipt[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getIncomeReceipts();
  }

  getIncomeReceipts() {
    this.profileService.getIncomeReceipts().subscribe(data => {
      this.incomeReceipts = data.receipts;
    });
  }

}
