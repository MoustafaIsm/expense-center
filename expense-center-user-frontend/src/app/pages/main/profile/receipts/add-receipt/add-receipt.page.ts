import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { receiptTypes } from '../../../../../../utilities/constants';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.page.html',
  styleUrls: ['./add-receipt.page.scss'],
})
export class AddReceiptPage implements OnInit {
  title: string;
  date: Date;
  amount: string;
  category: string;
  receiptType: string;
  receiptFile: string;

  categoryTypes: string[] = [];
  receiptTypes = receiptTypes;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getSubCategories();
  }

  addReceipt() {
    console.log('Title: ' + this.title);
    console.log('Date: ' + this.date);
    console.log('Amount: ' + this.amount);
    console.log('Category: ' + this.category);
    console.log('Receipt type: ' + this.receiptType);
    console.log('Receipt file: ' + this.receiptFile);
  }

  getSubCategories() {
    this.profileService.getSubCategories().subscribe(data => {
      data.subCategories.forEach((subCategory: any) => {
        this.categoryTypes.push(subCategory.name);
      });
    });
  }

}
