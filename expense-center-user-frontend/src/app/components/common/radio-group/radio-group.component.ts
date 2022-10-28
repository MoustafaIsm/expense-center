import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Input() title: string;
  @Input() options: string[];
  @Input() value: string;
  @Output() valueEmmiter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() { }

  changeSelected(newValue: string) {
    this.value = newValue;
    this.valueEmmiter.emit(this.value);
    console.log('value: ', this.value);
  }

}
