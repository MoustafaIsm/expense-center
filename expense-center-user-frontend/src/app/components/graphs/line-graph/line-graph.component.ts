import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss'],
})
export class LineGraphComponent implements OnInit, AfterViewInit {

  @ViewChild('lineChart') barChart: ElementRef;
  bars: any;
  colorArray: any;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Savings',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(139, 197, 190, 0.5)',
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


}
