import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {
  @Input() title: string;
  @Output() valueEmmiter = new EventEmitter<string>();
  value: string;

  constructor() { }

  ngOnInit() { }

  valueChanged(value: string) {
    this.value = value;
    this.valueEmmiter.emit(value);
  }
}
