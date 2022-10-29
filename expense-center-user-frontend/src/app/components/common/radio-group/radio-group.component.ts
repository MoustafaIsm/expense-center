/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Input() title: string;
  @Input() options: string[];
  @Output() valueChange = new EventEmitter<string>();
  _value: string;

  constructor() { }

  @Input()
  get value() { return this._value; }
  set value(newValue: string) {
    this._value = newValue;
  }



  ngOnInit() { }

  changeValue(value: string) {
    this.valueChange.emit(value);
  }

}
