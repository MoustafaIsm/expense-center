import { setUser } from './../../../../state/actions/index';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { getUserData, saveUserData } from 'src/utilities/functions';
import { relationshipStatuses, workFeilds, educationFeilds } from 'src/utilities/constants';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Observable, Subscriber } from 'rxjs';
import { UpdateUserData } from 'src/app/interfaces/UpdateUserData';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/User';
import { select, Store } from '@ngrx/store';
import { getUser } from 'src/app/state/selectors';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user: User;
  profilePicture: string;
  username: string;
  location: string;
  locationDetails: { latitude: number; longitude: number };
  numberOfChildren: string;
  relationshipStatus: string;
  educationFeild: string;
  jobTitle: string;
  jobFeild: string;
  yearlySalary: string;

  myImage !: Observable<any>;
  base64encode: any;

  relationshipStatuses = relationshipStatuses;
  workFeilds = workFeilds;
  educationFeilds = educationFeilds;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private toastController: ToastController,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.pipe(select(getUser)).subscribe((u) => {
      this.user = u;
    });
    this.fillInputs();
  }

  fillInputs() {
    this.profilePicture = this.user.profile_picture_url;
    this.username = this.user.username;
    this.location = localStorage.getItem('userLocation');
    this.numberOfChildren = this.user.nbr_of_children === 0 ? '' : '' + this.user.nbr_of_children;
    this.relationshipStatus = this.user.relationship_status === 'NA' ? '' : this.user.relationship_status;
    this.educationFeild = this.user.education_feild === 'NA' ? '' : this.user.education_feild;
    this.jobTitle = this.user.job_title === 'NA' ? '' : this.user.job_title;
    this.jobFeild = this.user.work_feild === 'NA' ? '' : this.user.work_feild;
    this.yearlySalary = '' + this.user.yearly_salary;
  }

  saveUser() {
    let data: UpdateUserData;
    data = {
      username: this.username === '' ? this.user.username : this.username,
      nbr_of_children: this.numberOfChildren === '' ? this.user.nbr_of_children : parseInt(this.numberOfChildren, 10),
      relationship_status: this.relationshipStatus === '' ? 'NA' : this.relationshipStatus,
      education_feild: this.educationFeild === '' ? 'NA' : this.educationFeild,
      job_title: this.jobTitle === '' ? 'NA' : this.jobTitle,
      work_feild: this.jobFeild === '' ? 'NA' : this.jobFeild,
      yearly_salary: this.yearlySalary === '' ? this.user.yearly_salary : parseInt(this.yearlySalary, 10),
    };
    if (this.base64encode) {
      data = { ...data, profile_picture_url: this.base64encode };
    }
    if (this.locationDetails) {
      data = { ...data, latitude: this.locationDetails.latitude, longitude: this.locationDetails.longitude };
    }
    this.profileService.updateUser(data).subscribe((res) => {
      saveUserData(res.user, false);
      this.store.dispatch(setUser({ user: res.user }));
      this.router.navigate(['/main/profile']);
      this.presentToast('Profile updated successfully');
    }, (error) => {
      console.log(error);
      this.presentToast('Error updating profile');
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.locationDetails = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
        }
      },
        (error) => console.log(error));
    } else {
      alert('Geolocation is not supported by this application.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
    });

    await toast.present();
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
