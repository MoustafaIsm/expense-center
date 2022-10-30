/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {
  @Output() changeIsModalOpen = new EventEmitter<boolean>();
  _isModalOpen = false;

  constructor() { }

  @Input()
  get isModalOpen() { return this._isModalOpen; }
  set isModalOpen(value: boolean) { this._isModalOpen = value; }

  ngOnInit() { }

  setOpen(value: boolean) {
    this.changeIsModalOpen.emit(value);
  }

}
