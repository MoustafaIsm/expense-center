import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() value: string;
  @Output() valueEmmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  changeValue(value: string) {
    this.valueEmmiter.emit(value);
  }

}
