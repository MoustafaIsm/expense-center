import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  profilePicture: string;
  username: string;
  location: string;
  numberOfChildren: string;
  relationshipStatus: string;
  educationFeild: string;
  jobLocation: string;
  jobTitle: string;
  jobFeild: string;
  yearlySalary: string;

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
    console.log('Job location: ' + this.jobLocation);
    console.log('Job title: ' + this.jobTitle);
    console.log('Job feild: ' + this.jobFeild);
    console.log('Yearly salary: ' + this.yearlySalary);
  }

}
