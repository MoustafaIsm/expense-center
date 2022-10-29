import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-pages-header',
  templateUrl: './main-pages-header.component.html',
  styleUrls: ['./main-pages-header.component.scss'],
})
export class MainPagesHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() parent: string;
  @Input() hasBackBtn: boolean;
  @Input() hasSearchBtn: boolean;
  @Input() hasExternalBtn: boolean;
  @Output() clickEmmiter = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onExternalClick() {
    this.clickEmmiter.emit();
  }

}
