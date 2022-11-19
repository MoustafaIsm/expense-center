/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { receiptTypes } from '../../../../../../utilities/constants';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.page.html',
  styleUrls: ['./add-receipt.page.scss'],
})
export class AddReceiptPage implements OnInit {
  title: string;
  amount: string;
  category: string;
  receiptType: string;
  receiptFile: string;
  error: string;

  categoryTypes: string[] = [];
  receiptTypes = receiptTypes;

  myImage !: Observable<any>;
  base64encode: any;

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.getSubCategories();
  }

  handleSubmit() {
    if (this.title && this.amount && this.category && this.receiptType) {
      const data = {
        title: this.title,
        amount: this.amount,
        sub_category_name: this.category,
        type: this.receiptType,
        receipt_image: this.base64encode ? this.base64encode : 'NA'
      };
      this.addReceipt(data);
    } else {
      this.error = 'Please fill all the fields';
    }
  }

  getSubCategories() {
    const temp = this.profileService.getSubCategories().subscribe(
      data => {
        data.subCategories.forEach((subCategory: any) => {
          this.categoryTypes.push(subCategory.name);
        });
      }, error => {
        if (error.status === 401) {
          presentToast('Please login to get categories');
          this.router.navigate(['login']);
        } else {
          presentToast('Something went wrong');
        }
      });
  }

  addReceipt(data: any) {
    this.profileService.addReceipt(data).subscribe(
      res => {
        presentToast('Receipt added successfully');
        this.router.navigate(['main/profile/receipts']);
      }, error => {
        if (error.status === 401) {
          presentToast('Please login to add receipt');
          this.router.navigate(['login']);
        } else {
          presentToast('Something went wrong');
        }
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
