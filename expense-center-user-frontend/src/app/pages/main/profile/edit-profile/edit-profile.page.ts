import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  username: string;
  location: string;
  numberOfChilden: number;
  relationshipStatus: string;
  educationFeild: string;
  jobLocaiton: string;
  jobtitle: string;
  jobFeild: string;
  yearlySalary: number;

  constructor() { }

  ngOnInit() {
  }

  changeUsername(value: string) {
    this.username = value;
  }

  changeLocation(value: string) {
    this.location = value;
  }

  changeNumberOfChilder(value: string) {
    this.numberOfChilden = parseInt(value, 10);
  }

  changeRelationshipStatus(value: string) {
    this.relationshipStatus = value;
  }

  changeEducationFeild(value: string) {
    this.educationFeild = value;
  }

  changeJobLocation(value: string) {
    this.jobLocaiton = value;
  }

  changeJobTitle(value: string) {
    this.jobtitle = value;
  }

  changeJobFeild(value: string) {
    this.jobFeild = value;
  }

  changeYearlySalary(value: string) {
    this.yearlySalary = parseInt(value, 10);
  }

}
