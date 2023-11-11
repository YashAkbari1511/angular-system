import { Component, HostListener } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: "wcg-our-visiter",
  templateUrl: "./our-visiter.component.html"
})
export class OurVisiterComponent {
  chartOption: any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [49.1, 39.3, 11.6],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Mobile", "Tablet", "Laptop"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 215
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
