import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
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

  myImage !: Observable<any>;
  base64encode: any;

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
    console.log('Receipt file: ' + this.base64encode);
  }

  getSubCategories() {
    this.profileService.getSubCategories().subscribe(data => {
      data.subCategories.forEach((subCategory: any) => {
        this.categoryTypes.push(subCategory.name);
      });
    });
  }

  onChangeFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.base64encode = d;
      this.myImage = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    };

    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

}
