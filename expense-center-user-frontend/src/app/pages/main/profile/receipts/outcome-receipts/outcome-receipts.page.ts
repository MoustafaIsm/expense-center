import { Receipt } from './../../../../../interfaces/Receipt';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-outcome-receipts',
  templateUrl: './outcome-receipts.page.html',
  styleUrls: ['./outcome-receipts.page.scss'],
})
export class OutcomeReceiptsPage implements OnInit {
  outcomeReceipts: Receipt[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getOutcomeReceipts();
  }

  getOutcomeReceipts() {
    this.profileService.getOutcomeReceipts().subscribe(data => {
      this.outcomeReceipts = data.receipts;
    }, (error) => {
      console.log(error);
    });
  }

}
