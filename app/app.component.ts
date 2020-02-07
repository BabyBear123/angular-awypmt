import { Component } from '@angular/core';
import { data } from './data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart renderAs="canvas" [pannable]="true" [zoomable]="true" [categoryAxis]="categoryAxis" [valueAxis]="valueAxis">
        <kendo-chart-series>
          <kendo-chart-series-item [data]="data" field="value" categoryField="category">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
    public data: any[] = data;

    public categoryAxis: any = {
        max: new Date(2000, 1, 0),
        maxDivisions: 10
    };

    public valueAxis: any = {
        labels: {
            format: '#.00'
        }
    };
}
