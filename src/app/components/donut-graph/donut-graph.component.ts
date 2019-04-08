import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styles: []
})
export class DonutGraphComponent implements OnInit {

  constructor() { }
  @Input() ChartLabels: Label[] = [];
  @Input() ChartData: SingleDataSet = [];
  @Input() ChartType: ChartType = 'doughnut';
  ngOnInit() {
  }

}
