/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
})
export class DropdownListComponent implements OnInit {
  @Input() title: string;
  @Input() placeholder: string;
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
