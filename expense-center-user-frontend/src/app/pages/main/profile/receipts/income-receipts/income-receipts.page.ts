import { Router } from '@angular/router';
import { Receipt } from './../../../../../interfaces/Receipt';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-income-receipts',
  templateUrl: './income-receipts.page.html',
  styleUrls: ['./income-receipts.page.scss'],
})
export class IncomeReceiptsPage implements OnInit {
  incomeReceipts: Receipt[] = [];

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.getIncomeReceipts();
  }

  getIncomeReceipts() {
    this.profileService.getIncomeReceipts().subscribe(
      data => {
        this.incomeReceipts = data.receipts;
      }, error => {
        presentToast('Error getting income receipts');
      });
  }

}
