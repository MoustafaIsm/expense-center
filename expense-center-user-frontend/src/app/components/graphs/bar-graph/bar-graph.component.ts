import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements OnInit, AfterViewInit {

  @Input() data: any[];

  @ViewChild('lineChart') barChart: ElementRef;
  bars: any;
  colorArray: any;

  constructor() { }

  ngOnInit() {
    console.log(this.extractData());
  }

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
          label: 'Savings',
          data,
          backgroundColor: 'rgb(139, 197, 190)',
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
    const labels = [];
    const data = [];

    this.data.forEach((item) => {
      labels.push(item.year + '-' + item.month);
      data.push(item.income - item.outcome);
    });

    return { labels, data };
  }

}
