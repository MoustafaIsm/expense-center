import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() { }

}
