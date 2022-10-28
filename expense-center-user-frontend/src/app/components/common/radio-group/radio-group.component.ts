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

  constructor() { }

  ngOnInit() { }

  changeValue(value: string) {
    this.valueEmmiter.emit(value);
  }

}
