/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() label: string;
  @Output() valueChange = new EventEmitter<Date>();
  _value: Date;

  constructor() { }

  @Input()
  get value(): Date { return this._value; }
  set value(newValue: Date) {
    this._value = newValue;
  }

  ngOnInit() { }

  changeValue(value: Date) {
    this.valueChange.emit(value);
  }

}
