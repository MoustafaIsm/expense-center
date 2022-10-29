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
  @Output() valueEmmiter = new EventEmitter<string>();
  value: string;

  constructor() { }

  ngOnInit() { }

  changeValue(value: string) {
    this.value = value;
    this.valueEmmiter.emit(value);
  }

}
