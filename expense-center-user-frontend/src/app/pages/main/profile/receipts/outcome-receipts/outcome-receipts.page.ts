import { Router } from '@angular/router';
import { Receipt } from './../../../../../interfaces/Receipt';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { presentToast } from 'src/utilities/functions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-outcome-receipts',
  templateUrl: './outcome-receipts.page.html',
  styleUrls: ['./outcome-receipts.page.scss'],
})
export class OutcomeReceiptsPage implements OnInit, OnDestroy {
  outcomeReceipts: Receipt[] = [];
  subscriptions: Subscription[] = [];

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.getOutcomeReceipts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getOutcomeReceipts() {
    const temp = this.profileService.getOutcomeReceipts().subscribe(data => {
      this.outcomeReceipts = data.receipts;
    }, (error) => {
      if (error.status === 401) {
        presentToast('Please login to view feeds');
        this.router.navigate(['login']);
      } else {
        presentToast('Something went wrong');
      }
    });
    this.subscriptions.push(temp);
  }

}
