import { Component, OnInit } from '@angular/core';
import * as data from '../data';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-full-chart',
  templateUrl: './full-chart.component.html',
  styleUrls: ['./full-chart.component.scss']
})
export class FullChartComponent implements OnInit {
  public chartType: string = 'line';
  chartLabels = [];

  disabled = false;
  inputDisabled = false;
  disabledEntries = false;
  dataJSON = data.data.data;
  dataMax: number;
  dataDateMinFIRST: any;
  dataDateMaxFIRST: any;

  dataDateMin: any;

  dataDateMax: any;

  dataModelMin = 0;
  dataModelMax: number;
  dateModelMin: string;
  dateModelMax: string;
  dataSliderOptions: Options;

  chartDatasets = [];
  dataTemperature = [];
  dataHumidity = [];
  dataLight = [];
  dataCO2 = [];
  dataHumidityRatio = [];
  dataOccupancy = [];

  chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 0.5
    },
    {
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 0.5
    },
    {
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 0.5
    },
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 0.5
    },
    {
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 0.5
    }
  ];

  chartOptions = {
    responsive: true,
    tooltips: { mode: 'index' }
  };

  ngOnInit() {
    this.dataDateMinFIRST = new Date(this.dataJSON[0].date);
    this.dataDateMaxFIRST = new Date(this.dataJSON.pop().date);

    this.dataDateMin = new Date(
      this.dataDateMinFIRST.setHours(this.dataDateMinFIRST.getHours() + 1)
    )
      .toISOString()
      .substring(0, 16);
    this.dataDateMax = new Date(
      this.dataDateMaxFIRST.setHours(this.dataDateMaxFIRST.getHours() + 1)
    )
      .toISOString()
      .substring(0, 16);

    this.dataMax = this.dataJSON.length - 1;
    this.dataModelMax = this.dataMax;
    this.dateModelMin = this.dataDateMin;
    this.dateModelMax = this.dataDateMax;
    this.dataSliderOptions = {
      floor: 0,
      ceil: this.dataMax
    };
    this.setChart();
  }

  setChart() {
    this.chartLabels = [];
    this.chartDatasets = [];
    this.dataTemperature = [];
    this.dataTemperature = [];
    this.dataHumidity = [];
    this.dataLight = [];
    this.dataCO2 = [];
    this.dataHumidityRatio = [];
    this.dataOccupancy = [];
    for (const [index, item] of this.dataJSON.entries()) {
      if (
        this.dataModelMin <= index &&
        index <= this.dataModelMax &&
        this.dataDateMin <=
          new Date(item.date).toISOString().substring(0, 16) &&
        new Date(item.date).toISOString().substring(0, 16) <= this.dataDateMax
      ) {
        const date1 = item.date.split(' ')[0].split('-');
        const date2 = item.date.split(' ')[1];

        const offDate = `${date1[2]} Feb ${date2}`;
        this.chartLabels.push(offDate);

        this.dataTemperature.push(+item.temperature);
        this.dataHumidity.push(+item.humidity);
        this.dataLight.push(+item.light);
        this.dataCO2.push(+item.co2);
        this.dataHumidityRatio.push(+item.humidityRatio);
        this.dataOccupancy.push(+item.occupancy);
      }
    }
    this.chartDatasets = [
      { data: this.dataTemperature, label: 'Temperature' },
      { data: this.dataHumidity, label: 'Humidity' },
      { data: this.dataLight, label: 'Light' },
      { data: this.dataCO2, label: 'CO2' },
      { data: this.dataHumidityRatio, label: 'Humidity Ratio' },
      { data: this.dataOccupancy, label: 'Occupancy' }
    ];
  }
  onHighRangeChange(e: number) {
    this.dataModelMax = e;

    this.setChart();
  }
  onValueRangeChange(e: number) {
    this.dataModelMin = e;

    this.setChart();
  }

  onChangeDateMin(e: string) {
    this.dataModelMin = 0;
    this.dataModelMax = this.dataMax;
    this.disabled = true;
    this.disabledEntries = true;
    this.dataSliderOptions = {
      disabled: true,
      floor: 0,
      ceil: this.dataMax
    };
    this.dateModelMin = e;
    this.inputDisabled = !this.disabled;
    this.setChart();
  }

  onChangeDateMax(e: string) {
    this.dataModelMin = 0;
    this.dataModelMax = this.dataMax;
    this.disabled = true;
    this.disabledEntries = true;
    this.dataSliderOptions = {
      disabled: true,
      floor: 0,
      ceil: this.dataMax
    };
    this.dateModelMax = e;
    this.inputDisabled = !this.disabled;

    this.setChart();
  }
  onHoverSlider() {
    if (this.disabled) {
      this.dataSliderOptions = {
        disabled: false,
        floor: 0,
        ceil: this.dataMax
      };
      this.disabledEntries = false;
      this.disabled = true;
    } else {
      return;
    }
  }
  onHoverInput() {
    if (this.inputDisabled) {
      this.inputDisabled = false;
    } else {
      return;
    }
  }
  disableInput() {
    this.inputDisabled = true;
    this.dateModelMin = new Date(data.data.data[0].date)
      .toISOString()
      .substring(0, 16);
    this.dateModelMax = new Date(data.data.data.pop().date)
      .toISOString()
      .substring(0, 16);
  }
}
