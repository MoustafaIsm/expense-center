import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit, AfterViewInit {

  @Input() data: any[];
  @Input() title: string;

  @ViewChild('barChart') barChart: ElementRef;
  bars: any;
  colorArray: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    const { labels, data } = this.extractData();
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: this.title,
          data,
          backgroundColor: 'rgb(139, 197, 190, 0.7)',
          borderColor: 'rgb(0, 109, 119)',
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        },
      }
    });
  }

  extractData() {
    if (this.data.length > 12) {
      this.data = this.data.slice(this.data.length - 12, this.data.length);
    }
    const labels = [];
    const data = [];

    this.data.forEach((item) => {
      labels.push(item.year + '-' + item.month);
      if (this.title === 'Savings') {
        data.push(item.income - item.outcome);
      }
      if (this.title === 'Income') {
        data.push(item.income);
      }
      if (this.title === 'Outcome') {
        data.push(item.outcome);
      }
    });

    return { labels, data };
  }

}
