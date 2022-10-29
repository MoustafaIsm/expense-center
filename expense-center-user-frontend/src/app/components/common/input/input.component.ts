/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
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
