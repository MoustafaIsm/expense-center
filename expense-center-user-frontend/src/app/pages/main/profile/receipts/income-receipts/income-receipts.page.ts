import { Router } from '@angular/router';
import { Receipt } from './../../../../../interfaces/Receipt';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { presentToast } from 'src/utilities/functions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-income-receipts',
  templateUrl: './income-receipts.page.html',
  styleUrls: ['./income-receipts.page.scss'],
})
export class IncomeReceiptsPage implements OnInit, OnDestroy {
  incomeReceipts: Receipt[] = [];
  subscriptions: Subscription[] = [];

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.getIncomeReceipts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getIncomeReceipts() {
    const temp = this.profileService.getIncomeReceipts().subscribe(
      data => {
        this.incomeReceipts = data.receipts;
      }, error => {
        presentToast('Error getting income receipts');
      });
    this.subscriptions.push(temp);
  }

}
