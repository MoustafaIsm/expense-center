import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() label: string;
  @Output() valueChange = new EventEmitter<Date>();
  value: Date;

  constructor() { }

  ngOnInit() { }

  changeValue(value: Date) {
    this.valueChange.emit(value);
  }

}
