import { Component, OnInit } from '@angular/core';
import { getUserData } from 'src/utilities/functions';

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

  constructor() { }

  ngOnInit() {
  }

  saveUser() {
    console.log('Profile picture: ' + this.profilePicture);
    console.log('Username: ' + this.username);
    console.log('Location: ' + this.location);
    console.log('Number of children: ' + this.numberOfChildren);
    console.log('Relationship status: ' + this.relationshipStatus);
    console.log('Education feild: ' + this.educationFeild);
    console.log('Job title: ' + this.jobTitle);
    console.log('Job feild: ' + this.jobFeild);
    console.log('Yearly salary: ' + this.yearlySalary);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          return {
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

}
