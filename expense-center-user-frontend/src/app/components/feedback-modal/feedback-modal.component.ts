/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
})
export class FeedbackModalComponent implements OnInit {
  @Output() isModalOpenChange = new EventEmitter<boolean>();
  _isModalOpen = false;

  constructor() { }

  @Input()
  get isModalOpen() { return this._isModalOpen; }
  set isModalOpen(value: boolean) { this._isModalOpen = value; }

  ngOnInit() { }

  setOpen(value: boolean) {
    this.isModalOpenChange.emit(value);
  }

}
