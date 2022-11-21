/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {
  @Input() title: string;
  @Output() valueChange = new EventEmitter<string>();
  _value: string;

  constructor() { }

  @Input()
  get value() { return this._value; }
  set value(newValue: string) {
    this._value = newValue;
  }

  ngOnInit() { }

  valueChanged(value: string) {
    this.valueChange.emit(value);
  }
}
