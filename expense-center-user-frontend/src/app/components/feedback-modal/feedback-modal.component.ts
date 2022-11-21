/* eslint-disable no-underscore-dangle */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedbacks/feedback.service';
import { presentToast } from 'src/utilities/functions';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
})
export class FeedbackModalComponent implements OnInit {
  @Output() isModalOpenChange = new EventEmitter<boolean>();
  _isModalOpen = false;
  message = '';

  constructor(private feedbackService: FeedbackService) { }

  @Input()
  get isModalOpen() { return this._isModalOpen; }
  set isModalOpen(value: boolean) { this._isModalOpen = value; }

  ngOnInit() { }

  setOpen(value: boolean) {
    this.isModalOpenChange.emit(value);
  }

  sendFeedback() {
    this.feedbackService.sendFeedback(this.message).subscribe(
      () => {
        presentToast('Feedback sent successfully');
        this.setOpen(false);
        this.message = '';
      });
  }

}
