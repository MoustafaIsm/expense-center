import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Input() title: string;
  @Input() options: string[];

  constructor() { }

  ngOnInit() { }

}
