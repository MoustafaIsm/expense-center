import { Component, OnInit } from '@angular/core';
import { getUserData } from 'src/utilities/functions';
import { relationshipStatuses, workFeilds, educationFeilds } from 'src/utilities/constants';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user = getUserData();
  profilePicture: string = this.user.profile_picture_url;
  username = this.user.username;
  location = localStorage.getItem('userLocation');
  locationDetails: { latitude: number; longitude: number };
  numberOfChildren = '' + this.user.nbr_of_children;
  relationshipStatus = this.user.relationship_status === 'NA' ? '' : this.user.relationship_status;
  educationFeild = this.user.education_feild === 'NA' ? '' : this.user.education_feild;
  jobTitle = this.user.job_title === 'NA' ? '' : this.user.job_title;
  jobFeild = this.user.work_feild === 'NA' ? '' : this.user.work_feild;
  yearlySalary = '' + this.user.yearly_salary;

  myImage !: Observable<any>;
  base64encode: any;

  relationshipStatuses = relationshipStatuses;
  workFeilds = workFeilds;
  educationFeilds = educationFeilds;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  saveUser() {
    console.log('Username: ' + this.username);
    console.log('Location: ' + this.location);
    console.log('Number of children: ' + this.numberOfChildren);
    console.log('Relationship status: ' + this.relationshipStatus);
    console.log('Education feild: ' + this.educationFeild);
    console.log('Job title: ' + this.jobTitle);
    console.log('Job feild: ' + this.jobFeild);
    console.log('Yearly salary: ' + this.yearlySalary);
    console.log('Image: ' + this.base64encode);
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
