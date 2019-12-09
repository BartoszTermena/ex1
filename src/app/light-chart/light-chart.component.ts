import { Component, OnInit } from '@angular/core';
import * as data from '../data-half-2';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-light-chart',
  templateUrl: './light-chart.component.html',
  styleUrls: ['./light-chart.component.scss']
})
export class LightChartComponent implements OnInit {
  public chartType: string = 'line';
  chartLabels = [];
  dataBool = true;
  chartDatasets = [];
  dataLight = [];
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

  chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    }
  ];

  chartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(val: number) {
              return val.toFixed(2) + ' Lux';
            },
            stacked: true
          }
        }
      ]
    }
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
  addMoreData() {
    this.dataJSON = [
      ...this.dataJSON,
      {
        date: '2015-02-03 14:44:00',
        temperature: '23.29',
        humidity: '28.6',
        light: '478.75',
        co2: '1132.5',
        humidityRatio: '0.00506207229539191',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:44:59',
        temperature: '23.29',
        humidity: '28.6833333333333',
        light: '474',
        co2: '1142.83333333333',
        humidityRatio: '0.00507694231398356',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:45:59',
        temperature: '23.29',
        humidity: '28.772',
        light: '473',
        co2: '1152',
        humidityRatio: '0.00509276478818188',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:47:00',
        temperature: '23.29',
        humidity: '28.79',
        light: '474',
        co2: '1156.75',
        humidityRatio: '0.00509597696691146',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:48:00',
        temperature: '23.29',
        humidity: '28.89',
        light: '479',
        co2: '1159.33333333333',
        humidityRatio: '0.00511382300356036',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:49:00',
        temperature: '23.254',
        humidity: '28.912',
        light: '476',
        co2: '1160.8',
        humidityRatio: '0.00510654102587916',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:50:00',
        temperature: '23.245',
        humidity: '28.92',
        light: '467.75',
        co2: '1160',
        humidityRatio: '0.0051051661578754',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:51:00',
        temperature: '23.236',
        humidity: '28.978',
        light: '464',
        co2: '1167',
        humidityRatio: '0.00511268512907113',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:51:59',
        temperature: '23.2',
        humidity: '29.05',
        light: '464',
        co2: '1171',
        humidityRatio: '0.00511426303503512',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:53:00',
        temperature: '23.2225',
        humidity: '29.15',
        light: '464',
        co2: '1175.5',
        humidityRatio: '0.00513905406343719',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:54:00',
        temperature: '23.2',
        humidity: '29.2',
        light: '453',
        co2: '1181',
        humidityRatio: '0.00514088885036853',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:55:00',
        temperature: '23.2',
        humidity: '29.2',
        light: '464',
        co2: '1192',
        humidityRatio: '0.00514088885036853',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:55:59',
        temperature: '23.2',
        humidity: '29.2',
        light: '464',
        co2: '1197.75',
        humidityRatio: '0.00514088885036853',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:57:00',
        temperature: '23.2',
        humidity: '29.254',
        light: '461',
        co2: '1198.2',
        humidityRatio: '0.00515047469737527',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:57:59',
        temperature: '23.2',
        humidity: '29.33',
        light: '464',
        co2: '1196.5',
        humidityRatio: '0.00516396638590783',
        occupancy: '1'
      },
      {
        date: '2015-02-03 14:58:59',
        temperature: '23.2',
        humidity: '29.3566666666667',
        light: '464',
        co2: '1203.25',
        humidityRatio: '0.00516870044928234',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:00:00',
        temperature: '23.14',
        humidity: '29.456',
        light: '469',
        co2: '1209',
        humidityRatio: '0.00516740184512806',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:01:00',
        temperature: '23.125',
        humidity: '29.4725',
        light: '469',
        co2: '1212.25',
        humidityRatio: '0.00516559391429917',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:02:00',
        temperature: '23.1',
        humidity: '29.5',
        light: '463',
        co2: '1219.6',
        humidityRatio: '0.00516257728412937',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:03:00',
        temperature: '23.1',
        humidity: '29.55',
        light: '465.25',
        co2: '1218.75',
        humidityRatio: '0.00517140016500502',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:04:00',
        temperature: '23.1',
        humidity: '29.6',
        light: '466',
        co2: '1221.6',
        humidityRatio: '0.00518022329412355',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:04:59',
        temperature: '23.1',
        humidity: '29.62',
        light: '469',
        co2: '1219.8',
        humidityRatio: '0.00518375261528132',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:06:00',
        temperature: '23.1',
        humidity: '29.7',
        light: '466.5',
        co2: '1224.66666666667',
        humidityRatio: '0.00519787029713117',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:07:00',
        temperature: '23.1',
        humidity: '29.745',
        light: '469',
        co2: '1233.75',
        humidityRatio: '0.00520581177247756',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:08:00',
        temperature: '23.1',
        humidity: '29.84',
        light: '469',
        co2: '1235.75',
        humidityRatio: '0.00522257776976399',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:08:59',
        temperature: '23.1',
        humidity: '29.84',
        light: '469',
        co2: '1239.5',
        humidityRatio: '0.00522257776976399',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:10:00',
        temperature: '23.0857142857143',
        humidity: '29.89',
        light: '465.666666666667',
        co2: '1245',
        humidityRatio: '0.0052268457571293',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:10:59',
        temperature: '23.0666666666667',
        humidity: '29.8566666666667',
        light: '464',
        co2: '1247.25',
        humidityRatio: '0.00521490474145376',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:11:59',
        temperature: '23.025',
        humidity: '29.9175',
        light: '469',
        co2: '1246',
        humidityRatio: '0.00521235062737091',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:13:00',
        temperature: '23.0166666666667',
        humidity: '29.9633333333333',
        light: '462.333333333333',
        co2: '1245.16666666667',
        humidityRatio: '0.00521774860124666',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:14:00',
        temperature: '23',
        humidity: '30',
        light: '465',
        co2: '1254.6',
        humidityRatio: '0.00521887561724853',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:15:00',
        temperature: '23',
        humidity: '30',
        light: '461',
        co2: '1261.2',
        humidityRatio: '0.00521887561724853',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:16:00',
        temperature: '23',
        humidity: '30',
        light: '464',
        co2: '1261',
        humidityRatio: '0.00521887561724853',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:16:59',
        temperature: '23',
        humidity: '30.0166666666667',
        light: '462.333333333333',
        co2: '1263.66666666667',
        humidityRatio: '0.0052217993333571',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:17:59',
        temperature: '23',
        humidity: '30.06',
        light: '461',
        co2: '1270.2',
        humidityRatio: '0.00522940112280461',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:19:00',
        temperature: '23',
        humidity: '30.075',
        light: '464',
        co2: '1273.25',
        humidityRatio: '0.00523203255439104',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:20:00',
        temperature: '23',
        humidity: '30.12',
        light: '461',
        co2: '1280.2',
        humidityRatio: '0.00523992698162853',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:21:00',
        temperature: '23',
        humidity: '30.15',
        light: '469',
        co2: '1284.5',
        humidityRatio: '0.00524519004352148',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:22:00',
        temperature: '23',
        humidity: '30.23',
        light: '462.333333333333',
        co2: '1285.16666666667',
        humidityRatio: '0.00525922530704646',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:23:00',
        temperature: '23',
        humidity: '30.29',
        light: '462.333333333333',
        co2: '1290.66666666667',
        humidityRatio: '0.00526975216689249',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:23:59',
        temperature: '22.9685714285714',
        humidity: '30.3042857142857',
        light: '460.428571428571',
        co2: '1294.57142857143',
        humidityRatio: '0.0052621521240719',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:24:59',
        temperature: '22.9175',
        humidity: '30.29',
        light: '464',
        co2: '1294',
        humidityRatio: '0.0052432718125789',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:26:00',
        temperature: '22.912',
        humidity: '30.29',
        light: '461',
        co2: '1301',
        humidityRatio: '0.00524151064064436',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:27:00',
        temperature: '22.9083333333333',
        humidity: '30.3066666666667',
        light: '462.333333333333',
        co2: '1313.16666666667',
        humidityRatio: '0.00524324454762937',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:28:00',
        temperature: '22.89',
        humidity: '30.34',
        light: '464',
        co2: '1312.75',
        humidityRatio: '0.00524318460448223',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:29:00',
        temperature: '22.945',
        humidity: '30.39',
        light: '469',
        co2: '1311.5',
        humidityRatio: '0.00526957174907314',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:29:59',
        temperature: '22.9266666666667',
        humidity: '30.3733333333333',
        light: '469',
        co2: '1317.6',
        humidityRatio: '0.00526076361340516',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:30:59',
        temperature: '22.9633333333333',
        humidity: '30.39',
        light: '469',
        co2: '1327.5',
        humidityRatio: '0.0052754745659686',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:32:00',
        temperature: '22.9371428571429',
        humidity: '30.3914285714286',
        light: '469',
        co2: '1330.28571428571',
        humidityRatio: '0.00526729344587457',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:33:00',
        temperature: '22.934',
        humidity: '30.456',
        light: '466',
        co2: '1330',
        humidityRatio: '0.00527756649320545',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:34:00',
        temperature: '22.9175',
        humidity: '30.5',
        light: '465.25',
        co2: '1328.75',
        humidityRatio: '0.00527993189209704',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:35:00',
        temperature: '22.9371428571429',
        humidity: '30.4057142857143',
        light: '456.142857142857',
        co2: '1330',
        humidityRatio: '0.00526979035275781',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:36:00',
        temperature: '22.956',
        humidity: '30.412',
        light: '454',
        co2: '1321.8',
        humidityRatio: '0.00527696244872235',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:36:59',
        temperature: '22.89',
        humidity: '30.445',
        light: '454',
        co2: '1321.5',
        humidityRatio: '0.00526148359397035',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:38:00',
        temperature: '22.934',
        humidity: '30.6',
        light: '454',
        co2: '1331.6',
        humidityRatio: '0.00530273225818885',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:39:00',
        temperature: '22.9083333333333',
        humidity: '30.6',
        light: '454',
        co2: '1336.83333333333',
        humidityRatio: '0.00529442503322916',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:40:00',
        temperature: '22.89',
        humidity: '30.68',
        light: '454',
        co2: '1340',
        humidityRatio: '0.00530244234434886',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:40:59',
        temperature: '22.945',
        humidity: '30.7',
        light: '454',
        co2: '1350.75',
        humidityRatio: '0.00532378527896655',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:42:00',
        temperature: '22.89',
        humidity: '30.675',
        light: '454',
        co2: '1356',
        humidityRatio: '0.00530157082588112',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:42:59',
        temperature: '22.89',
        humidity: '30.675',
        light: '454',
        co2: '1351.75',
        humidityRatio: '0.00530157082588112',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:43:59',
        temperature: '22.89',
        humidity: '30.745',
        light: '454',
        co2: '1360.16666666667',
        humidityRatio: '0.00531377230480128',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:45:00',
        temperature: '22.89',
        humidity: '30.79',
        light: '454',
        co2: '1364.2',
        humidityRatio: '0.00532161636332885',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:46:00',
        temperature: '22.89',
        humidity: '30.754',
        light: '454',
        co2: '1363.2',
        humidityRatio: '0.00531534110081356',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:47:00',
        temperature: '22.89',
        humidity: '30.79',
        light: '454',
        co2: '1363.16666666667',
        humidityRatio: '0.00532161636332885',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:48:00',
        temperature: '22.89',
        humidity: '30.79',
        light: '454',
        co2: '1367',
        humidityRatio: '0.00532161636332885',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:49:00',
        temperature: '22.89',
        humidity: '30.79',
        light: '454',
        co2: '1368.5',
        humidityRatio: '0.00532161636332885',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:49:59',
        temperature: '22.912',
        humidity: '30.79',
        light: '454',
        co2: '1365.8',
        humidityRatio: '0.00532877401973244',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:51:00',
        temperature: '22.89',
        humidity: '30.89',
        light: '454',
        co2: '1361.6',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:52:00',
        temperature: '22.89',
        humidity: '30.865',
        light: '465.25',
        co2: '1372',
        humidityRatio: '0.00533469023014476',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:53:00',
        temperature: '22.89',
        humidity: '30.89',
        light: '465.25',
        co2: '1385.25',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:53:59',
        temperature: '22.89',
        humidity: '30.89',
        light: '469',
        co2: '1386.4',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:55:00',
        temperature: '22.89',
        humidity: '30.89',
        light: '469',
        co2: '1393.16666666667',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:55:59',
        temperature: '22.89',
        humidity: '30.85',
        light: '469',
        co2: '1393',
        humidityRatio: '0.00533207541318664',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:56:59',
        temperature: '22.89',
        humidity: '30.79',
        light: '460',
        co2: '1389',
        humidityRatio: '0.00532161636332885',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:58:00',
        temperature: '22.89',
        humidity: '30.79',
        light: '454',
        co2: '1385.2',
        humidityRatio: '0.00532161636332885',
        occupancy: '1'
      },
      {
        date: '2015-02-03 15:59:00',
        temperature: '22.89',
        humidity: '30.8566666666667',
        light: '454',
        co2: '1377.33333333333',
        humidityRatio: '0.00533323755136582',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:00:00',
        temperature: '22.89',
        humidity: '30.8566666666667',
        light: '454',
        co2: '1383.83333333333',
        humidityRatio: '0.00533323755136582',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:01:00',
        temperature: '22.89',
        humidity: '30.83',
        light: '442',
        co2: '1388.6',
        humidityRatio: '0.00532858902448337',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:01:59',
        temperature: '22.89',
        humidity: '30.865',
        light: '449.5',
        co2: '1377.5',
        humidityRatio: '0.00533469023014476',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:02:59',
        temperature: '22.89',
        humidity: '30.89',
        light: '451.6',
        co2: '1374',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:04:00',
        temperature: '22.89',
        humidity: '30.89',
        light: '451.6',
        co2: '1377.6',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:05:00',
        temperature: '22.89',
        humidity: '30.89',
        light: '456.8',
        co2: '1373',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:06:00',
        temperature: '22.865',
        humidity: '30.84',
        light: '444',
        co2: '1372.25',
        humidityRatio: '0.00532219540359315',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:07:00',
        temperature: '22.89',
        humidity: '30.89',
        light: '444',
        co2: '1376',
        humidityRatio: '0.00533904830684845',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:08:00',
        temperature: '22.84',
        humidity: '30.84',
        light: '444',
        co2: '1361.75',
        humidityRatio: '0.0053140695648421',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:08:59',
        temperature: '22.79',
        humidity: '30.81',
        light: '444',
        co2: '1356.6',
        humidityRatio: '0.00529265334760105',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:09:59',
        temperature: '22.79',
        humidity: '30.84',
        light: '444',
        co2: '1363',
        humidityRatio: '0.00529785075094191',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:11:00',
        temperature: '22.79',
        humidity: '30.83',
        light: '444',
        co2: '1363.8',
        humidityRatio: '0.00529611827359213',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:12:00',
        temperature: '22.79',
        humidity: '30.89',
        light: '444',
        co2: '1363.5',
        humidityRatio: '0.00530651328123638',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:13:00',
        temperature: '22.79',
        humidity: '30.89',
        light: '444',
        co2: '1369.33333333333',
        humidityRatio: '0.00530651328123638',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:14:00',
        temperature: '22.79',
        humidity: '30.9175',
        light: '444',
        co2: '1366.25',
        humidityRatio: '0.00531127777487795',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:14:59',
        temperature: '22.79',
        humidity: '30.89',
        light: '444',
        co2: '1372.57142857143',
        humidityRatio: '0.00530651328123638',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:15:59',
        temperature: '22.79',
        humidity: '30.89',
        light: '444',
        co2: '1361.66666666667',
        humidityRatio: '0.00530651328123638',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:17:00',
        temperature: '22.79',
        humidity: '30.89',
        light: '444',
        co2: '1367.25',
        humidityRatio: '0.00530651328123638',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:18:00',
        temperature: '22.79',
        humidity: '30.89',
        light: '444',
        co2: '1359',
        humidityRatio: '0.00530651328123638',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:19:00',
        temperature: '22.79',
        humidity: '30.934',
        light: '444',
        co2: '1363.8',
        humidityRatio: '0.00531413650580267',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:20:00',
        temperature: '22.79',
        humidity: '30.89',
        light: '444',
        co2: '1353.75',
        humidityRatio: '0.00530651328123638',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:21:00',
        temperature: '22.79',
        humidity: '31',
        light: '444',
        co2: '1356.33333333333',
        humidityRatio: '0.00532557169005772',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:21:59',
        temperature: '22.79',
        humidity: '31',
        light: '444',
        co2: '1363.8',
        humidityRatio: '0.00532557169005772',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:23:00',
        temperature: '22.772',
        humidity: '31.02',
        light: '444',
        co2: '1364',
        humidityRatio: '0.00532317431933842',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:24:00',
        temperature: '22.79',
        humidity: '31.05',
        light: '444',
        co2: '1373.33333333333',
        humidityRatio: '0.00533423498598668',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:25:00',
        temperature: '22.7675',
        humidity: '31.125',
        light: '440.25',
        co2: '1374.25',
        humidityRatio: '0.00533987771455223',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:25:59',
        temperature: '22.79',
        humidity: '31.0833333333333',
        light: '444',
        co2: '1369',
        humidityRatio: '0.0053400106495396',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:27:00',
        temperature: '22.79',
        humidity: '31.075',
        light: '444.75',
        co2: '1360.75',
        humidityRatio: '0.00533856672368114',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:27:59',
        temperature: '22.79',
        humidity: '31.1142857142857',
        light: '441.285714285714',
        co2: '1359.5',
        humidityRatio: '0.00534537386092276',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:28:59',
        temperature: '22.745',
        humidity: '31.15',
        light: '447',
        co2: '1366.33333333333',
        humidityRatio: '0.00533685389183532',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:30:00',
        temperature: '22.772',
        humidity: '31.2',
        light: '439.8',
        co2: '1377',
        humidityRatio: '0.00535432904378901',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:31:00',
        temperature: '22.79',
        humidity: '31.2',
        light: '441',
        co2: '1379.5',
        humidityRatio: '0.00536022630950282',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:32:00',
        temperature: '22.745',
        humidity: '31.2',
        light: '442.5',
        co2: '1379.25',
        humidityRatio: '0.00534549389028849',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:33:00',
        temperature: '22.7225',
        humidity: '31.2',
        light: '442.5',
        co2: '1381.5',
        humidityRatio: '0.00533814110163399',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:34:00',
        temperature: '22.745',
        humidity: '31.29',
        light: '438',
        co2: '1381',
        humidityRatio: '0.00536104648725084',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:34:59',
        temperature: '22.73',
        humidity: '31.1666666666667',
        light: '441',
        co2: '1374',
        humidityRatio: '0.00533483634054531',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:36:00',
        temperature: '22.73',
        humidity: '31.2133333333333',
        light: '441',
        co2: '1372.5',
        humidityRatio: '0.00534289294650604',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:37:00',
        temperature: '22.7',
        humidity: '31.1',
        light: '442.5',
        co2: '1369.75',
        humidityRatio: '0.0053135653993026',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:38:00',
        temperature: '22.7',
        humidity: '31.12',
        light: '443.4',
        co2: '1368.6',
        humidityRatio: '0.00531701169324883',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:38:59',
        temperature: '22.715',
        humidity: '31.2',
        light: '441',
        co2: '1368.33333333333',
        humidityRatio: '0.00533569215804204',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:40:00',
        temperature: '22.7',
        humidity: '31.1666666666667',
        light: '441',
        co2: '1365.33333333333',
        humidityRatio: '0.00532505319304875',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:40:59',
        temperature: '22.715',
        humidity: '31.2',
        light: '441',
        co2: '1370.5',
        humidityRatio: '0.00533569215804204',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:41:59',
        temperature: '22.715',
        humidity: '31.2',
        light: '441',
        co2: '1366.33333333333',
        humidityRatio: '0.00533569215804204',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:43:00',
        temperature: '22.7',
        humidity: '31.2',
        light: '442.5',
        co2: '1373.5',
        humidityRatio: '0.0053307972477025',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:44:00',
        temperature: '22.745',
        humidity: '31.2225',
        light: '438',
        co2: '1378.5',
        humidityRatio: '0.00534938196723674',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:45:00',
        temperature: '22.7',
        humidity: '31.272',
        light: '441',
        co2: '1377.16666666667',
        humidityRatio: '0.00534320476475416',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:46:00',
        temperature: '22.7',
        humidity: '31.245',
        light: '447',
        co2: '1401.16666666667',
        humidityRatio: '0.00533855188834477',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:46:59',
        temperature: '22.7',
        humidity: '31.2675',
        light: '442.5',
        co2: '1395.33333333333',
        humidityRatio: '0.00534242928055959',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:47:59',
        temperature: '22.7',
        humidity: '31.29',
        light: '447',
        co2: '1401',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:49:00',
        temperature: '22.7',
        humidity: '31.29',
        light: '444',
        co2: '1400.5',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:50:00',
        temperature: '22.7',
        humidity: '31.29',
        light: '447',
        co2: '1394',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:51:00',
        temperature: '22.7',
        humidity: '31.29',
        light: '447',
        co2: '1394.6',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:52:00',
        temperature: '22.7',
        humidity: '31.29',
        light: '447',
        co2: '1389.66666666667',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:53:00',
        temperature: '22.7',
        humidity: '31.29',
        light: '447',
        co2: '1377.2',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:53:59',
        temperature: '22.7',
        humidity: '31.29',
        light: '447',
        co2: '1387',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:54:59',
        temperature: '22.7',
        humidity: '31.3757142857143',
        light: '439',
        co2: '1393.42857142857',
        humidityRatio: '0.00536107836036269',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:56:00',
        temperature: '22.7',
        humidity: '31.39',
        light: '447',
        co2: '1393.75',
        humidityRatio: '0.00536354036793693',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:57:00',
        temperature: '22.7',
        humidity: '31.39',
        light: '441.4',
        co2: '1392.6',
        humidityRatio: '0.00536354036793693',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:58:00',
        temperature: '22.7',
        humidity: '31.37',
        light: '438.6',
        co2: '1394.2',
        humidityRatio: '0.00536009356274362',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:59:00',
        temperature: '22.7',
        humidity: '31.4175',
        light: '440',
        co2: '1396.25',
        humidityRatio: '0.0053682797869201',
        occupancy: '1'
      },
      {
        date: '2015-02-03 16:59:59',
        temperature: '22.7',
        humidity: '31.39',
        light: '443.5',
        co2: '1390.5',
        humidityRatio: '0.00536354036793693',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:00:59',
        temperature: '22.7225',
        humidity: '31.365',
        light: '436.5',
        co2: '1397.5',
        humidityRatio: '0.00536661522872093',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:02:00',
        temperature: '22.7',
        humidity: '31.4175',
        light: '433',
        co2: '1398.25',
        humidityRatio: '0.0053682797869201',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:03:00',
        temperature: '22.7',
        humidity: '31.4725',
        light: '433',
        co2: '1402.25',
        humidityRatio: '0.00537775883971339',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:04:00',
        temperature: '22.7',
        humidity: '31.3785714285714',
        light: '433',
        co2: '1398',
        humidityRatio: '0.00536157076033165',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:05:00',
        temperature: '22.7',
        humidity: '31.29',
        light: '433',
        co2: '1384.25',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:06:00',
        temperature: '22.7',
        humidity: '31.29',
        light: '433',
        co2: '1387.33333333333',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:06:59',
        temperature: '22.7',
        humidity: '31.29',
        light: '433',
        co2: '1392.5',
        humidityRatio: '0.00534630672070471',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:08:00',
        temperature: '22.7',
        humidity: '31.236',
        light: '433',
        co2: '1384.8',
        humidityRatio: '0.00533700094487913',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:09:00',
        temperature: '22.7225',
        humidity: '31.315',
        light: '433',
        co2: '1388',
        humidityRatio: '0.00535798643240495',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:10:00',
        temperature: '22.7',
        humidity: '31.27',
        light: '433',
        co2: '1384.6',
        humidityRatio: '0.00534286010487543',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:10:59',
        temperature: '22.7',
        humidity: '31.275',
        light: '433',
        co2: '1373.33333333333',
        humidityRatio: '0.00534372175528233',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:12:00',
        temperature: '22.7',
        humidity: '31.18',
        light: '433',
        co2: '1368.8',
        humidityRatio: '0.00532735080228751',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:12:59',
        temperature: '22.7',
        humidity: '31.2',
        light: '433',
        co2: '1364',
        humidityRatio: '0.0053307972477025',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:13:59',
        temperature: '22.7',
        humidity: '31.15',
        light: '433',
        co2: '1357.5',
        humidityRatio: '0.00532218120516758',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:15:00',
        temperature: '22.7',
        humidity: '31.2',
        light: '433',
        co2: '1352',
        humidityRatio: '0.0053307972477025',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:16:00',
        temperature: '22.7',
        humidity: '31.2',
        light: '433',
        co2: '1357',
        humidityRatio: '0.0053307972477025',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:17:00',
        temperature: '22.7',
        humidity: '31.1',
        light: '433',
        co2: '1361.75',
        humidityRatio: '0.0053135653993026',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:18:00',
        temperature: '22.7',
        humidity: '31.1',
        light: '433',
        co2: '1356',
        humidityRatio: '0.0053135653993026',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:19:00',
        temperature: '22.7',
        humidity: '31.1',
        light: '433',
        co2: '1344.25',
        humidityRatio: '0.0053135653993026',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:19:59',
        temperature: '22.7',
        humidity: '31.05',
        light: '433',
        co2: '1357.75',
        humidityRatio: '0.00530494983009781',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:21:00',
        temperature: '22.7',
        humidity: '31.1',
        light: '433',
        co2: '1355.75',
        humidityRatio: '0.0053135653993026',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:22:00',
        temperature: '22.7',
        humidity: '31.1',
        light: '433',
        co2: '1354.66666666667',
        humidityRatio: '0.0053135653993026',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:23:00',
        temperature: '22.7',
        humidity: '31.0166666666667',
        light: '433',
        co2: '1343.33333333333',
        humidityRatio: '0.00529920624876767',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:23:59',
        temperature: '22.7',
        humidity: '31.05',
        light: '433',
        co2: '1334.16666666667',
        humidityRatio: '0.00530494983009781',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:25:00',
        temperature: '22.7225',
        humidity: '30.9725',
        light: '433',
        co2: '1340.25',
        humidityRatio: '0.00529888555878151',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:25:59',
        temperature: '22.736',
        humidity: '30.934',
        light: '433',
        co2: '1336.8',
        humidityRatio: '0.00529661515620911',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:26:59',
        temperature: '22.7675',
        humidity: '31',
        light: '433',
        co2: '1335.75',
        humidityRatio: '0.0053182490601398',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:28:00',
        temperature: '22.73',
        humidity: '31',
        light: '433',
        co2: '1342.33333333333',
        humidityRatio: '0.00530606443699799',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:29:00',
        temperature: '22.718',
        humidity: '31',
        light: '433',
        co2: '1348.8',
        humidityRatio: '0.00530217056838159',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:30:00',
        temperature: '22.7',
        humidity: '31',
        light: '433',
        co2: '1353.25',
        humidityRatio: '0.00529633449754344',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:31:00',
        temperature: '22.7',
        humidity: '30.912',
        light: '433',
        co2: '1339',
        humidityRatio: '0.00528117208699465',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:31:59',
        temperature: '22.7',
        humidity: '30.945',
        light: '433',
        co2: '1338.25',
        humidityRatio: '0.00528685790505325',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:32:59',
        temperature: '22.7',
        humidity: '30.956',
        light: '433',
        co2: '1347.6',
        humidityRatio: '0.0052887532006451',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:34:00',
        temperature: '22.7',
        humidity: '30.9725',
        light: '433',
        co2: '1338.75',
        humidityRatio: '0.00529159616550726',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:35:00',
        temperature: '22.7',
        humidity: '30.89',
        light: '433',
        co2: '1318',
        humidityRatio: '0.00527738159888531',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:36:00',
        temperature: '22.7',
        humidity: '30.8733333333333',
        light: '433',
        co2: '1311.16666666667',
        humidityRatio: '0.00527451004748194',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:37:00',
        temperature: '22.66',
        humidity: '30.83',
        light: '433',
        co2: '1306.5',
        humidityRatio: '0.00525416760909382',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:38:00',
        temperature: '22.68',
        humidity: '30.87',
        light: '433',
        co2: '1316.66666666667',
        humidityRatio: '0.0052674854976067',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:38:59',
        temperature: '22.7',
        humidity: '30.89',
        light: '433',
        co2: '1306.33333333333',
        humidityRatio: '0.00527738159888531',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:39:59',
        temperature: '22.7',
        humidity: '30.79',
        light: '429.5',
        co2: '1300.5',
        humidityRatio: '0.0052601526848178',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:41:00',
        temperature: '22.675',
        humidity: '30.7225',
        light: '433',
        co2: '1298.66666666667',
        humidityRatio: '0.00524050115769863',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:42:00',
        temperature: '22.675',
        humidity: '30.745',
        light: '424.6',
        co2: '1298.2',
        humidityRatio: '0.00524437146255304',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:43:00',
        temperature: '22.7',
        humidity: '30.7675',
        light: '426',
        co2: '1292.5',
        humidityRatio: '0.00525627630958099',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:44:00',
        temperature: '22.675',
        humidity: '30.7225',
        light: '426',
        co2: '1288.5',
        humidityRatio: '0.00524050115769863',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:44:59',
        temperature: '22.7',
        humidity: '30.7',
        light: '433',
        co2: '1299.66666666667',
        humidityRatio: '0.00524464747133036',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:45:59',
        temperature: '22.65',
        humidity: '30.65',
        light: '423.666666666667',
        co2: '1285.33333333333',
        humidityRatio: '0.00522003801051811',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:47:00',
        temperature: '22.7',
        humidity: '30.675',
        light: '426',
        co2: '1286',
        humidityRatio: '0.00524034060362104',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:48:00',
        temperature: '22.6',
        humidity: '30.5833333333333',
        light: '419',
        co2: '1284.33333333333',
        humidityRatio: '0.00519267151632743',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:49:00',
        temperature: '22.6',
        humidity: '30.575',
        light: '422.5',
        co2: '1275.25',
        humidityRatio: '0.00519124481065258',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:50:00',
        temperature: '22.6',
        humidity: '30.6',
        light: '419',
        co2: '1273.8',
        humidityRatio: '0.00519552494714966',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:51:00',
        temperature: '22.6',
        humidity: '30.6',
        light: '419',
        co2: '1271.8',
        humidityRatio: '0.00519552494714966',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:51:59',
        temperature: '22.6',
        humidity: '30.55',
        light: '419',
        co2: '1273.33333333333',
        humidityRatio: '0.00518696473257251',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:53:00',
        temperature: '22.6',
        humidity: '30.58',
        light: '419',
        co2: '1261.75',
        humidityRatio: '0.00519210083327859',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:54:00',
        temperature: '22.6',
        humidity: '30.5666666666667',
        light: '419',
        co2: '1258.5',
        humidityRatio: '0.0051898181114685',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:55:00',
        temperature: '22.6',
        humidity: '30.4725',
        light: '419',
        co2: '1251.5',
        humidityRatio: '0.00517369686175147',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:55:59',
        temperature: '22.6',
        humidity: '30.445',
        light: '419',
        co2: '1241.33333333333',
        humidityRatio: '0.00516898904252297',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:57:00',
        temperature: '22.6',
        humidity: '30.4725',
        light: '419',
        co2: '1238.75',
        humidityRatio: '0.00517369686175147',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:57:59',
        temperature: '22.6',
        humidity: '30.37',
        light: '419',
        co2: '1246.8',
        humidityRatio: '0.00515614989475787',
        occupancy: '1'
      },
      {
        date: '2015-02-03 17:58:59',
        temperature: '22.6',
        humidity: '30.315',
        light: '419',
        co2: '1240.75',
        humidityRatio: '0.00514673485382115',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:00:00',
        temperature: '22.6',
        humidity: '30.365',
        light: '419',
        co2: '1240.25',
        humidityRatio: '0.00515529397026419',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:01:00',
        temperature: '22.6',
        humidity: '30.275',
        light: '426',
        co2: '1239',
        humidityRatio: '0.00513988772887235',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:02:00',
        temperature: '22.6',
        humidity: '30.245',
        light: '422.5',
        co2: '1235.25',
        humidityRatio: '0.00513475248327749',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:03:00',
        temperature: '22.6',
        humidity: '30.254',
        light: '424.6',
        co2: '1229.8',
        humidityRatio: '0.00513629304812559',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:04:00',
        temperature: '22.6',
        humidity: '30.18',
        light: '419',
        co2: '1220.6',
        humidityRatio: '0.00512362640632125',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:04:59',
        temperature: '22.6',
        humidity: '30.1666666666667',
        light: '419',
        co2: '1214.16666666667',
        humidityRatio: '0.00512134418292066',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:06:00',
        temperature: '22.6',
        humidity: '30.1',
        light: '419',
        co2: '1214',
        humidityRatio: '0.00510993331507665',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:07:00',
        temperature: '22.6',
        humidity: '30.14',
        light: '419',
        co2: '1217.8',
        humidityRatio: '0.00511677978595181',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:08:00',
        temperature: '22.6',
        humidity: '30.1',
        light: '419',
        co2: '1211.8',
        humidityRatio: '0.00510993331507665',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:08:59',
        temperature: '22.6',
        humidity: '30.1',
        light: '419',
        co2: '1217.2',
        humidityRatio: '0.00510993331507665',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:10:00',
        temperature: '22.6',
        humidity: '30.1',
        light: '415.5',
        co2: '1211.5',
        humidityRatio: '0.00510993331507665',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:10:59',
        temperature: '22.6',
        humidity: '30.1816666666667',
        light: '419',
        co2: '1207.33333333333',
        humidityRatio: '0.00512391168541428',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:11:59',
        temperature: '22.6',
        humidity: '30.1',
        light: '419',
        co2: '1204.75',
        humidityRatio: '0.00510993331507665',
        occupancy: '1'
      },
      {
        date: '2015-02-03 18:13:00',
        temperature: '22.6',
        humidity: '30.1225',
        light: '0',
        co2: '1205.25',
        humidityRatio: '0.00511378443654941',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:14:00',
        temperature: '22.575',
        humidity: '30.05',
        light: '0',
        co2: '1204.75',
        humidityRatio: '0.00509357366672771',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:15:00',
        temperature: '22.5',
        humidity: '30.1',
        light: '0',
        co2: '1196.66666666667',
        humidityRatio: '0.00507873673636185',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:16:00',
        temperature: '22.5',
        humidity: '30.1',
        light: '0',
        co2: '1191.5',
        humidityRatio: '0.00507873673636185',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:16:59',
        temperature: '22.5',
        humidity: '30.1',
        light: '0',
        co2: '1184',
        humidityRatio: '0.00507873673636185',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:17:59',
        temperature: '22.445',
        humidity: '30.1',
        light: '0',
        co2: '1189.25',
        humidityRatio: '0.00506165039923841',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:19:00',
        temperature: '22.39',
        humidity: '30.075',
        light: '0',
        co2: '1186.5',
        humidityRatio: '0.00504039100441317',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:20:00',
        temperature: '22.39',
        humidity: '30.1',
        light: '0',
        co2: '1180.75',
        humidityRatio: '0.0050446148366279',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:21:00',
        temperature: '22.39',
        humidity: '30.05',
        light: '0',
        co2: '1172.5',
        humidityRatio: '0.00503616722910233',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:22:00',
        temperature: '22.365',
        humidity: '30.075',
        light: '0',
        co2: '1164',
        humidityRatio: '0.00503267083787181',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:23:00',
        temperature: '22.3566666666667',
        humidity: '30.1',
        light: '0',
        co2: '1160.66666666667',
        humidityRatio: '0.0050343149090972',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:23:59',
        temperature: '22.29',
        humidity: '30',
        light: '0',
        co2: '1143.25',
        humidityRatio: '0.00499697987960895',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:24:59',
        temperature: '22.2675',
        humidity: '29.945',
        light: '0',
        co2: '1139.5',
        humidityRatio: '0.0049808645484254',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:26:00',
        temperature: '22.245',
        humidity: '29.9725',
        light: '0',
        co2: '1138.25',
        humidityRatio: '0.00497859662034063',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:27:00',
        temperature: '22.2',
        humidity: '29.815',
        light: '0',
        co2: '1135.5',
        humidityRatio: '0.00493856761746771',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:28:00',
        temperature: '22.2',
        humidity: '29.84',
        light: '0',
        co2: '1124.75',
        humidityRatio: '0.0049427415333592',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:29:00',
        temperature: '22.2',
        humidity: '29.8566666666667',
        light: '0',
        co2: '1119.33333333333',
        humidityRatio: '0.00494552417482958',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:29:59',
        temperature: '22.125',
        humidity: '29.79',
        light: '0',
        co2: '1110.25',
        humidityRatio: '0.00491172182783557',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:30:59',
        temperature: '22.1',
        humidity: '29.79',
        light: '0',
        co2: '1105.5',
        humidityRatio: '0.0049041849823736',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:32:00',
        temperature: '22.1',
        humidity: '29.745',
        light: '0',
        co2: '1096.75',
        humidityRatio: '0.00489671852714075',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:33:00',
        temperature: '22.1',
        humidity: '29.7',
        light: '0',
        co2: '1092.25',
        humidityRatio: '0.00488925224975737',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:34:00',
        temperature: '22.1',
        humidity: '29.6',
        light: '0',
        co2: '1092.5',
        humidityRatio: '0.00487266115895176',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:35:00',
        temperature: '22.025',
        humidity: '29.525',
        light: '0',
        co2: '1085.75',
        humidityRatio: '0.00483787282281954',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:36:00',
        temperature: '22',
        humidity: '29.4633333333333',
        light: '0',
        co2: '1074.33333333333',
        humidityRatio: '0.00482027729718789',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:36:59',
        temperature: '22',
        humidity: '29.39',
        light: '0',
        co2: '1066',
        humidityRatio: '0.0048081870314844',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:38:00',
        temperature: '22',
        humidity: '29.39',
        light: '0',
        co2: '1058.5',
        humidityRatio: '0.0048081870314844',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:39:00',
        temperature: '21.9175',
        humidity: '29.29',
        light: '0',
        co2: '1050.75',
        humidityRatio: '0.00476745642321002',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:40:00',
        temperature: '21.89',
        humidity: '29.2675',
        light: '0',
        co2: '1044',
        humidityRatio: '0.00475571494671863',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:40:59',
        temperature: '21.9633333333333',
        humidity: '29.2',
        light: '0',
        co2: '1039',
        humidityRatio: '0.00476610928505314',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:42:00',
        temperature: '21.89',
        humidity: '29.2',
        light: '0',
        co2: '1030.5',
        humidityRatio: '0.00474466311607751',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:42:59',
        temperature: '21.89',
        humidity: '29.2',
        light: '0',
        co2: '1030.8',
        humidityRatio: '0.00474466311607751',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:43:59',
        temperature: '21.89',
        humidity: '29.2',
        light: '0',
        co2: '1032.33333333333',
        humidityRatio: '0.00474466311607751',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:45:00',
        temperature: '21.89',
        humidity: '29.16',
        light: '0',
        co2: '1021.2',
        humidityRatio: '0.00473811406702397',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:46:00',
        temperature: '21.89',
        humidity: '29.2',
        light: '0',
        co2: '1018.66666666667',
        humidityRatio: '0.00474466311607751',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:47:00',
        temperature: '21.89',
        humidity: '29.2',
        light: '0',
        co2: '1008.75',
        humidityRatio: '0.00474466311607751',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:48:00',
        temperature: '21.79',
        humidity: '29',
        light: '0',
        co2: '1003.25',
        humidityRatio: '0.00468301413344449',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:49:00',
        temperature: '21.81',
        humidity: '29',
        light: '0',
        co2: '989.8',
        humidityRatio: '0.00468878260131167',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:49:59',
        temperature: '21.815',
        humidity: '29',
        light: '0',
        co2: '992',
        humidityRatio: '0.0046902256978545',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:51:00',
        temperature: '21.79',
        humidity: '28.9725',
        light: '0',
        co2: '985.75',
        humidityRatio: '0.00467853994159167',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:52:00',
        temperature: '21.79',
        humidity: '28.89',
        light: '0',
        co2: '989',
        humidityRatio: '0.00466511774934596',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:53:00',
        temperature: '21.7225',
        humidity: '28.89',
        light: '0',
        co2: '983',
        humidityRatio: '0.00464577016201608',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:53:59',
        temperature: '21.7',
        humidity: '28.89',
        light: '0',
        co2: '976.75',
        humidityRatio: '0.00463933672315574',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:55:00',
        temperature: '21.7',
        humidity: '28.89',
        light: '0',
        co2: '970.333333333333',
        humidityRatio: '0.00463933672315574',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:55:59',
        temperature: '21.7',
        humidity: '28.865',
        light: '0',
        co2: '961.75',
        humidityRatio: '0.00463529214876545',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:56:59',
        temperature: '21.7',
        humidity: '28.865',
        light: '0',
        co2: '958.75',
        humidityRatio: '0.00463529214876545',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:58:00',
        temperature: '21.7',
        humidity: '28.89',
        light: '0',
        co2: '954.666666666667',
        humidityRatio: '0.00463933672315574',
        occupancy: '0'
      },
      {
        date: '2015-02-03 18:59:00',
        temperature: '21.7',
        humidity: '28.79',
        light: '0',
        co2: '950.5',
        humidityRatio: '0.00462315873885162',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:00:00',
        temperature: '21.7',
        humidity: '28.815',
        light: '0',
        co2: '942.75',
        humidityRatio: '0.0046272031566144',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:01:00',
        temperature: '21.675',
        humidity: '28.79',
        light: '0',
        co2: '938.25',
        humidityRatio: '0.00461604477513936',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:01:59',
        temperature: '21.675',
        humidity: '28.7675',
        light: '0',
        co2: '941',
        humidityRatio: '0.00461241048602348',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:02:59',
        temperature: '21.6333333333333',
        humidity: '28.73',
        light: '0',
        co2: '944.333333333333',
        humidityRatio: '0.00459454332333087',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:04:00',
        temperature: '21.6',
        humidity: '28.65',
        light: '0',
        co2: '938',
        humidityRatio: '0.00457225317349586',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:05:00',
        temperature: '21.6',
        humidity: '28.675',
        light: '0',
        co2: '934.5',
        humidityRatio: '0.00457627227719972',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:06:00',
        temperature: '21.6',
        humidity: '28.6333333333333',
        light: '0',
        co2: '936.666666666667',
        humidityRatio: '0.00456957379967104',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:07:00',
        temperature: '21.6',
        humidity: '28.6',
        light: '0',
        co2: '926',
        humidityRatio: '0.00456421512076671',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:08:00',
        temperature: '21.6',
        humidity: '28.6',
        light: '0',
        co2: '920.75',
        humidityRatio: '0.00456421512076671',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:08:59',
        temperature: '21.6',
        humidity: '28.56',
        light: '0',
        co2: '920.2',
        humidityRatio: '0.00455778482707044',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:09:59',
        temperature: '21.6',
        humidity: '28.5',
        light: '0',
        co2: '911.333333333333',
        humidityRatio: '0.00454813963399493',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:11:00',
        temperature: '21.6',
        humidity: '28.5',
        light: '0',
        co2: '905.333333333333',
        humidityRatio: '0.00454813963399493',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:12:00',
        temperature: '21.6',
        humidity: '28.5',
        light: '0',
        co2: '904.2',
        humidityRatio: '0.00454813963399493',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:13:00',
        temperature: '21.6',
        humidity: '28.5',
        light: '0',
        co2: '899.666666666667',
        humidityRatio: '0.00454813963399493',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:14:00',
        temperature: '21.6',
        humidity: '28.478',
        light: '0',
        co2: '898.2',
        humidityRatio: '0.00454460313760389',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:14:59',
        temperature: '21.6',
        humidity: '28.4725',
        light: '0',
        co2: '898.25',
        humidityRatio: '0.00454371901974407',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:15:59',
        temperature: '21.6',
        humidity: '28.39',
        light: '0',
        co2: '895',
        humidityRatio: '0.00453045755125964',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:17:00',
        temperature: '21.6',
        humidity: '28.39',
        light: '0',
        co2: '891.666666666667',
        humidityRatio: '0.00453045755125964',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:18:00',
        temperature: '21.58',
        humidity: '28.35',
        light: '0',
        co2: '887.4',
        humidityRatio: '0.00451845465409197',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:19:00',
        temperature: '21.6',
        humidity: '28.29',
        light: '0',
        co2: '885.333333333333',
        humidityRatio: '0.00451438379662567',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:20:00',
        temperature: '21.56',
        humidity: '28.29',
        light: '0',
        co2: '876.4',
        humidityRatio: '0.00450326718351884',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:21:00',
        temperature: '21.5333333333333',
        humidity: '28.29',
        light: '0',
        co2: '871.333333333333',
        humidityRatio: '0.00449586953536044',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:21:59',
        temperature: '21.5',
        humidity: '28.29',
        light: '0',
        co2: '863.5',
        humidityRatio: '0.00448663755713656',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:23:00',
        temperature: '21.5',
        humidity: '28.2675',
        light: '0',
        co2: '865.25',
        humidityRatio: '0.00448304346261749',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:24:00',
        temperature: '21.5',
        humidity: '28.23',
        light: '0',
        co2: '859.666666666667',
        humidityRatio: '0.00447705339672475',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:25:00',
        temperature: '21.5',
        humidity: '28.26',
        light: '0',
        co2: '858.666666666667',
        humidityRatio: '0.00448184544027511',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:25:59',
        temperature: '21.5',
        humidity: '28.2',
        light: '0',
        co2: '852.25',
        humidityRatio: '0.00447226142648379',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:27:00',
        temperature: '21.5',
        humidity: '28.175',
        light: '0',
        co2: '849.25',
        humidityRatio: '0.00446826817394868',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:27:59',
        temperature: '21.5',
        humidity: '28.1',
        light: '0',
        co2: '849',
        humidityRatio: '0.00445628872178248',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:28:59',
        temperature: '21.5',
        humidity: '28.1',
        light: '0',
        co2: '845',
        humidityRatio: '0.00445628872178248',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:30:00',
        temperature: '21.5',
        humidity: '28.1',
        light: '0',
        co2: '844.5',
        humidityRatio: '0.00445628872178248',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:31:00',
        temperature: '21.5',
        humidity: '28.05',
        light: '0',
        co2: '843.75',
        humidityRatio: '0.0044483026748612',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:32:00',
        temperature: '21.5',
        humidity: '28.075',
        light: '0',
        co2: '842',
        humidityRatio: '0.0044522956728702',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:33:00',
        temperature: '21.5',
        humidity: '28.1',
        light: '0',
        co2: '833.2',
        humidityRatio: '0.00445628872178248',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:34:00',
        temperature: '21.5',
        humidity: '28.0333333333333',
        light: '0',
        co2: '832.666666666667',
        humidityRatio: '0.00444564070446765',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:34:59',
        temperature: '21.4175',
        humidity: '27.945',
        light: '0',
        co2: '825.25',
        humidityRatio: '0.00440903711468536',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:36:00',
        temperature: '21.39',
        humidity: '27.89',
        light: '0',
        co2: '820.333333333333',
        humidityRatio: '0.00439283690920249',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:37:00',
        temperature: '21.4175',
        humidity: '27.9175',
        light: '0',
        co2: '824.5',
        humidityRatio: '0.0044046675624544',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:38:00',
        temperature: '21.39',
        humidity: '27.89',
        light: '0',
        co2: '819.25',
        humidityRatio: '0.00439283690920249',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:38:59',
        temperature: '21.39',
        humidity: '27.89',
        light: '0',
        co2: '820.2',
        humidityRatio: '0.00439283690920249',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:40:00',
        temperature: '21.39',
        humidity: '27.89',
        light: '0',
        co2: '817.666666666667',
        humidityRatio: '0.00439283690920249',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:40:59',
        temperature: '21.365',
        humidity: '27.89',
        light: '0',
        co2: '808',
        humidityRatio: '0.00438606372384652',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:41:59',
        temperature: '21.39',
        humidity: '27.79',
        light: '0',
        co2: '806.666666666667',
        humidityRatio: '0.00437697549281461',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:43:00',
        temperature: '21.39',
        humidity: '27.8566666666667',
        light: '0',
        co2: '804.666666666667',
        humidityRatio: '0.00438754968115165',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:44:00',
        temperature: '21.29',
        humidity: '27.85',
        light: '0',
        co2: '803.8',
        humidityRatio: '0.00435949408340988',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:45:00',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '806',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:46:00',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '801.5',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:46:59',
        temperature: '21.34',
        humidity: '27.79',
        light: '0',
        co2: '802',
        humidityRatio: '0.00436348755838157',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:47:59',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '803.666666666667',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:49:00',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '800',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:50:00',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '795',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:51:00',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '785',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:52:00',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '781',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:53:00',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '782',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:53:59',
        temperature: '21.29',
        humidity: '27.7675',
        light: '0',
        co2: '778',
        humidityRatio: '0.00434648971978134',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:54:59',
        temperature: '21.29',
        humidity: '27.79',
        light: '0',
        co2: '772.5',
        humidityRatio: '0.00435003631085442',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:56:00',
        temperature: '21.245',
        humidity: '27.745',
        light: '0',
        co2: '770.75',
        humidityRatio: '0.00433088816734843',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:57:00',
        temperature: '21.218',
        humidity: '27.718',
        light: '0',
        co2: '769',
        humidityRatio: '0.00431943255623199',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:58:00',
        temperature: '21.23',
        humidity: '27.7',
        light: '0',
        co2: '767',
        humidityRatio: '0.00431980984000691',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:59:00',
        temperature: '21.2',
        humidity: '27.7',
        light: '0',
        co2: '764',
        humidityRatio: '0.00431180931830607',
        occupancy: '0'
      },
      {
        date: '2015-02-03 19:59:59',
        temperature: '21.2',
        humidity: '27.7',
        light: '0',
        co2: '765.25',
        humidityRatio: '0.00431180931830607',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:00:59',
        temperature: '21.2',
        humidity: '27.65',
        light: '0',
        co2: '765',
        humidityRatio: '0.00430397241364211',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:02:00',
        temperature: '21.2',
        humidity: '27.6',
        light: '0',
        co2: '766',
        humidityRatio: '0.00429613570509869',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:03:00',
        temperature: '21.2',
        humidity: '27.6',
        light: '0',
        co2: '758.5',
        humidityRatio: '0.00429613570509869',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:04:00',
        temperature: '21.2',
        humidity: '27.575',
        light: '0',
        co2: '749.75',
        humidityRatio: '0.00429221742436988',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:05:00',
        temperature: '21.2',
        humidity: '27.6',
        light: '0',
        co2: '749',
        humidityRatio: '0.00429613570509869',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:06:00',
        temperature: '21.2',
        humidity: '27.54',
        light: '0',
        co2: '747.8',
        humidityRatio: '0.00428673191371534',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:06:59',
        temperature: '21.2',
        humidity: '27.5',
        light: '0',
        co2: '744',
        humidityRatio: '0.00428046287634404',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:08:00',
        temperature: '21.2',
        humidity: '27.5',
        light: '0',
        co2: '746.4',
        humidityRatio: '0.00428046287634404',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:09:00',
        temperature: '21.2',
        humidity: '27.4725',
        light: '0',
        co2: '750.5',
        humidityRatio: '0.00427615298595305',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:10:00',
        temperature: '21.2',
        humidity: '27.5',
        light: '0',
        co2: '747',
        humidityRatio: '0.00428046287634404',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:10:59',
        temperature: '21.2',
        humidity: '27.4725',
        light: '0',
        co2: '750',
        humidityRatio: '0.00427615298595305',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:12:00',
        temperature: '21.2',
        humidity: '27.365',
        light: '0',
        co2: '742.75',
        humidityRatio: '0.00425930580175908',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:12:59',
        temperature: '21.2',
        humidity: '27.34',
        light: '0',
        co2: '737.75',
        humidityRatio: '0.00425538798185127',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:13:59',
        temperature: '21.2',
        humidity: '27.34',
        light: '0',
        co2: '736.25',
        humidityRatio: '0.00425538798185127',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:15:00',
        temperature: '21.2',
        humidity: '27.29',
        light: '0',
        co2: '738.25',
        humidityRatio: '0.00424755248909092',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:16:00',
        temperature: '21.2',
        humidity: '27.29',
        light: '0',
        co2: '732.333333333333',
        humidityRatio: '0.00424755248909092',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:17:00',
        temperature: '21.2',
        humidity: '27.29',
        light: '0',
        co2: '725.4',
        humidityRatio: '0.00424755248909092',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:18:00',
        temperature: '21.2',
        humidity: '27.2675',
        light: '0',
        co2: '729.25',
        humidityRatio: '0.00424402658131624',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:19:00',
        temperature: '21.2',
        humidity: '27.245',
        light: '0',
        co2: '727',
        humidityRatio: '0.00424050071324457',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:19:59',
        temperature: '21.2',
        humidity: '27.245',
        light: '0',
        co2: '716.75',
        humidityRatio: '0.00424050071324457',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:21:00',
        temperature: '21.2',
        humidity: '27.2',
        light: '0',
        co2: '715.666666666667',
        humidityRatio: '0.00423344909620756',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:22:00',
        temperature: '21.2',
        humidity: '27.2',
        light: '0',
        co2: '712.25',
        humidityRatio: '0.00423344909620756',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:23:00',
        temperature: '21.2',
        humidity: '27.2',
        light: '0',
        co2: '719',
        humidityRatio: '0.00423344909620756',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:23:59',
        temperature: '21.2',
        humidity: '27.15',
        light: '0',
        co2: '714.25',
        humidityRatio: '0.0042256141524178',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:25:00',
        temperature: '21.2',
        humidity: '27.14',
        light: '0',
        co2: '711.4',
        humidityRatio: '0.00422404718718571',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:25:59',
        temperature: '21.2',
        humidity: '27.1',
        light: '0',
        co2: '702.75',
        humidityRatio: '0.00421777940467497',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:26:59',
        temperature: '21.2',
        humidity: '27.1',
        light: '0',
        co2: '701',
        humidityRatio: '0.00421777940467497',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:28:00',
        temperature: '21.2',
        humidity: '27.1',
        light: '0',
        co2: '703.666666666667',
        humidityRatio: '0.00421777940467497',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:29:00',
        temperature: '21.2',
        humidity: '27.025',
        light: '0',
        co2: '707.25',
        humidityRatio: '0.00420602765063266',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:30:00',
        temperature: '21.2',
        humidity: '27',
        light: '0',
        co2: '703.75',
        humidityRatio: '0.00420211049730072',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:31:00',
        temperature: '21.2',
        humidity: '27',
        light: '0',
        co2: '699.5',
        humidityRatio: '0.00420211049730072',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:31:59',
        temperature: '21.2',
        humidity: '27',
        light: '0',
        co2: '697.5',
        humidityRatio: '0.00420211049730072',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:32:59',
        temperature: '21.2',
        humidity: '27',
        light: '0',
        co2: '696.666666666667',
        humidityRatio: '0.00420211049730072',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:34:00',
        temperature: '21.2',
        humidity: '27',
        light: '0',
        co2: '692.75',
        humidityRatio: '0.00420211049730072',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:35:00',
        temperature: '21.2',
        humidity: '27',
        light: '0',
        co2: '692.6',
        humidityRatio: '0.00420211049730072',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:36:00',
        temperature: '21.2',
        humidity: '26.8566666666667',
        light: '0',
        co2: '695.333333333333',
        humidityRatio: '0.00417965309743181',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:37:00',
        temperature: '21.2',
        humidity: '26.89',
        light: '0',
        co2: '690.5',
        humidityRatio: '0.00418487560482166',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:38:00',
        temperature: '21.2',
        humidity: '26.89',
        light: '0',
        co2: '689.5',
        humidityRatio: '0.00418487560482166',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:38:59',
        temperature: '21.2',
        humidity: '26.89',
        light: '0',
        co2: '692.333333333333',
        humidityRatio: '0.00418487560482166',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:39:59',
        temperature: '21.2',
        humidity: '26.815',
        light: '0',
        co2: '691.5',
        humidityRatio: '0.00417312508569661',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:41:00',
        temperature: '21.2',
        humidity: '26.79',
        light: '0',
        co2: '687.6',
        humidityRatio: '0.00416920834398832',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:42:00',
        temperature: '21.1666666666667',
        humidity: '26.79',
        light: '0',
        co2: '682.333333333333',
        humidityRatio: '0.00416062964814346',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:43:00',
        temperature: '21.2',
        humidity: '26.79',
        light: '0',
        co2: '677.666666666667',
        humidityRatio: '0.00416920834398832',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:44:00',
        temperature: '21.16',
        humidity: '26.79',
        light: '0',
        co2: '677.8',
        humidityRatio: '0.00415891577864711',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:44:59',
        temperature: '21.2',
        humidity: '26.79',
        light: '0',
        co2: '684.333333333333',
        humidityRatio: '0.00416920834398832',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:45:59',
        temperature: '21.15',
        humidity: '26.79',
        light: '0',
        co2: '682.5',
        humidityRatio: '0.00415634614203119',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:47:00',
        temperature: '21.175',
        humidity: '26.79',
        light: '0',
        co2: '675',
        humidityRatio: '0.00416277286107906',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:48:00',
        temperature: '21.125',
        humidity: '26.79',
        light: '0',
        co2: '669.25',
        humidityRatio: '0.00414992817653432',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:49:00',
        temperature: '21.2',
        humidity: '26.745',
        light: '0',
        co2: '668.5',
        humidityRatio: '0.00416215833238896',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:50:00',
        temperature: '21.15',
        humidity: '26.7',
        light: '0',
        co2: '671.25',
        humidityRatio: '0.0041422900640776',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:51:00',
        temperature: '21.1',
        humidity: '26.7',
        light: '0',
        co2: '674.333333333333',
        humidityRatio: '0.00412950654185839',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:51:59',
        temperature: '21.125',
        humidity: '26.675',
        light: '0',
        co2: '673',
        humidityRatio: '0.00413199566084617',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:53:00',
        temperature: '21.125',
        humidity: '26.6',
        light: '0',
        co2: '671.5',
        humidityRatio: '0.00412030109528856',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:54:00',
        temperature: '21.125',
        humidity: '26.625',
        light: '0',
        co2: '670.5',
        humidityRatio: '0.00412419923526858',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:55:00',
        temperature: '21.1',
        humidity: '26.625',
        light: '0',
        co2: '669.75',
        humidityRatio: '0.00411783001057564',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:55:59',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '663.5',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:57:00',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '665',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:57:59',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '661.5',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 20:58:59',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '657.75',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:00:00',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '652.75',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:01:00',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '653.25',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:02:00',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '656.75',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:03:00',
        temperature: '21.1',
        humidity: '26.6',
        light: '0',
        co2: '651',
        humidityRatio: '0.00411393793025976',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:04:00',
        temperature: '21.1',
        humidity: '26.575',
        light: '0',
        co2: '648.5',
        humidityRatio: '0.00411004589833156',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:04:59',
        temperature: '21.1',
        humidity: '26.55',
        light: '0',
        co2: '652.25',
        humidityRatio: '0.00410615391479014',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:06:00',
        temperature: '21.1',
        humidity: '26.5',
        light: '0',
        co2: '642.25',
        humidityRatio: '0.00409837009286403',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:07:00',
        temperature: '21.1',
        humidity: '26.5',
        light: '0',
        co2: '643.75',
        humidityRatio: '0.00409837009286403',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:08:00',
        temperature: '21.075',
        humidity: '26.4725',
        light: '0',
        co2: '649.666666666667',
        humidityRatio: '0.0040877654367767',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:08:59',
        temperature: '21.1',
        humidity: '26.5',
        light: '0',
        co2: '649.5',
        humidityRatio: '0.00409837009286403',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:10:00',
        temperature: '21.06',
        humidity: '26.412',
        light: '0',
        co2: '646.6',
        humidityRatio: '0.00407458077132825',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:10:59',
        temperature: '21.0666666666667',
        humidity: '26.4633333333333',
        light: '0',
        co2: '643',
        humidityRatio: '0.00408423543698301',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:11:59',
        temperature: '21.08',
        humidity: '26.478',
        light: '0',
        co2: '640.4',
        humidityRatio: '0.00408988460864459',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:13:00',
        temperature: '21.075',
        humidity: '26.39',
        light: '0',
        co2: '640.75',
        humidityRatio: '0.00407494269500011',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:14:00',
        temperature: '21.075',
        humidity: '26.4175',
        light: '0',
        co2: '636.75',
        humidityRatio: '0.00407921688389874',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:15:00',
        temperature: '21.05',
        humidity: '26.39',
        light: '0',
        co2: '634.75',
        humidityRatio: '0.00406864761293942',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:16:00',
        temperature: '21.075',
        humidity: '26.4175',
        light: '0',
        co2: '633.75',
        humidityRatio: '0.00407921688389874',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:16:59',
        temperature: '21',
        humidity: '26.29',
        light: '0',
        co2: '632',
        humidityRatio: '0.00404061355695366',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:17:59',
        temperature: '21',
        humidity: '26.29',
        light: '0',
        co2: '626.5',
        humidityRatio: '0.00404061355695366',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:19:00',
        temperature: '21.0333333333333',
        humidity: '26.3233333333333',
        light: '0',
        co2: '628.666666666667',
        humidityRatio: '0.00405412106853874',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:20:00',
        temperature: '21.025',
        humidity: '26.315',
        light: '0',
        co2: '629.5',
        humidityRatio: '0.00405074075050262',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:21:00',
        temperature: '21.05',
        humidity: '26.34',
        light: '0',
        co2: '630.5',
        humidityRatio: '0.00406088859278804',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:22:00',
        temperature: '21.025',
        humidity: '26.315',
        light: '0',
        co2: '631.5',
        humidityRatio: '0.00405074075050262',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:23:00',
        temperature: '21.025',
        humidity: '26.315',
        light: '0',
        co2: '629.5',
        humidityRatio: '0.00405074075050262',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:23:59',
        temperature: '21.05',
        humidity: '26.29',
        light: '0',
        co2: '627',
        humidityRatio: '0.00405312976495311',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:24:59',
        temperature: '21',
        humidity: '26.2675',
        light: '0',
        co2: '624.5',
        humidityRatio: '0.00403713299829174',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:26:00',
        temperature: '21',
        humidity: '26.26',
        light: '0',
        co2: '625.666666666667',
        humidityRatio: '0.00403597282067138',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:27:00',
        temperature: '21',
        humidity: '26.29',
        light: '0',
        co2: '624.5',
        humidityRatio: '0.00404061355695366',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:28:00',
        temperature: '21',
        humidity: '26.236',
        light: '0',
        co2: '622',
        humidityRatio: '0.00403226028118273',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:29:00',
        temperature: '21',
        humidity: '26.2675',
        light: '0',
        co2: '622.75',
        humidityRatio: '0.00403713299829174',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:29:59',
        temperature: '21',
        humidity: '26.2',
        light: '0',
        co2: '619.25',
        humidityRatio: '0.00402669155450986',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:30:59',
        temperature: '21',
        humidity: '26.2',
        light: '0',
        co2: '616',
        humidityRatio: '0.00402669155450986',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:32:00',
        temperature: '21',
        humidity: '26.2',
        light: '0',
        co2: '617.25',
        humidityRatio: '0.00402669155450986',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:33:00',
        temperature: '21',
        humidity: '26.2',
        light: '0',
        co2: '616.4',
        humidityRatio: '0.00402669155450986',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:34:00',
        temperature: '21',
        humidity: '26.1666666666667',
        light: '0',
        co2: '616.666666666667',
        humidityRatio: '0.00402153541444294',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:35:00',
        temperature: '21',
        humidity: '26.125',
        light: '0',
        co2: '614.75',
        humidityRatio: '0.00401509035879788',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:36:00',
        temperature: '21',
        humidity: '26.125',
        light: '0',
        co2: '611.333333333333',
        humidityRatio: '0.00401509035879788',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:36:59',
        temperature: '21',
        humidity: '26.1',
        light: '0',
        co2: '613.6',
        humidityRatio: '0.00401122338910984',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:38:00',
        temperature: '21',
        humidity: '26.15',
        light: '0',
        co2: '608.75',
        humidityRatio: '0.00401895737625997',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:39:00',
        temperature: '21',
        humidity: '26.1',
        light: '0',
        co2: '611',
        humidityRatio: '0.00401122338910984',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:40:00',
        temperature: '21',
        humidity: '26.1',
        light: '0',
        co2: '612',
        humidityRatio: '0.00401122338910984',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:40:59',
        temperature: '21',
        humidity: '26.1',
        light: '0',
        co2: '608.8',
        humidityRatio: '0.00401122338910984',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:42:00',
        temperature: '21',
        humidity: '26.1',
        light: '0',
        co2: '612',
        humidityRatio: '0.00401122338910984',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:42:59',
        temperature: '21',
        humidity: '26.1',
        light: '0',
        co2: '604.5',
        humidityRatio: '0.00401122338910984',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:43:59',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '607',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:45:00',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '614.75',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:46:00',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '612.25',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:47:00',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '607.5',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:48:00',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '602.666666666667',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:49:00',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '605.25',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:49:59',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '606',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:51:00',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '602.25',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:52:00',
        temperature: '21',
        humidity: '25.956',
        light: '0',
        co2: '600.5',
        humidityRatio: '0.00398895057376564',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:53:00',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '600.5',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:53:59',
        temperature: '21',
        humidity: '26',
        light: '0',
        co2: '601',
        humidityRatio: '0.00399575598808051',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:55:00',
        temperature: '21',
        humidity: '25.934',
        light: '0',
        co2: '600.4',
        humidityRatio: '0.0039855479220959',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:55:59',
        temperature: '21',
        humidity: '25.89',
        light: '0',
        co2: '604.333333333333',
        humidityRatio: '0.00397874272972879',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:56:59',
        temperature: '21',
        humidity: '25.89',
        light: '0',
        co2: '606',
        humidityRatio: '0.00397874272972879',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:58:00',
        temperature: '20.9633333333333',
        humidity: '25.89',
        light: '0',
        co2: '602',
        humidityRatio: '0.00396972695597109',
        occupancy: '0'
      },
      {
        date: '2015-02-03 21:59:00',
        temperature: '21',
        humidity: '25.89',
        light: '0',
        co2: '596',
        humidityRatio: '0.00397874272972879',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:00:00',
        temperature: '21',
        humidity: '25.89',
        light: '0',
        co2: '596.333333333333',
        humidityRatio: '0.00397874272972879',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:01:00',
        temperature: '21',
        humidity: '25.89',
        light: '0',
        co2: '594',
        humidityRatio: '0.00397874272972879',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:01:59',
        temperature: '20.945',
        humidity: '25.89',
        light: '0',
        co2: '596.5',
        humidityRatio: '0.00396522582885432',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:02:59',
        temperature: '20.9633333333333',
        humidity: '25.89',
        light: '0',
        co2: '596',
        humidityRatio: '0.00396972695597109',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:04:00',
        temperature: '20.9725',
        humidity: '25.815',
        light: '0',
        co2: '597.5',
        humidityRatio: '0.00396039963283484',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:05:00',
        temperature: '21',
        humidity: '25.815',
        light: '0',
        co2: '594.25',
        humidityRatio: '0.00396714331105683',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:06:00',
        temperature: '21',
        humidity: '25.815',
        light: '0',
        co2: '591.5',
        humidityRatio: '0.00396714331105683',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:07:00',
        temperature: '20.978',
        humidity: '25.83',
        light: '0',
        co2: '594.2',
        humidityRatio: '0.00396406423329848',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:08:00',
        temperature: '20.9633333333333',
        humidity: '25.79',
        light: '0',
        co2: '588.666666666667',
        humidityRatio: '0.00395429642658738',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:08:59',
        temperature: '20.9266666666667',
        humidity: '25.79',
        light: '0',
        co2: '585.333333333333',
        humidityRatio: '0.00394533386883401',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:09:59',
        temperature: '20.945',
        humidity: '25.79',
        light: '0',
        co2: '585',
        humidityRatio: '0.00394981290597816',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:11:00',
        temperature: '20.945',
        humidity: '25.79',
        light: '0',
        co2: '582.25',
        humidityRatio: '0.00394981290597816',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:12:00',
        temperature: '20.89',
        humidity: '25.79',
        light: '0',
        co2: '580.75',
        humidityRatio: '0.00393638922946585',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:13:00',
        temperature: '20.9175',
        humidity: '25.745',
        light: '0',
        co2: '585',
        humidityRatio: '0.00393617233116675',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:14:00',
        temperature: '20.89',
        humidity: '25.7225',
        light: '0',
        co2: '584.5',
        humidityRatio: '0.00392602151357463',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:14:59',
        temperature: '20.9633333333333',
        humidity: '25.7',
        light: '0',
        co2: '583.333333333333',
        humidityRatio: '0.00394040960056339',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:15:59',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '584',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:17:00',
        temperature: '20.912',
        humidity: '25.7',
        light: '0',
        co2: '581.8',
        humidityRatio: '0.00392791136236446',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:18:00',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '576.666666666667',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:19:00',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '579.333333333333',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:20:00',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '581.75',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:21:00',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '582.75',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:21:59',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '579.8',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:23:00',
        temperature: '20.9175',
        humidity: '25.7',
        light: '0',
        co2: '578.5',
        humidityRatio: '0.003929248785149',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:24:00',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '578.5',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:25:00',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '580.5',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:25:59',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '577.8',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:27:00',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '582.75',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:27:59',
        temperature: '20.89',
        humidity: '25.7',
        light: '0',
        co2: '584.4',
        humidityRatio: '0.00392256568459979',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:28:59',
        temperature: '20.89',
        humidity: '25.6',
        light: '0',
        co2: '582.666666666667',
        humidityRatio: '0.00390720690639245',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:30:00',
        temperature: '20.865',
        humidity: '25.575',
        light: '0',
        co2: '578.25',
        humidityRatio: '0.00389733036200245',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:31:00',
        temperature: '20.89',
        humidity: '25.6',
        light: '0',
        co2: '575.666666666667',
        humidityRatio: '0.00390720690639245',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:32:00',
        temperature: '20.89',
        humidity: '25.6',
        light: '0',
        co2: '577.25',
        humidityRatio: '0.00390720690639245',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:33:00',
        temperature: '20.87',
        humidity: '25.58',
        light: '0',
        co2: '577.2',
        humidityRatio: '0.00389930405186146',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:34:00',
        temperature: '20.89',
        humidity: '25.6',
        light: '0',
        co2: '572.75',
        humidityRatio: '0.00390720690639245',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:34:59',
        temperature: '20.89',
        humidity: '25.6',
        light: '0',
        co2: '576.5',
        humidityRatio: '0.00390720690639245',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:36:00',
        temperature: '20.89',
        humidity: '25.525',
        light: '0',
        co2: '579.333333333333',
        humidityRatio: '0.00389568831737105',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:37:00',
        temperature: '20.89',
        humidity: '25.525',
        light: '0',
        co2: '571.6',
        humidityRatio: '0.00389568831737105',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:38:00',
        temperature: '20.89',
        humidity: '25.5',
        light: '0',
        co2: '573',
        humidityRatio: '0.00389184888190864',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:38:59',
        temperature: '20.89',
        humidity: '25.5',
        light: '0',
        co2: '573.5',
        humidityRatio: '0.00389184888190864',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:40:00',
        temperature: '20.89',
        humidity: '25.5',
        light: '0',
        co2: '572.75',
        humidityRatio: '0.00389184888190864',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:40:59',
        temperature: '20.89',
        humidity: '25.5',
        light: '0',
        co2: '573.6',
        humidityRatio: '0.00389184888190864',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:41:59',
        temperature: '20.89',
        humidity: '25.5',
        light: '0',
        co2: '571.5',
        humidityRatio: '0.00389184888190864',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:43:00',
        temperature: '20.8566666666667',
        humidity: '25.4633333333333',
        light: '0',
        co2: '573.333333333333',
        humidityRatio: '0.00387820591111703',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:44:00',
        temperature: '20.89',
        humidity: '25.4725',
        light: '0',
        co2: '570.75',
        humidityRatio: '0.00388762555730537',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:45:00',
        temperature: '20.89',
        humidity: '25.39',
        light: '0',
        co2: '568',
        humidityRatio: '0.0038749559254609',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:46:00',
        temperature: '20.89',
        humidity: '25.4175',
        light: '0',
        co2: '573',
        humidityRatio: '0.00387917907908266',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:46:59',
        temperature: '20.89',
        humidity: '25.39',
        light: '0',
        co2: '569.666666666667',
        humidityRatio: '0.0038749559254609',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:47:59',
        temperature: '20.89',
        humidity: '25.39',
        light: '0',
        co2: '575.2',
        humidityRatio: '0.0038749559254609',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:49:00',
        temperature: '20.89',
        humidity: '25.39',
        light: '0',
        co2: '578',
        humidityRatio: '0.0038749559254609',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:50:00',
        temperature: '20.89',
        humidity: '25.39',
        light: '0',
        co2: '572.75',
        humidityRatio: '0.0038749559254609',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:51:00',
        temperature: '20.89',
        humidity: '25.39',
        light: '0',
        co2: '569.6',
        humidityRatio: '0.0038749559254609',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:52:00',
        temperature: '20.8566666666667',
        humidity: '25.3566666666667',
        light: '0',
        co2: '566.333333333333',
        humidityRatio: '0.00386185912300041',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:53:00',
        temperature: '20.8566666666667',
        humidity: '25.3566666666667',
        light: '0',
        co2: '567.333333333333',
        humidityRatio: '0.00386185912300041',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:53:59',
        temperature: '20.865',
        humidity: '25.365',
        light: '0',
        co2: '570.25',
        humidityRatio: '0.00386512996367583',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:54:59',
        temperature: '20.89',
        humidity: '25.39',
        light: '0',
        co2: '575',
        humidityRatio: '0.0038749559254609',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:56:00',
        temperature: '20.89',
        humidity: '25.37',
        light: '0',
        co2: '570.2',
        humidityRatio: '0.00387188457680511',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:57:00',
        temperature: '20.89',
        humidity: '25.3566666666667',
        light: '0',
        co2: '565.333333333333',
        humidityRatio: '0.00386983702778119',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:58:00',
        temperature: '20.89',
        humidity: '25.29',
        light: '0',
        co2: '569.25',
        humidityRatio: '0.0038595994836159',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:59:00',
        temperature: '20.89',
        humidity: '25.315',
        light: '0',
        co2: '567.25',
        humidityRatio: '0.00386343852342952',
        occupancy: '0'
      },
      {
        date: '2015-02-03 22:59:59',
        temperature: '20.89',
        humidity: '25.29',
        light: '0',
        co2: '567.5',
        humidityRatio: '0.0038595994836159',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:00:59',
        temperature: '20.865',
        humidity: '25.2675',
        light: '0',
        co2: '566',
        humidityRatio: '0.0038501809049505',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:02:00',
        temperature: '20.89',
        humidity: '25.29',
        light: '0',
        co2: '565.75',
        humidityRatio: '0.0038595994836159',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:03:00',
        temperature: '20.89',
        humidity: '25.2675',
        light: '0',
        co2: '564.5',
        humidityRatio: '0.00385614438805157',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:04:00',
        temperature: '20.89',
        humidity: '25.218',
        light: '0',
        co2: '562.6',
        humidityRatio: '0.00384854331208982',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:05:00',
        temperature: '20.89',
        humidity: '25.29',
        light: '0',
        co2: '561.333333333333',
        humidityRatio: '0.0038595994836159',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:06:00',
        temperature: '20.89',
        humidity: '25.29',
        light: '0',
        co2: '561',
        humidityRatio: '0.0038595994836159',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:06:59',
        temperature: '20.89',
        humidity: '25.29',
        light: '0',
        co2: '566.75',
        humidityRatio: '0.0038595994836159',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:08:00',
        temperature: '20.9175',
        humidity: '25.245',
        light: '0',
        co2: '563.75',
        humidityRatio: '0.0038592526447835',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:09:00',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '566.75',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:10:00',
        temperature: '20.89',
        humidity: '25.218',
        light: '0',
        co2: '563.4',
        humidityRatio: '0.00384854331208982',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:10:59',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '564.25',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:12:00',
        temperature: '20.89',
        humidity: '25.2225',
        light: '0',
        co2: '562.75',
        humidityRatio: '0.00384923431136602',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:12:59',
        temperature: '20.9175',
        humidity: '25.2',
        light: '0',
        co2: '560',
        humidityRatio: '0.00385233080028532',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:13:59',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '558.75',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:15:00',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '558.5',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:16:00',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '558.333333333333',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:17:00',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '561.4',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:18:00',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '558.25',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:19:00',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '557.2',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:19:59',
        temperature: '20.89',
        humidity: '25.2',
        light: '0',
        co2: '559.666666666667',
        humidityRatio: '0.00384577933024355',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:21:00',
        temperature: '20.89',
        humidity: '25.1333333333333',
        light: '0',
        co2: '561',
        humidityRatio: '0.00383554257309491',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:22:00',
        temperature: '20.89',
        humidity: '25.16',
        light: '0',
        co2: '563.4',
        humidityRatio: '0.00383963723576866',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:23:00',
        temperature: '20.9175',
        humidity: '25.125',
        light: '0',
        co2: '559.75',
        humidityRatio: '0.00384079473302138',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:23:59',
        temperature: '20.9175',
        humidity: '25.1',
        light: '0',
        co2: '559',
        humidityRatio: '0.00383694947177254',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:25:00',
        temperature: '20.9175',
        humidity: '25.1',
        light: '0',
        co2: '561',
        humidityRatio: '0.00383694947177254',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:25:59',
        temperature: '20.89',
        humidity: '25.1',
        light: '0',
        co2: '563.25',
        humidityRatio: '0.00383042432009906',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:26:59',
        temperature: '20.89',
        humidity: '25.1',
        light: '0',
        co2: '560.75',
        humidityRatio: '0.00383042432009906',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:28:00',
        temperature: '20.89',
        humidity: '25.1',
        light: '0',
        co2: '558',
        humidityRatio: '0.00383042432009906',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:29:00',
        temperature: '20.89',
        humidity: '25.08',
        light: '0',
        co2: '556.8',
        humidityRatio: '0.00382735340848547',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:30:00',
        temperature: '20.89',
        humidity: '25.125',
        light: '0',
        co2: '556',
        humidityRatio: '0.00383426300199744',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:31:00',
        temperature: '20.89',
        humidity: '25.1',
        light: '0',
        co2: '558',
        humidityRatio: '0.00383042432009906',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:31:59',
        temperature: '20.89',
        humidity: '25.08',
        light: '0',
        co2: '556.8',
        humidityRatio: '0.00382735340848547',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:32:59',
        temperature: '20.89',
        humidity: '25.0666666666667',
        light: '0',
        co2: '557',
        humidityRatio: '0.00382530615081945',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:34:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '556.8',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:35:00',
        temperature: '20.89',
        humidity: '25.025',
        light: '0',
        co2: '548.5',
        humidityRatio: '0.00381890855694277',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:36:00',
        temperature: '20.89',
        humidity: '25.05',
        light: '0',
        co2: '550',
        humidityRatio: '0.00382274709757259',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:37:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '554',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:38:00',
        temperature: '20.89',
        humidity: '25.025',
        light: '0',
        co2: '555.25',
        humidityRatio: '0.00381890855694277',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:38:59',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '555.5',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:39:59',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '556.75',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:41:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '558',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:42:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '558',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:43:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '558.25',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:44:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '556.25',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:44:59',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '554.5',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:45:59',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '555.25',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:47:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '558',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:48:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '554.333333333333',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:49:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '549.75',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:50:00',
        temperature: '20.89',
        humidity: '24.9725',
        light: '0',
        co2: '558.5',
        humidityRatio: '0.00381084777488986',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:51:00',
        temperature: '20.865',
        humidity: '24.92',
        light: '0',
        co2: '558.25',
        humidityRatio: '0.00379690673426888',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:51:59',
        temperature: '20.89',
        humidity: '24.9175',
        light: '0',
        co2: '558.25',
        humidityRatio: '0.003802403368789',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:53:00',
        temperature: '20.89',
        humidity: '24.9725',
        light: '0',
        co2: '547.25',
        humidityRatio: '0.00381084777488986',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:54:00',
        temperature: '20.89',
        humidity: '24.945',
        light: '0',
        co2: '553.75',
        humidityRatio: '0.003806625543353',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:55:00',
        temperature: '20.89',
        humidity: '24.89',
        light: '0',
        co2: '547.75',
        humidityRatio: '0.00379818125119672',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:55:59',
        temperature: '20.89',
        humidity: '24.89',
        light: '0',
        co2: '547.25',
        humidityRatio: '0.00379818125119672',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:57:00',
        temperature: '20.89',
        humidity: '24.89',
        light: '0',
        co2: '551.5',
        humidityRatio: '0.00379818125119672',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:57:59',
        temperature: '20.89',
        humidity: '24.89',
        light: '0',
        co2: '554',
        humidityRatio: '0.00379818125119672',
        occupancy: '0'
      },
      {
        date: '2015-02-03 23:58:59',
        temperature: '20.89',
        humidity: '24.89',
        light: '0',
        co2: '550',
        humidityRatio: '0.00379818125119672',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:00:00',
        temperature: '20.89',
        humidity: '24.9266666666667',
        light: '0',
        co2: '553.666666666667',
        humidityRatio: '0.00380381075398009',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:01:00',
        temperature: '20.89',
        humidity: '24.934',
        light: '0',
        co2: '552.4',
        humidityRatio: '0.00380493666669072',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:02:00',
        temperature: '20.89',
        humidity: '24.9266666666667',
        light: '0',
        co2: '554',
        humidityRatio: '0.00380381075398009',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:03:00',
        temperature: '20.83',
        humidity: '24.87',
        light: '0',
        co2: '547',
        humidityRatio: '0.00378103963992061',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:04:00',
        temperature: '20.89',
        humidity: '24.89',
        light: '0',
        co2: '542.333333333333',
        humidityRatio: '0.00379818125119672',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:04:59',
        temperature: '20.84',
        humidity: '24.8925',
        light: '0',
        co2: '544.75',
        humidityRatio: '0.00378682529133795',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:06:00',
        temperature: '20.89',
        humidity: '24.945',
        light: '0',
        co2: '547',
        humidityRatio: '0.003806625543353',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:07:00',
        temperature: '20.865',
        humidity: '24.865',
        light: '0',
        co2: '552.75',
        humidityRatio: '0.00378847568247451',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:08:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '556',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:08:59',
        temperature: '20.87',
        humidity: '24.934',
        light: '0',
        co2: '551.6',
        humidityRatio: '0.0038002289763746',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:10:00',
        temperature: '20.84',
        humidity: '24.92',
        light: '0',
        co2: '553',
        humidityRatio: '0.00379103428623353',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:10:59',
        temperature: '20.89',
        humidity: '24.9725',
        light: '0',
        co2: '551.25',
        humidityRatio: '0.00381084777488986',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:11:59',
        temperature: '20.8566666666667',
        humidity: '24.9266666666667',
        light: '0',
        co2: '552.666666666667',
        humidityRatio: '0.00379596979195081',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:13:00',
        temperature: '20.865',
        humidity: '24.9725',
        light: '0',
        co2: '553.75',
        humidityRatio: '0.00380495476836207',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:14:00',
        temperature: '20.8566666666667',
        humidity: '24.8566666666667',
        light: '0',
        co2: '545.666666666667',
        humidityRatio: '0.00378524493481222',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:15:00',
        temperature: '20.865',
        humidity: '24.9175',
        light: '0',
        co2: '547.75',
        humidityRatio: '0.00379652349971342',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:16:00',
        temperature: '20.89',
        humidity: '24.912',
        light: '0',
        co2: '548.4',
        humidityRatio: '0.00380155894071285',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:16:59',
        temperature: '20.89',
        humidity: '24.9266666666667',
        light: '0',
        co2: '549.333333333333',
        humidityRatio: '0.00380381075398009',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:17:59',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '549.333333333333',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:19:00',
        temperature: '20.865',
        humidity: '24.8925',
        light: '0',
        co2: '545.5',
        humidityRatio: '0.00379269117997465',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:20:00',
        temperature: '20.89',
        humidity: '24.9266666666667',
        light: '0',
        co2: '543',
        humidityRatio: '0.00380381075398009',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:21:00',
        temperature: '20.89',
        humidity: '24.978',
        light: '0',
        co2: '545.6',
        humidityRatio: '0.00381169222803407',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:22:00',
        temperature: '20.85',
        humidity: '24.956',
        light: '0',
        co2: '547.6',
        humidityRatio: '0.00379889577981915',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:23:00',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '548.666666666667',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:23:59',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '542.75',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:24:59',
        temperature: '20.87',
        humidity: '24.978',
        light: '0',
        co2: '537.2',
        humidityRatio: '0.00380697612849538',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:26:00',
        temperature: '20.8566666666667',
        humidity: '24.9266666666667',
        light: '0',
        co2: '541.333333333333',
        humidityRatio: '0.00379596979195081',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:27:00',
        temperature: '20.865',
        humidity: '24.9725',
        light: '0',
        co2: '545.25',
        humidityRatio: '0.00380495476836207',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:28:00',
        temperature: '20.83',
        humidity: '24.934',
        light: '0',
        co2: '541.25',
        humidityRatio: '0.00379082899831852',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:29:00',
        temperature: '20.8233333333333',
        humidity: '24.9266666666667',
        light: '0',
        co2: '535.5',
        humidityRatio: '0.0037881430827897',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:29:59',
        temperature: '20.89',
        humidity: '25',
        light: '0',
        co2: '536.5',
        humidityRatio: '0.00381507006340074',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:30:59',
        temperature: '20.87',
        humidity: '24.978',
        light: '0',
        co2: '543.8',
        humidityRatio: '0.00380697612849538',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:32:00',
        temperature: '20.84',
        humidity: '24.92',
        light: '0',
        co2: '542',
        humidityRatio: '0.00379103428623353',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:33:00',
        temperature: '20.84',
        humidity: '24.945',
        light: '0',
        co2: '537.25',
        humidityRatio: '0.00379486069436179',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:34:00',
        temperature: '20.8233333333333',
        humidity: '24.9266666666667',
        light: '0',
        co2: '538',
        humidityRatio: '0.0037881430827897',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:35:00',
        temperature: '20.8233333333333',
        humidity: '24.9266666666667',
        light: '0',
        co2: '542',
        humidityRatio: '0.0037881430827897',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:36:00',
        temperature: '20.81',
        humidity: '24.912',
        light: '0',
        co2: '542',
        humidityRatio: '0.00378277576496328',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:36:59',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '545.333333333333',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:38:00',
        temperature: '20.865',
        humidity: '24.9725',
        light: '0',
        co2: '543.25',
        humidityRatio: '0.00380495476836207',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:39:00',
        temperature: '20.8566666666667',
        humidity: '24.93',
        light: '0',
        co2: '539',
        humidityRatio: '0.00379648050860303',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:40:00',
        temperature: '20.84',
        humidity: '24.945',
        light: '0',
        co2: '540.75',
        humidityRatio: '0.00379486069436179',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:40:59',
        temperature: '20.79',
        humidity: '24.9175',
        light: '0',
        co2: '538',
        humidityRatio: '0.00377893195892112',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:42:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '538',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:42:59',
        temperature: '20.79',
        humidity: '24.9266666666667',
        light: '0',
        co2: '538.666666666667',
        humidityRatio: '0.00378033060415007',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:43:59',
        temperature: '20.81',
        humidity: '24.956',
        light: '0',
        co2: '541.6',
        humidityRatio: '0.00378949767297425',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:45:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '537.5',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:46:00',
        temperature: '20.79',
        humidity: '24.978',
        light: '0',
        co2: '537.2',
        humidityRatio: '0.00378816313297203',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:47:00',
        temperature: '20.79',
        humidity: '24.9633333333333',
        light: '0',
        co2: '541',
        humidityRatio: '0.00378592524758721',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:48:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '534',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:49:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '532',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:49:59',
        temperature: '20.84',
        humidity: '25',
        light: '0',
        co2: '531.75',
        humidityRatio: '0.00380327895695843',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:51:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '532.8',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:52:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '532',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:53:00',
        temperature: '20.8233333333333',
        humidity: '24.9266666666667',
        light: '0',
        co2: '533.666666666667',
        humidityRatio: '0.0037881430827897',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:53:59',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '531.75',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:55:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '534.4',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:55:59',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '535.666666666667',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:56:59',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '529.75',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:58:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '532',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 00:59:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '531.333333333333',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:00:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '529.75',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:01:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '528.75',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:01:59',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '528.25',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:02:59',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '526',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:04:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '526.5',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:05:00',
        temperature: '20.79',
        humidity: '24.9633333333333',
        light: '0',
        co2: '529.333333333333',
        humidityRatio: '0.00378592524758721',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:06:00',
        temperature: '20.815',
        humidity: '24.945',
        light: '0',
        co2: '528.25',
        humidityRatio: '0.00378899030008008',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:07:00',
        temperature: '20.81',
        humidity: '24.934',
        light: '0',
        co2: '526.8',
        humidityRatio: '0.00378613670091785',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:08:00',
        temperature: '20.79',
        humidity: '24.9725',
        light: '0',
        co2: '525.5',
        humidityRatio: '0.00378732392407703',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:08:59',
        temperature: '20.79',
        humidity: '24.9633333333333',
        light: '0',
        co2: '524.666666666667',
        humidityRatio: '0.00378592524758721',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:09:59',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '523',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:11:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '526',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:12:00',
        temperature: '20.79',
        humidity: '24.9725',
        light: '0',
        co2: '523.25',
        humidityRatio: '0.00378732392407703',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:13:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '524.333333333333',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:14:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '521.5',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:14:59',
        temperature: '20.79',
        humidity: '24.912',
        light: '0',
        co2: '518.6',
        humidityRatio: '0.00377809277478473',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:15:59',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '520.75',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:17:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '527.666666666667',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:18:00',
        temperature: '20.79',
        humidity: '24.945',
        light: '0',
        co2: '526',
        humidityRatio: '0.0037831279133643',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:19:00',
        temperature: '20.79',
        humidity: '24.956',
        light: '0',
        co2: '519.6',
        humidityRatio: '0.00378480631089698',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:20:00',
        temperature: '20.79',
        humidity: '24.9633333333333',
        light: '0',
        co2: '518.333333333333',
        humidityRatio: '0.00378592524758721',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:21:00',
        temperature: '20.79',
        humidity: '24.9725',
        light: '0',
        co2: '520.5',
        humidityRatio: '0.00378732392407703',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:21:59',
        temperature: '20.79',
        humidity: '24.945',
        light: '0',
        co2: '521.75',
        humidityRatio: '0.0037831279133643',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:23:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '523',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:24:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '520.333333333333',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:25:00',
        temperature: '20.79',
        humidity: '24.89',
        light: '0',
        co2: '519',
        humidityRatio: '0.00377473606074636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:25:59',
        temperature: '20.79',
        humidity: '24.945',
        light: '0',
        co2: '516.25',
        humidityRatio: '0.0037831279133643',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:27:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '518.6',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:27:59',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '519.333333333333',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:28:59',
        temperature: '20.76',
        humidity: '25',
        light: '0',
        co2: '515.333333333333',
        humidityRatio: '0.00378448000753531',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:30:00',
        temperature: '20.772',
        humidity: '25',
        light: '0',
        co2: '516.4',
        humidityRatio: '0.00378729461678286',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:31:00',
        temperature: '20.745',
        humidity: '25',
        light: '0',
        co2: '519.5',
        humidityRatio: '0.00378096433944754',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:32:00',
        temperature: '20.7675',
        humidity: '25',
        light: '0',
        co2: '522.25',
        humidityRatio: '0.003786238922116',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:33:00',
        temperature: '20.7675',
        humidity: '25',
        light: '0',
        co2: '514.75',
        humidityRatio: '0.003786238922116',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:34:00',
        temperature: '20.7675',
        humidity: '25',
        light: '0',
        co2: '513.75',
        humidityRatio: '0.003786238922116',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:34:59',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '515',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:36:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '519',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:37:00',
        temperature: '20.772',
        humidity: '25',
        light: '0',
        co2: '518.8',
        humidityRatio: '0.00378729461678286',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:38:00',
        temperature: '20.79',
        humidity: '25',
        light: '0',
        co2: '517.333333333333',
        humidityRatio: '0.00379151999106046',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:38:59',
        temperature: '20.73',
        humidity: '25.0666666666667',
        light: '0',
        co2: '509.75',
        humidityRatio: '0.00378758609466528',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:40:00',
        temperature: '20.718',
        humidity: '25.04',
        light: '0',
        co2: '513.6',
        humidityRatio: '0.00378071953151168',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:40:59',
        temperature: '20.73',
        humidity: '25.0666666666667',
        light: '0',
        co2: '511',
        humidityRatio: '0.00378758609466528',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:41:59',
        temperature: '20.718',
        humidity: '25.1',
        light: '0',
        co2: '512.4',
        humidityRatio: '0.00378983396134181',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:43:00',
        temperature: '20.7',
        humidity: '25.075',
        light: '0',
        co2: '515.5',
        humidityRatio: '0.00378181468299795',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:44:00',
        temperature: '20.736',
        humidity: '25.1',
        light: '0',
        co2: '511.8',
        humidityRatio: '0.00379406394707',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:45:00',
        temperature: '20.73',
        humidity: '25.1',
        light: '0',
        co2: '511.666666666667',
        humidityRatio: '0.00379265348954902',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:46:00',
        temperature: '20.7',
        humidity: '25.05',
        light: '0',
        co2: '509.75',
        humidityRatio: '0.00377802127782894',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:46:59',
        temperature: '20.73',
        humidity: '25.1',
        light: '0',
        co2: '513',
        humidityRatio: '0.00379265348954902',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:47:59',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '508.5',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:49:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '510',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:50:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '509.666666666667',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:51:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '508.5',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:52:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '511.25',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:53:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '513.333333333333',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:53:59',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '509.5',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:54:59',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '509',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:56:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '509',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:57:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '510.5',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:58:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '512',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:59:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '509',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 01:59:59',
        temperature: '20.68',
        humidity: '25.12',
        light: '0',
        co2: '508',
        humidityRatio: '0.00378394865473313',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:00:59',
        temperature: '20.7',
        humidity: '25.125',
        light: '0',
        co2: '502.25',
        humidityRatio: '0.00378940163130914',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:02:00',
        temperature: '20.675',
        humidity: '25.1',
        light: '0',
        co2: '502.5',
        humidityRatio: '0.00377974582194704',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:03:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '505.5',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:04:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '505.5',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:05:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '500.25',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:06:00',
        temperature: '20.68',
        humidity: '25.1',
        light: '0',
        co2: '500',
        humidityRatio: '0.00378091764363594',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:06:59',
        temperature: '20.6666666666667',
        humidity: '25.1',
        light: '0',
        co2: '499',
        humidityRatio: '0.00377779349737419',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:08:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '501.25',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:09:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '501',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:10:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '502',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:10:59',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '496.25',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:12:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '495.8',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:12:59',
        temperature: '20.66',
        humidity: '25.1',
        light: '0',
        co2: '497.8',
        humidityRatio: '0.00377623227793241',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:13:59',
        temperature: '20.6333333333333',
        humidity: '25.1',
        light: '0',
        co2: '497',
        humidityRatio: '0.00376999308725358',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:15:00',
        temperature: '20.625',
        humidity: '25.1',
        light: '0',
        co2: '497.25',
        humidityRatio: '0.00376804520502069',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:16:00',
        temperature: '20.675',
        humidity: '25.175',
        light: '0',
        co2: '503.25',
        humidityRatio: '0.00379110872081107',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:17:00',
        temperature: '20.675',
        humidity: '25.125',
        light: '0',
        co2: '500',
        humidityRatio: '0.00378353340905175',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:18:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '494.75',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:19:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '492.333333333333',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:19:59',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '492.75',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:21:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '497',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:22:00',
        temperature: '20.65',
        humidity: '25.075',
        light: '0',
        co2: '498.5',
        humidityRatio: '0.00377010987584578',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:23:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '498.75',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:23:59',
        temperature: '20.675',
        humidity: '25.075',
        light: '0',
        co2: '498.75',
        humidityRatio: '0.00377595828069119',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:25:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '495.333333333333',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:25:59',
        temperature: '20.675',
        humidity: '25.075',
        light: '0',
        co2: '490.75',
        humidityRatio: '0.00377595828069119',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:26:59',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '487.75',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:28:00',
        temperature: '20.65',
        humidity: '25.05',
        light: '0',
        co2: '491.75',
        humidityRatio: '0.00376632828201918',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:29:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '491.25',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:30:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '493.5',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:31:00',
        temperature: '20.7',
        humidity: '25.1',
        light: '0',
        co2: '493.333333333333',
        humidityRatio: '0.00378560813415773',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:31:59',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '493.25',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:32:59',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '491',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:34:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '492',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:35:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '496',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:36:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '493',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:37:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '491.25',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:38:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '494',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:38:59',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '494.2',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:39:59',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '493.75',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:41:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '495.75',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:42:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '492.25',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:43:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '486.5',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:44:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '493.333333333333',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:44:59',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '494.75',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:45:59',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '490',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:47:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '490.5',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:48:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '490.25',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:49:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '498.25',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:50:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '499',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:51:00',
        temperature: '20.7',
        humidity: '24.9633333333333',
        light: '0',
        co2: '493',
        humidityRatio: '0.00376487116263545',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:51:59',
        temperature: '20.7',
        humidity: '24.9816666666667',
        light: '0',
        co2: '484.833333333333',
        humidityRatio: '0.00376765287168212',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:53:00',
        temperature: '20.7',
        humidity: '24.9725',
        light: '0',
        co2: '480',
        humidityRatio: '0.00376626201406741',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:54:00',
        temperature: '20.7',
        humidity: '24.9725',
        light: '0',
        co2: '478.75',
        humidityRatio: '0.00376626201406741',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:55:00',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '483.333333333333',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:55:59',
        temperature: '20.7',
        humidity: '25',
        light: '0',
        co2: '480.2',
        humidityRatio: '0.00377043460545993',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:57:00',
        temperature: '20.7',
        humidity: '24.89',
        light: '0',
        co2: '483.333333333333',
        humidityRatio: '0.00375374457375356',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:57:59',
        temperature: '20.7',
        humidity: '24.89',
        light: '0',
        co2: '487',
        humidityRatio: '0.00375374457375356',
        occupancy: '0'
      },
      {
        date: '2015-02-04 02:58:59',
        temperature: '20.7',
        humidity: '24.85',
        light: '0',
        co2: '485.2',
        humidityRatio: '0.00374767569204467',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:00:00',
        temperature: '20.7',
        humidity: '24.89',
        light: '0',
        co2: '480.666666666667',
        humidityRatio: '0.00375374457375356',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:01:00',
        temperature: '20.7',
        humidity: '24.84',
        light: '0',
        co2: '480.25',
        humidityRatio: '0.00374615849001089',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:02:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '486',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:03:00',
        temperature: '20.7',
        humidity: '24.865',
        light: '0',
        co2: '485.75',
        humidityRatio: '0.00374995150889035',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:04:00',
        temperature: '20.7',
        humidity: '24.815',
        light: '0',
        co2: '483',
        humidityRatio: '0.00374236551711435',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:04:59',
        temperature: '20.7',
        humidity: '24.87',
        light: '0',
        co2: '483.6',
        humidityRatio: '0.00375071011818426',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:06:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '489.333333333333',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:07:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '486.75',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:08:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '483.5',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:08:59',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '482',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:10:00',
        temperature: '20.745',
        humidity: '24.79',
        light: '0',
        co2: '481.5',
        humidityRatio: '0.00374901280969807',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:10:59',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '488.25',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:11:59',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '486.333333333333',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:13:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '480.6',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:14:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '485.666666666667',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:15:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '484.8',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:16:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '481',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:16:59',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '486.5',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:17:59',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '488',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:19:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '481.666666666667',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:20:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '0',
        co2: '481',
        humidityRatio: '0.00373857259019989',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:21:00',
        temperature: '20.7',
        humidity: '24.754',
        light: '0',
        co2: '483',
        humidityRatio: '0.00373311085622271',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:22:00',
        temperature: '20.7',
        humidity: '24.7675',
        light: '0',
        co2: '485',
        humidityRatio: '0.00373515899529087',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:23:00',
        temperature: '20.7',
        humidity: '24.76',
        light: '0',
        co2: '475.666666666667',
        humidityRatio: '0.00373402113859771',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:23:59',
        temperature: '20.7',
        humidity: '24.7225',
        light: '0',
        co2: '478.5',
        humidityRatio: '0.00372833191720482',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:24:59',
        temperature: '20.7',
        humidity: '24.7',
        light: '0',
        co2: '482.8',
        humidityRatio: '0.00372491843402658',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:26:00',
        temperature: '20.7',
        humidity: '24.7',
        light: '0',
        co2: '482.333333333333',
        humidityRatio: '0.00372491843402658',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:27:00',
        temperature: '20.7',
        humidity: '24.675',
        light: '0',
        co2: '481.5',
        humidityRatio: '0.00372112571861894',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:28:00',
        temperature: '20.7',
        humidity: '24.675',
        light: '0',
        co2: '479.25',
        humidityRatio: '0.00372112571861894',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:29:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '478.333333333333',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:29:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '477.5',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:30:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '480.25',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:32:00',
        temperature: '20.7',
        humidity: '24.65',
        light: '0',
        co2: '481.5',
        humidityRatio: '0.0037173330491887',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:33:00',
        temperature: '20.7',
        humidity: '24.65',
        light: '0',
        co2: '481.25',
        humidityRatio: '0.0037173330491887',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:34:00',
        temperature: '20.7',
        humidity: '24.66',
        light: '0',
        co2: '481.75',
        humidityRatio: '0.00371885011144356',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:35:00',
        temperature: '20.7',
        humidity: '24.7',
        light: '0',
        co2: '479',
        humidityRatio: '0.00372491843402658',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:36:00',
        temperature: '20.7',
        humidity: '24.65',
        light: '0',
        co2: '482.75',
        humidityRatio: '0.0037173330491887',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:36:59',
        temperature: '20.7',
        humidity: '24.6666666666667',
        light: '0',
        co2: '485.666666666667',
        humidityRatio: '0.00371986149036697',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:38:00',
        temperature: '20.7',
        humidity: '24.6333333333333',
        light: '0',
        co2: '484',
        humidityRatio: '0.00371480462844446',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:39:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '479.5',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:40:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '479.75',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:40:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '480.75',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:42:00',
        temperature: '20.7',
        humidity: '24.6333333333333',
        light: '0',
        co2: '475.333333333333',
        humidityRatio: '0.00371480462844446',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:42:59',
        temperature: '20.7',
        humidity: '24.7',
        light: '0',
        co2: '475.666666666667',
        humidityRatio: '0.00372491843402658',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:43:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '477.25',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:45:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '478.5',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:46:00',
        temperature: '20.7',
        humidity: '24.64',
        light: '0',
        co2: '479.6',
        humidityRatio: '0.00371581599429009',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:47:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '475.666666666667',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:48:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '479.333333333333',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:49:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '478.5',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:49:59',
        temperature: '20.7',
        humidity: '24.6285714285714',
        light: '0',
        co2: '476.857142857143',
        humidityRatio: '0.00371408222627069',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:51:00',
        temperature: '20.7',
        humidity: '24.6333333333333',
        light: '0',
        co2: '477.333333333333',
        humidityRatio: '0.00371480462844446',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:52:00',
        temperature: '20.7',
        humidity: '24.625',
        light: '0',
        co2: '475.25',
        humidityRatio: '0.00371354042573503',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:53:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '479.666666666667',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:53:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '482',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:55:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '475.8',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:55:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '477.333333333333',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:56:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '475.25',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:58:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '477.25',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 03:59:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '478.666666666667',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:00:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '476.75',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:01:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '472.5',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:01:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '471.6',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:02:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '474.75',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:04:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '475.666666666667',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:05:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '473.2',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:06:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '467',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:07:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '466',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:08:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '465.25',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:08:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '471',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:09:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '471.5',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:11:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '476.5',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:12:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '472.75',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:13:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '470.75',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:14:00',
        temperature: '20.7',
        humidity: '24.575',
        light: '0',
        co2: '466.75',
        humidityRatio: '0.00370595531675404',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:14:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '463.75',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:15:59',
        temperature: '20.7',
        humidity: '24.5333333333333',
        light: '0',
        co2: '469',
        humidityRatio: '0.00369963453307978',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:17:00',
        temperature: '20.7',
        humidity: '24.575',
        light: '0',
        co2: '472.25',
        humidityRatio: '0.00370595531675404',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:18:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '475.4',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:19:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '474.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:20:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '470.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:21:00',
        temperature: '20.7',
        humidity: '24.5333333333333',
        light: '0',
        co2: '478',
        humidityRatio: '0.00369963453307978',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:21:59',
        temperature: '20.7',
        humidity: '24.56',
        light: '0',
        co2: '469.4',
        humidityRatio: '0.00370367981991981',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:23:00',
        temperature: '20.7',
        humidity: '24.5333333333333',
        light: '0',
        co2: '468.333333333333',
        humidityRatio: '0.00369963453307978',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:24:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '469.25',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:25:00',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '468',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:25:59',
        temperature: '20.7',
        humidity: '24.6',
        light: '0',
        co2: '473',
        humidityRatio: '0.00370974784825709',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:27:00',
        temperature: '20.7',
        humidity: '24.5666666666667',
        light: '0',
        co2: '474.333333333333',
        humidityRatio: '0.00370469114980285',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:27:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '475.75',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:28:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '473.5',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:30:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '474.75',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:31:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '472',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:32:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '468.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:33:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '471.5',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:34:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '469',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:34:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '468',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:36:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '471.5',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:37:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '469.6',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:38:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '466.6',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:38:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '462.666666666667',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:40:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '461.333333333333',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:40:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '463.75',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:41:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '466.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:43:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '468.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:44:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '470.6',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:45:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '467.666666666667',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:46:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '469',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:46:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '464.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:47:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '468',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:49:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '468.75',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:50:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '472.333333333333',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:51:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '468.666666666667',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:52:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '467.666666666667',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:53:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '462.333333333333',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:53:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '463.5',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:54:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '467.4',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:56:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '465.666666666667',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:57:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '465.75',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:58:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '469.75',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:59:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '463.333333333333',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 04:59:59',
        temperature: '20.62',
        humidity: '24.412',
        light: '0',
        co2: '462.6',
        humidityRatio: '0.00366301739748915',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:00:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '468.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:02:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '469.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:03:00',
        temperature: '20.675',
        humidity: '24.4725',
        light: '0',
        co2: '469',
        humidityRatio: '0.00368469240145023',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:04:00',
        temperature: '20.6666666666667',
        humidity: '24.4633333333333',
        light: '0',
        co2: '471.333333333333',
        humidityRatio: '0.00368140183570895',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:05:00',
        temperature: '20.625',
        humidity: '24.4175',
        light: '0',
        co2: '467.75',
        humidityRatio: '0.00366498369445519',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:06:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '459',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:06:59',
        temperature: '20.68',
        humidity: '24.478',
        light: '0',
        co2: '464.6',
        humidityRatio: '0.00368666785232636',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:08:00',
        temperature: '20.6666666666667',
        humidity: '24.4633333333333',
        light: '0',
        co2: '467.666666666667',
        humidityRatio: '0.00368140183570895',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:09:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '473.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:10:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '471',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:10:59',
        temperature: '20.675',
        humidity: '24.4725',
        light: '0',
        co2: '465.75',
        humidityRatio: '0.00368469240145023',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:12:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '461.5',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:12:59',
        temperature: '20.675',
        humidity: '24.4725',
        light: '0',
        co2: '464.5',
        humidityRatio: '0.00368469240145023',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:13:59',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '464.8',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:15:00',
        temperature: '20.6333333333333',
        humidity: '24.4266666666667',
        light: '0',
        co2: '468.333333333333',
        humidityRatio: '0.00366826270223185',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:16:00',
        temperature: '20.6666666666667',
        humidity: '24.4633333333333',
        light: '0',
        co2: '464.333333333333',
        humidityRatio: '0.00368140183570895',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:17:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '463.2',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:18:00',
        temperature: '20.6666666666667',
        humidity: '24.4633333333333',
        light: '0',
        co2: '465.333333333333',
        humidityRatio: '0.00368140183570895',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:19:00',
        temperature: '20.675',
        humidity: '24.4725',
        light: '0',
        co2: '464.25',
        humidityRatio: '0.00368469240145023',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:19:59',
        temperature: '20.64',
        humidity: '24.434',
        light: '0',
        co2: '460',
        humidityRatio: '0.00367088757078308',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:21:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '0',
        co2: '461',
        humidityRatio: '0.00369457799808589',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:22:00',
        temperature: '20.6666666666667',
        humidity: '24.4633333333333',
        light: '0',
        co2: '467',
        humidityRatio: '0.00368140183570895',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:23:00',
        temperature: '20.64',
        humidity: '24.434',
        light: '0',
        co2: '462.2',
        humidityRatio: '0.00367088757078308',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:23:59',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '459.75',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:25:00',
        temperature: '20.65',
        humidity: '24.445',
        light: '0',
        co2: '455.25',
        humidityRatio: '0.00367482764578557',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:25:59',
        temperature: '20.625',
        humidity: '24.4175',
        light: '0',
        co2: '455.25',
        humidityRatio: '0.00366498369445519',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:26:59',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '461.333333333333',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:28:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '465.25',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:29:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '464.75',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:30:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '464.8',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:31:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '463.5',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:31:59',
        temperature: '20.625',
        humidity: '24.4175',
        light: '0',
        co2: '463.5',
        humidityRatio: '0.00366498369445519',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:32:59',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '465.666666666667',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:34:00',
        temperature: '20.625',
        humidity: '24.4175',
        light: '0',
        co2: '464.5',
        humidityRatio: '0.00366498369445519',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:35:00',
        temperature: '20.62',
        humidity: '24.412',
        light: '0',
        co2: '467.6',
        humidityRatio: '0.00366301739748915',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:36:00',
        temperature: '20.625',
        humidity: '24.4175',
        light: '0',
        co2: '459.5',
        humidityRatio: '0.00366498369445519',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:37:00',
        temperature: '20.625',
        humidity: '24.4175',
        light: '0',
        co2: '457.5',
        humidityRatio: '0.00366498369445519',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:38:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '463.333333333333',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:38:59',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '465',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:39:59',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '468.25',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:41:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '465',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:42:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '464.5',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:43:00',
        temperature: '20.6',
        humidity: '24.34',
        light: '0',
        co2: '465.5',
        humidityRatio: '0.00364762341444938',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:44:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '465.75',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:44:59',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '469.75',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:45:59',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '468.2',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:47:00',
        temperature: '20.6',
        humidity: '24.365',
        light: '0',
        co2: '463.5',
        humidityRatio: '0.00365139193996433',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:48:00',
        temperature: '20.6',
        humidity: '24.34',
        light: '0',
        co2: '461.5',
        humidityRatio: '0.00364762341444938',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:49:00',
        temperature: '20.6',
        humidity: '24.39',
        light: '0',
        co2: '464',
        humidityRatio: '0.00365516051087822',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:50:00',
        temperature: '20.6',
        humidity: '24.365',
        light: '0',
        co2: '464',
        humidityRatio: '0.00365139193996433',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:51:00',
        temperature: '20.6166666666667',
        humidity: '24.3233333333333',
        light: '0',
        co2: '466.5',
        humidityRatio: '0.00364888059723987',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:51:59',
        temperature: '20.6333333333333',
        humidity: '24.3233333333333',
        light: '0',
        co2: '461',
        humidityRatio: '0.00365265354089946',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:53:00',
        temperature: '20.625',
        humidity: '24.315',
        light: '0',
        co2: '459.25',
        humidityRatio: '0.00364950852408944',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:54:00',
        temperature: '20.66',
        humidity: '24.312',
        light: '0',
        co2: '459.6',
        humidityRatio: '0.0036569826295124',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:55:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '460.333333333333',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:55:59',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '458.5',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:57:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '460',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:57:59',
        temperature: '20.625',
        humidity: '24.2925',
        light: '0',
        co2: '464.5',
        humidityRatio: '0.0036461116379366',
        occupancy: '0'
      },
      {
        date: '2015-02-04 05:58:59',
        temperature: '20.62',
        humidity: '24.236',
        light: '0',
        co2: '467.2',
        humidityRatio: '0.00363645422458372',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:00:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '456',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:01:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '459.5',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:02:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '460.333333333333',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:03:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '462.2',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:04:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '460.5',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:04:59',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '464.25',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:06:00',
        temperature: '20.6333333333333',
        humidity: '24.23',
        light: '0',
        co2: '464.333333333333',
        humidityRatio: '0.00363855561297649',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:07:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '465.75',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:08:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '463.5',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:08:59',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '466.2',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:10:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '466.25',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:10:59',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '466',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:11:59',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '463.25',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:13:00',
        temperature: '20.575',
        humidity: '24.2',
        light: '0',
        co2: '466.75',
        humidityRatio: '0.00362090165616911',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:14:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '467.666666666667',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:15:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '463.5',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:16:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '459.25',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:16:59',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '463.25',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:17:59',
        temperature: '20.575',
        humidity: '24.2',
        light: '0',
        co2: '463',
        humidityRatio: '0.00362090165616911',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:19:00',
        temperature: '20.5333333333333',
        humidity: '24.2',
        light: '0',
        co2: '459.333333333333',
        humidityRatio: '0.00361155395043591',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:20:00',
        temperature: '20.55',
        humidity: '24.2',
        light: '0',
        co2: '463',
        humidityRatio: '0.00361529047701477',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:21:00',
        temperature: '20.575',
        humidity: '24.2',
        light: '0',
        co2: '460.75',
        humidityRatio: '0.00362090165616911',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:22:00',
        temperature: '20.56',
        humidity: '24.2',
        light: '0',
        co2: '462.4',
        humidityRatio: '0.00361753402823388',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:23:00',
        temperature: '20.52',
        humidity: '24.2',
        light: '0',
        co2: '464',
        humidityRatio: '0.00360856718053967',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:23:59',
        temperature: '20.5333333333333',
        humidity: '24.2',
        light: '0',
        co2: '462.666666666667',
        humidityRatio: '0.00361155395043591',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:24:59',
        temperature: '20.55',
        humidity: '24.2',
        light: '0',
        co2: '467',
        humidityRatio: '0.00361529047701477',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:26:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '0',
        co2: '468',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:27:00',
        temperature: '20.6',
        humidity: '24.1',
        light: '0',
        co2: '463.25',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:28:00',
        temperature: '20.6',
        humidity: '24.175',
        light: '0',
        co2: '462.5',
        humidityRatio: '0.0036227522845972',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:29:00',
        temperature: '20.6',
        humidity: '24.1',
        light: '0',
        co2: '467.75',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:29:59',
        temperature: '20.6666666666667',
        humidity: '24.1666666666667',
        light: '0',
        co2: '467.666666666667',
        humidityRatio: '0.00363649649104029',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:30:59',
        temperature: '20.6',
        humidity: '24.1',
        light: '0',
        co2: '466.25',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:32:00',
        temperature: '20.6',
        humidity: '24.1',
        light: '0',
        co2: '466.5',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:33:00',
        temperature: '20.6',
        humidity: '24.1',
        light: '0',
        co2: '467.5',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:34:00',
        temperature: '20.6',
        humidity: '24.1',
        light: '0',
        co2: '464.5',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:35:00',
        temperature: '20.6',
        humidity: '24.1',
        light: '0',
        co2: '460.5',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:36:00',
        temperature: '20.6',
        humidity: '24.0333333333333',
        light: '0',
        co2: '457',
        humidityRatio: '0.00360139986187671',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:36:59',
        temperature: '20.6',
        humidity: '24.08',
        light: '0',
        co2: '459.4',
        humidityRatio: '0.00360843344014219',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:38:00',
        temperature: '20.6333333333333',
        humidity: '24.0666666666667',
        light: '0',
        co2: '465',
        humidityRatio: '0.00361388576784168',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:39:00',
        temperature: '20.6',
        humidity: '24.05',
        light: '0',
        co2: '465.75',
        humidityRatio: '0.00360391183595888',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:40:00',
        temperature: '20.625',
        humidity: '24.05',
        light: '0',
        co2: '468.75',
        humidityRatio: '0.00360950309482678',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:40:59',
        temperature: '20.6',
        humidity: '24',
        light: '0',
        co2: '463.5',
        humidityRatio: '0.00359637597422955',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:42:00',
        temperature: '20.6',
        humidity: '24.05',
        light: '0',
        co2: '463.25',
        humidityRatio: '0.00360391183595888',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:42:59',
        temperature: '20.6',
        humidity: '24',
        light: '0',
        co2: '466.333333333333',
        humidityRatio: '0.00359637597422955',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:43:59',
        temperature: '20.6',
        humidity: '24.02',
        light: '0',
        co2: '467.8',
        humidityRatio: '0.00359939029713517',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:45:00',
        temperature: '20.575',
        humidity: '24.075',
        light: '0',
        co2: '463.25',
        humidityRatio: '0.00360209033999183',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:46:00',
        temperature: '20.525',
        humidity: '24.1',
        light: '0',
        co2: '468.75',
        humidityRatio: '0.00359468469872632',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:47:00',
        temperature: '20.5666666666667',
        humidity: '24.1',
        light: '0',
        co2: '465',
        humidityRatio: '0.00360398908937207',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:48:00',
        temperature: '20.525',
        humidity: '24.1',
        light: '0',
        co2: '464.75',
        humidityRatio: '0.00359468469872632',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:49:00',
        temperature: '20.54',
        humidity: '24.1',
        light: '0',
        co2: '466.4',
        humidityRatio: '0.00359803183728493',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:49:59',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '467',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:51:00',
        temperature: '20.5',
        humidity: '24.15',
        light: '0',
        co2: '466.75',
        humidityRatio: '0.00359660158101622',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:52:00',
        temperature: '20.525',
        humidity: '24.1',
        light: '0',
        co2: '468.75',
        humidityRatio: '0.00359468469872632',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:53:00',
        temperature: '20.5',
        humidity: '24.2',
        light: '0',
        co2: '468.666666666667',
        humidityRatio: '0.00360409110809833',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:53:59',
        temperature: '20.5',
        humidity: '24.2',
        light: '0',
        co2: '466.75',
        humidityRatio: '0.00360409110809833',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:55:00',
        temperature: '20.5',
        humidity: '24.2',
        light: '0',
        co2: '462.5',
        humidityRatio: '0.00360409110809833',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:55:59',
        temperature: '20.525',
        humidity: '24.1',
        light: '0',
        co2: '465.5',
        humidityRatio: '0.00359468469872632',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:56:59',
        temperature: '20.54',
        humidity: '24.1',
        light: '0',
        co2: '463.8',
        humidityRatio: '0.00359803183728493',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:58:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '467.333333333333',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 06:59:00',
        temperature: '20.5666666666667',
        humidity: '24.1',
        light: '0',
        co2: '466.75',
        humidityRatio: '0.00360398908937207',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:00:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '466.8',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:01:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '464',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:01:59',
        temperature: '20.52',
        humidity: '24.1',
        light: '0',
        co2: '461.4',
        humidityRatio: '0.00359356959594452',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:02:59',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '464.666666666667',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:04:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '465.5',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:05:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '467.666666666667',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:06:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '473.5',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:07:00',
        temperature: '20.52',
        humidity: '24.1',
        light: '0',
        co2: '469.8',
        humidityRatio: '0.00359356959594452',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:08:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '469.666666666667',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:08:59',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '470.6',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:09:59',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '468',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:11:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '468.5',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:12:00',
        temperature: '20.5',
        humidity: '24.1',
        light: '0',
        co2: '470',
        humidityRatio: '0.00358911223325629',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:13:00',
        temperature: '20.4725',
        humidity: '24.05',
        light: '0',
        co2: '472.75',
        humidityRatio: '0.00357551499371526',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:14:00',
        temperature: '20.5',
        humidity: '24.075',
        light: '0',
        co2: '466.75',
        humidityRatio: '0.00358536762662013',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:14:59',
        temperature: '20.4725',
        humidity: '24.0225',
        light: '0',
        co2: '466',
        humidityRatio: '0.00357140309205584',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:15:59',
        temperature: '20.4266666666667',
        humidity: '23.96',
        light: '0',
        co2: '467.333333333333',
        humidityRatio: '0.00355193680003749',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:17:00',
        temperature: '20.4725',
        humidity: '23.9975',
        light: '0',
        co2: '468.5',
        humidityRatio: '0.00356766504654512',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:18:00',
        temperature: '20.456',
        humidity: '23.956',
        light: '0',
        co2: '470.8',
        humidityRatio: '0.00355781402645853',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:19:00',
        temperature: '20.5',
        humidity: '24',
        light: '0',
        co2: '472',
        humidityRatio: '0.00357413407567721',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:20:00',
        temperature: '20.478',
        humidity: '23.978',
        light: '0',
        co2: '470',
        humidityRatio: '0.00356596658429162',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:21:00',
        temperature: '20.445',
        humidity: '23.945',
        light: '0',
        co2: '466.666666666667',
        humidityRatio: '0.00355374334047454',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:21:59',
        temperature: '20.5',
        humidity: '24',
        light: '0',
        co2: '461.4',
        humidityRatio: '0.00357413407567721',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:23:00',
        temperature: '20.39',
        humidity: '23.89',
        light: '0',
        co2: '462.666666666667',
        humidityRatio: '0.00353344572567677',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:24:00',
        temperature: '20.4725',
        humidity: '23.89',
        light: '0',
        co2: '464.75',
        humidityRatio: '0.00355159195988146',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:25:00',
        temperature: '20.5',
        humidity: '23.89',
        light: '0',
        co2: '473.5',
        humidityRatio: '0.00355765893071744',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:25:59',
        temperature: '20.456',
        humidity: '23.85',
        light: '0',
        co2: '472.5',
        humidityRatio: '0.00354198184055287',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:27:00',
        temperature: '20.4266666666667',
        humidity: '23.8233333333333',
        light: '0',
        co2: '473',
        humidityRatio: '0.00353156169479861',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:27:59',
        temperature: '20.4633333333333',
        humidity: '23.8566666666667',
        light: '0',
        co2: '473',
        humidityRatio: '0.00354459077966779',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:28:59',
        temperature: '20.445',
        humidity: '23.8233333333333',
        light: '0',
        co2: '469.833333333333',
        humidityRatio: '0.00353558381640323',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:30:00',
        temperature: '20.445',
        humidity: '23.8175',
        light: '0',
        co2: '469.25',
        humidityRatio: '0.00353471318077689',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:31:00',
        temperature: '20.4175',
        humidity: '23.7475',
        light: '0',
        co2: '471.75',
        humidityRatio: '0.00351825348975941',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:32:00',
        temperature: '20.4266666666667',
        humidity: '23.76',
        light: '0',
        co2: '472.666666666667',
        humidityRatio: '0.00352212002291503',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:33:00',
        temperature: '20.4175',
        humidity: '23.7225',
        light: '0',
        co2: '471.5',
        humidityRatio: '0.00351452874724351',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:34:00',
        temperature: '20.4725',
        humidity: '23.7675',
        light: '0',
        co2: '471',
        humidityRatio: '0.00353327712377474',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:34:59',
        temperature: '20.39',
        humidity: '23.7',
        light: '0',
        co2: '472',
        humidityRatio: '0.00350518544923937',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:36:00',
        temperature: '20.434',
        humidity: '23.736',
        light: '0',
        co2: '468.8',
        humidityRatio: '0.00352014460232289',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:37:00',
        temperature: '20.4266666666667',
        humidity: '23.73',
        light: '56.3333333333333',
        co2: '471.666666666667',
        humidityRatio: '0.0035176477515035',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:38:00',
        temperature: '20.39',
        humidity: '23.7',
        light: '311.75',
        co2: '474.75',
        humidityRatio: '0.00350518544923937',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:38:59',
        temperature: '20.4175',
        humidity: '23.7225',
        light: '426',
        co2: '473.5',
        humidityRatio: '0.00351452874724351',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:40:00',
        temperature: '20.4725',
        humidity: '23.7675',
        light: '433',
        co2: '473.75',
        humidityRatio: '0.00353327712377474',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:40:59',
        temperature: '20.4816666666667',
        humidity: '23.89',
        light: '423.666666666667',
        co2: '484.5',
        humidityRatio: '0.00355361326947345',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:41:59',
        temperature: '20.5',
        humidity: '23.89',
        light: '419',
        co2: '492.4',
        humidityRatio: '0.00355765893071744',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:43:00',
        temperature: '20.5',
        humidity: '23.89',
        light: '419',
        co2: '491',
        humidityRatio: '0.00355765893071744',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:44:00',
        temperature: '20.5',
        humidity: '23.89',
        light: '419',
        co2: '487.2',
        humidityRatio: '0.00355765893071744',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:45:00',
        temperature: '20.55',
        humidity: '23.945',
        light: '415.5',
        co2: '493.25',
        humidityRatio: '0.00357697639860997',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:46:00',
        temperature: '20.52',
        humidity: '24',
        light: '409.8',
        co2: '499.6',
        humidityRatio: '0.00357857273040011',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:46:59',
        temperature: '20.525',
        humidity: '24',
        light: '414.6',
        co2: '506.2',
        humidityRatio: '0.00357968315295065',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:47:59',
        temperature: '20.6',
        humidity: '24.0833333333333',
        light: '413',
        co2: '507.333333333333',
        humidityRatio: '0.00360893584464161',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:49:00',
        temperature: '20.6',
        humidity: '24.1',
        light: '414.6',
        co2: '514.6',
        humidityRatio: '0.00361144787924265',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:50:00',
        temperature: '20.6',
        humidity: '24.175',
        light: '407.5',
        co2: '522.25',
        humidityRatio: '0.0036227522845972',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:51:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '406.6',
        co2: '525.6',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:52:00',
        temperature: '20.6',
        humidity: '24.2',
        light: '399.5',
        co2: '528',
        humidityRatio: '0.00362652051049971',
        occupancy: '0'
      },
      {
        date: '2015-02-04 07:53:00',
        temperature: '20.6333333333333',
        humidity: '24.23',
        light: '398.333333333333',
        co2: '537.333333333333',
        humidityRatio: '0.00363855561297649',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:53:59',
        temperature: '20.66',
        humidity: '24.2',
        light: '406.2',
        co2: '538.8',
        humidityRatio: '0.00364003712975864',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:54:59',
        temperature: '20.625',
        humidity: '24.175',
        light: '414',
        co2: '538.5',
        humidityRatio: '0.00362837294284862',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:56:00',
        temperature: '20.66',
        humidity: '24.216',
        light: '412.2',
        co2: '535.8',
        humidityRatio: '0.00364245785923865',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:57:00',
        temperature: '20.675',
        humidity: '24.34',
        light: '411',
        co2: '538.75',
        humidityRatio: '0.00366462505281217',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:58:00',
        temperature: '20.7',
        humidity: '24.5',
        light: '408',
        co2: '546.25',
        humidityRatio: '0.00369457799808589',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:59:00',
        temperature: '20.7',
        humidity: '24.65',
        light: '405',
        co2: '554.666666666667',
        humidityRatio: '0.0037173330491887',
        occupancy: '1'
      },
      {
        date: '2015-02-04 07:59:59',
        temperature: '20.7',
        humidity: '24.7',
        light: '405',
        co2: '565.333333333333',
        humidityRatio: '0.00372491843402658',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:00:59',
        temperature: '20.7',
        humidity: '24.7675',
        light: '405',
        co2: '573',
        humidityRatio: '0.00373515899529087',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:02:00',
        temperature: '20.7128571428571',
        humidity: '24.79',
        light: '405',
        co2: '581.142857142857',
        humidityRatio: '0.00374155289136171',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:03:00',
        temperature: '20.7',
        humidity: '24.79',
        light: '405',
        co2: '587.25',
        humidityRatio: '0.00373857259019989',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:04:00',
        temperature: '20.754',
        humidity: '24.87',
        light: '413.4',
        co2: '588.2',
        humidityRatio: '0.00376328239169231',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:05:00',
        temperature: '20.775',
        humidity: '24.89',
        light: '416.666666666667',
        co2: '589.5',
        humidityRatio: '0.00377123030935907',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:06:00',
        temperature: '20.772',
        humidity: '24.956',
        light: '419',
        co2: '592',
        humidityRatio: '0.00378058846372981',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:06:59',
        temperature: '20.79',
        humidity: '24.978',
        light: '419',
        co2: '599.8',
        humidityRatio: '0.00378816313297203',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:08:00',
        temperature: '20.79',
        humidity: '25',
        light: '419',
        co2: '605.4',
        humidityRatio: '0.00379151999106046',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:09:00',
        temperature: '20.79',
        humidity: '24.9975',
        light: '419',
        co2: '611.25',
        humidityRatio: '0.00379113852810034',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:10:00',
        temperature: '20.81',
        humidity: '25.02',
        light: '419',
        co2: '616.4',
        humidityRatio: '0.00379927525150784',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:10:59',
        temperature: '20.865',
        humidity: '25.075',
        light: '419',
        co2: '621',
        humidityRatio: '0.00382066819344459',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:12:00',
        temperature: '20.8233333333333',
        humidity: '25.0333333333333',
        light: '419',
        co2: '622.666666666667',
        humidityRatio: '0.00380445252679579',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:12:59',
        temperature: '20.8566666666667',
        humidity: '25.0666666666667',
        light: '419',
        co2: '624',
        humidityRatio: '0.00381742060909679',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:13:59',
        temperature: '20.84',
        humidity: '25.05',
        light: '419',
        co2: '623.75',
        humidityRatio: '0.00381093211949594',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:15:00',
        temperature: '20.87',
        humidity: '25.16',
        light: '433',
        co2: '632.4',
        humidityRatio: '0.00383488634878397',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:16:00',
        temperature: '20.89',
        humidity: '25.2',
        light: '433',
        co2: '639',
        humidityRatio: '0.00384577933024355',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:17:00',
        temperature: '20.8733333333333',
        humidity: '25.275',
        light: '433',
        co2: '646',
        humidityRatio: '0.00385331832782966',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:18:00',
        temperature: '20.84',
        humidity: '25.1975',
        light: '433',
        co2: '649.5',
        humidityRatio: '0.00383351003961505',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:19:00',
        temperature: '20.89',
        humidity: '25.272',
        light: '433',
        co2: '649.8',
        humidityRatio: '0.00385683540411258',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:19:59',
        temperature: '20.865',
        humidity: '25.365',
        light: '433',
        co2: '656.75',
        humidityRatio: '0.00386512996367583',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:21:00',
        temperature: '20.84',
        humidity: '25.34',
        light: '433',
        co2: '660.75',
        humidityRatio: '0.00385532415378895',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:22:00',
        temperature: '20.8733333333333',
        humidity: '25.3733333333333',
        light: '437.666666666667',
        co2: '659.333333333333',
        humidityRatio: '0.00386840304345056',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:23:00',
        temperature: '20.87',
        humidity: '25.37',
        light: '440.6',
        co2: '671.6',
        humidityRatio: '0.00386709354276614',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:23:59',
        temperature: '20.84',
        humidity: '25.34',
        light: '442.5',
        co2: '673.5',
        humidityRatio: '0.00385532415378895',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:25:00',
        temperature: '20.865',
        humidity: '25.365',
        light: '438',
        co2: '678.25',
        humidityRatio: '0.00386512996367583',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:25:59',
        temperature: '20.89',
        humidity: '25.39',
        light: '441',
        co2: '681',
        humidityRatio: '0.0038749559254609',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:26:59',
        temperature: '20.89',
        humidity: '25.35',
        light: '429',
        co2: '683',
        humidityRatio: '0.00386881325829316',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:28:00',
        temperature: '20.89',
        humidity: '25.33',
        light: '429',
        co2: '689.4',
        humidityRatio: '0.00386574196992461',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:29:00',
        temperature: '20.89',
        humidity: '25.34',
        light: '429',
        co2: '694.25',
        humidityRatio: '0.00386727761034099',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:30:00',
        temperature: '20.912',
        humidity: '25.39',
        light: '435',
        co2: '690.4',
        humidityRatio: '0.00388023631835984',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:31:00',
        temperature: '20.945',
        humidity: '25.39',
        light: '444',
        co2: '697.333333333333',
        humidityRatio: '0.00388816880386623',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:31:59',
        temperature: '20.9725',
        humidity: '25.39',
        light: '444',
        co2: '710.25',
        humidityRatio: '0.00389479012739197',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:32:59',
        temperature: '20.956',
        humidity: '25.39',
        light: '444',
        co2: '717.8',
        humidityRatio: '0.00389081614129734',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:34:00',
        temperature: '21',
        humidity: '25.39',
        light: '444',
        co2: '720.75',
        humidityRatio: '0.00390142139093685',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:35:00',
        temperature: '21',
        humidity: '25.412',
        light: '444',
        co2: '721.4',
        humidityRatio: '0.00390482312809722',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:36:00',
        temperature: '21',
        humidity: '25.39',
        light: '444',
        co2: '718',
        humidityRatio: '0.00390142139093685',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:37:00',
        temperature: '21',
        humidity: '25.3566666666667',
        light: '444',
        co2: '715.5',
        humidityRatio: '0.00389626731417885',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:38:00',
        temperature: '21',
        humidity: '25.29',
        light: '447.2',
        co2: '713',
        humidityRatio: '0.00388595941531064',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:38:59',
        temperature: '21',
        humidity: '25.29',
        light: '456.8',
        co2: '714.8',
        humidityRatio: '0.00388595941531064',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:39:59',
        temperature: '21',
        humidity: '25.245',
        light: '460',
        co2: '714.5',
        humidityRatio: '0.0038790017755085',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:41:00',
        temperature: '21',
        humidity: '25.2',
        light: '454.75',
        co2: '711',
        humidityRatio: '0.00387204429039337',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:42:00',
        temperature: '21',
        humidity: '25.2',
        light: '453',
        co2: '705',
        humidityRatio: '0.00387204429039337',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:43:00',
        temperature: '21',
        humidity: '25.2',
        light: '451.6',
        co2: '711',
        humidityRatio: '0.00387204429039337',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:44:00',
        temperature: '21.025',
        humidity: '25.2225',
        light: '454.75',
        co2: '713.5',
        humidityRatio: '0.00388151974782212',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:44:59',
        temperature: '21.0833333333333',
        humidity: '25.2',
        light: '453',
        co2: '719.5',
        humidityRatio: '0.00389204714712558',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:45:59',
        temperature: '21.0666666666667',
        humidity: '25.2',
        light: '458',
        co2: '727.666666666667',
        humidityRatio: '0.00388803930328456',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:47:00',
        temperature: '21.1166666666667',
        humidity: '25.2',
        light: '458',
        co2: '728.666666666667',
        humidityRatio: '0.00390007376350971',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:48:00',
        temperature: '21.15',
        humidity: '25.2225',
        light: '459.25',
        co2: '731.25',
        humidityRatio: '0.00391162630292601',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:49:00',
        temperature: '21.2',
        humidity: '25.2283333333333',
        light: '454',
        co2: '738.5',
        humidityRatio: '0.00392463963646193',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:50:00',
        temperature: '21.2',
        humidity: '25.18',
        light: '454',
        co2: '740.2',
        humidityRatio: '0.00391707332201621',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:51:00',
        temperature: '21.2',
        humidity: '25.1',
        light: '454',
        co2: '735.75',
        humidityRatio: '0.00390455016902337',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:51:59',
        temperature: '21.2',
        humidity: '25.14',
        light: '454',
        co2: '735',
        humidityRatio: '0.00391081168287933',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:53:00',
        temperature: '21.215',
        humidity: '25.215',
        light: '456.5',
        co2: '746.166666666667',
        humidityRatio: '0.00392618773758027',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:54:00',
        temperature: '21.2',
        humidity: '25.2',
        light: '465.25',
        co2: '762.75',
        humidityRatio: '0.00392020418856616',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:55:00',
        temperature: '21.2',
        humidity: '25.2',
        light: '469',
        co2: '766.2',
        humidityRatio: '0.00392020418856616',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:55:59',
        temperature: '21.2',
        humidity: '25.218',
        light: '469',
        co2: '763.4',
        humidityRatio: '0.00392302199524111',
        occupancy: '1'
      },
      {
        date: '2015-02-04 08:57:00',
        temperature: '21.215',
        humidity: '25.2916666666667',
        light: '462.333333333333',
        co2: '773.833333333333',
        humidityRatio: '0.00393820096624668',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:57:59',
        temperature: '21.2',
        humidity: '25.29',
        light: '464',
        co2: '777.75',
        humidityRatio: '0.00393429347565304',
        occupancy: '0'
      },
      {
        date: '2015-02-04 08:58:59',
        temperature: '21.2',
        humidity: '25.3566666666667',
        light: '462.333333333333',
        co2: '778',
        humidityRatio: '0.00394473039355291',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:00:00',
        temperature: '21.2',
        humidity: '25.37',
        light: '470.2',
        co2: '778.4',
        humidityRatio: '0.00394681781889942',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:01:00',
        temperature: '21.2225',
        humidity: '25.34',
        light: '475.75',
        co2: '774.75',
        humidityRatio: '0.00394760269427452',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:02:00',
        temperature: '21.236',
        humidity: '25.33',
        light: '471',
        co2: '774',
        humidityRatio: '0.00394932580355015',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:03:00',
        temperature: '21.29',
        humidity: '25.4725',
        light: '480.25',
        co2: '778',
        humidityRatio: '0.00398494828914425',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:04:00',
        temperature: '21.29',
        humidity: '25.4266666666667',
        light: '487',
        co2: '779',
        humidityRatio: '0.00397773221374547',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:04:59',
        temperature: '21.272',
        humidity: '25.412',
        light: '503.6',
        co2: '780.6',
        humidityRatio: '0.00397100850540684',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:06:00',
        temperature: '21.29',
        humidity: '25.575',
        light: '509.5',
        co2: '786.25',
        humidityRatio: '0.00400108665984332',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:07:00',
        temperature: '21.29',
        humidity: '25.6725',
        light: '527.25',
        co2: '800.75',
        humidityRatio: '0.00401643856518858',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:08:00',
        temperature: '21.34',
        humidity: '25.79',
        light: '524.5',
        co2: '814',
        humidityRatio: '0.0040474111875209',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:08:59',
        temperature: '21.412',
        humidity: '25.872',
        light: '529.8',
        co2: '832',
        humidityRatio: '0.0040784394636053',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:10:00',
        temperature: '21.5',
        humidity: '26',
        light: '534',
        co2: '849.25',
        humidityRatio: '0.00412104996926551',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:10:59',
        temperature: '21.5',
        humidity: '26.08',
        light: '544',
        co2: '860.6',
        humidityRatio: '0.00413381439536776',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:11:59',
        temperature: '21.6',
        humidity: '26.15',
        light: '538',
        co2: '871',
        humidityRatio: '0.00417060301513912',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:13:00',
        temperature: '21.66',
        humidity: '26.216',
        light: '553',
        co2: '879.5',
        humidityRatio: '0.00419667797928421',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:14:00',
        temperature: '21.7',
        humidity: '26.2675',
        light: '542.5',
        co2: '894',
        humidityRatio: '0.0042153452030233',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:15:00',
        temperature: '21.7225',
        humidity: '26.2225',
        light: '547',
        co2: '905.5',
        humidityRatio: '0.0042139062349477',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:16:00',
        temperature: '21.79',
        humidity: '26.39',
        light: '559.2',
        co2: '911.2',
        humidityRatio: '0.00425865716745792',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:16:59',
        temperature: '21.81',
        humidity: '26.274',
        light: '567.8',
        co2: '919.2',
        humidityRatio: '0.00424502903402628',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:17:59',
        temperature: '21.865',
        humidity: '26.315',
        light: '554',
        co2: '923.5',
        humidityRatio: '0.0042661023632274',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:19:00',
        temperature: '21.89',
        humidity: '26.315',
        light: '563',
        co2: '931.75',
        humidityRatio: '0.00427266374639605',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:20:00',
        temperature: '21.89',
        humidity: '26.315',
        light: '564.5',
        co2: '934.75',
        humidityRatio: '0.00427266374639605',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:21:00',
        temperature: '21.945',
        humidity: '26.2225',
        light: '577.5',
        co2: '934.75',
        humidityRatio: '0.00427195690933226',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:22:00',
        temperature: '22',
        humidity: '26.12',
        light: '578.8',
        co2: '939',
        humidityRatio: '0.00426954476696138',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:23:00',
        temperature: '22',
        humidity: '26.0666666666667',
        light: '581.666666666667',
        co2: '936.666666666667',
        humidityRatio: '0.00426076724453117',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:23:59',
        temperature: '22.0857142857143',
        humidity: '26.1285714285714',
        light: '580',
        co2: '936.428571428571',
        humidityRatio: '0.00429349107080348',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:24:59',
        temperature: '22.1',
        humidity: '26.1',
        light: '596',
        co2: '936.5',
        humidityRatio: '0.00429252572916348',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:26:00',
        temperature: '22.1',
        humidity: '26.1',
        light: '594.8',
        co2: '937.6',
        humidityRatio: '0.00429252572916348',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:27:00',
        temperature: '22.14',
        humidity: '25.998',
        light: '603.4',
        co2: '937.8',
        humidityRatio: '0.00428614213832739',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:28:00',
        temperature: '22.2',
        humidity: '26',
        light: '608.25',
        co2: '946',
        humidityRatio: '0.00430227872763771',
        occupancy: '0'
      },
      {
        date: '2015-02-04 09:29:00',
        temperature: '22.29',
        humidity: '25.9633333333333',
        light: '606.666666666667',
        co2: '950.333333333333',
        humidityRatio: '0.00431993869567135',
        occupancy: '0'
      },
      {
        date: '2015-02-04 09:29:59',
        temperature: '22.29',
        humidity: '25.89',
        light: '612',
        co2: '937.333333333333',
        humidityRatio: '0.00430765254338066',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:30:59',
        temperature: '22.29',
        humidity: '25.8566666666667',
        light: '611',
        co2: '943.666666666667',
        humidityRatio: '0.00430206808804728',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:32:00',
        temperature: '22.3233333333333',
        humidity: '25.8066666666667',
        light: '617',
        co2: '946.166666666667',
        humidityRatio: '0.00430247034092601',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:33:00',
        temperature: '22.39',
        humidity: '25.7',
        light: '624.75',
        co2: '944.5',
        humidityRatio: '0.00430209566080886',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:34:00',
        temperature: '22.39',
        humidity: '25.68',
        light: '630.4',
        co2: '944.4',
        humidityRatio: '0.00429872458842353',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:35:00',
        temperature: '22.445',
        humidity: '25.65',
        light: '632.5',
        co2: '948',
        humidityRatio: '0.00430815025504638',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:36:00',
        temperature: '22.5',
        humidity: '25.6666666666667',
        light: '652',
        co2: '940.333333333333',
        humidityRatio: '0.0043255037974044',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:36:59',
        temperature: '22.5',
        humidity: '25.6',
        light: '643.5',
        co2: '944.333333333333',
        humidityRatio: '0.00431419079614889',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:38:00',
        temperature: '22.5666666666667',
        humidity: '25.6',
        light: '648.666666666667',
        co2: '942.166666666667',
        humidityRatio: '0.00433182012264332',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:39:00',
        temperature: '22.6',
        humidity: '25.6',
        light: '767',
        co2: '948.666666666667',
        humidityRatio: '0.00434065857758123',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:40:00',
        temperature: '22.6',
        humidity: '25.4725',
        light: '1419.5',
        co2: '945',
        humidityRatio: '0.00431888995388107',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:40:59',
        temperature: '22.7',
        humidity: '25.5',
        light: '1697.25',
        co2: '951.75',
        humidityRatio: '0.00435009044849769',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:42:00',
        temperature: '22.7',
        humidity: '25.456',
        light: '1209.8',
        co2: '958.6',
        humidityRatio: '0.00434253200619881',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:42:59',
        temperature: '22.7225',
        humidity: '25.4175',
        light: '685.75',
        co2: '956.25',
        humidityRatio: '0.00434188231426183',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:43:59',
        temperature: '22.7675',
        humidity: '25.315',
        light: '684.75',
        co2: '952.25',
        humidityRatio: '0.00433615170348689',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:45:00',
        temperature: '22.79',
        humidity: '25.456',
        light: '679.4',
        co2: '954.6',
        humidityRatio: '0.00436646730195512',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:46:00',
        temperature: '22.8233333333333',
        humidity: '25.3933333333333',
        light: '683',
        co2: '961.666666666667',
        humidityRatio: '0.00436451500523488',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:47:00',
        temperature: '22.89',
        humidity: '25.39',
        light: '692',
        co2: '961.75',
        humidityRatio: '0.00438172787670815',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:48:00',
        temperature: '22.89',
        humidity: '25.39',
        light: '693.8',
        co2: '953.8',
        humidityRatio: '0.00438172787670815',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:49:00',
        temperature: '22.9083333333333',
        humidity: '25.39',
        light: '689',
        co2: '956.333333333333',
        humidityRatio: '0.00438663126822082',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:49:59',
        temperature: '22.9725',
        humidity: '25.39',
        light: '693.75',
        co2: '970',
        humidityRatio: '0.00440383124996745',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:51:00',
        temperature: '23',
        humidity: '25.39',
        light: '686.5',
        co2: '971.25',
        humidityRatio: '0.00441122084993632',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:52:00',
        temperature: '23.025',
        humidity: '25.4175',
        light: '698.25',
        co2: '986.25',
        humidityRatio: '0.00442276727057166',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:53:00',
        temperature: '23.1',
        humidity: '25.5',
        light: '694.833333333333',
        co2: '985',
        humidityRatio: '0.00445755019423801',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:53:59',
        temperature: '23.1',
        humidity: '25.5',
        light: '690',
        co2: '997',
        humidityRatio: '0.00445755019423801',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:55:00',
        temperature: '23.2',
        humidity: '25.5',
        light: '696.8',
        co2: '1003.8',
        humidityRatio: '0.00448477799181549',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:55:59',
        temperature: '23.2',
        humidity: '25.5',
        light: '710',
        co2: '1004.83333333333',
        humidityRatio: '0.00448477799181549',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:56:59',
        temperature: '23.2',
        humidity: '25.5',
        light: '722',
        co2: '1011.4',
        humidityRatio: '0.00448477799181549',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:58:00',
        temperature: '23.29',
        humidity: '25.6',
        light: '732',
        co2: '1022.5',
        humidityRatio: '0.00452722091017869',
        occupancy: '1'
      },
      {
        date: '2015-02-04 09:59:00',
        temperature: '23.29',
        humidity: '25.6',
        light: '735',
        co2: '1029.83333333333',
        humidityRatio: '0.00452722091017869',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:00:00',
        temperature: '23.31',
        humidity: '25.6',
        light: '719.2',
        co2: '1031',
        humidityRatio: '0.00453273230505731',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:01:00',
        temperature: '23.39',
        humidity: '25.6',
        light: '723.333333333333',
        co2: '1040',
        humidityRatio: '0.00455483707490689',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:01:59',
        temperature: '23.365',
        humidity: '25.6',
        light: '729',
        co2: '1040.5',
        humidityRatio: '0.00454791914921006',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:02:59',
        temperature: '23.39',
        humidity: '25.6',
        light: '738',
        co2: '1042',
        humidityRatio: '0.00455483707490689',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:04:00',
        temperature: '23.456',
        humidity: '25.66',
        light: '738',
        co2: '1052.4',
        humidityRatio: '0.00458394228676715',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:05:00',
        temperature: '23.5',
        humidity: '25.718',
        light: '734.4',
        co2: '1062.8',
        humidityRatio: '0.00460667857151887',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:06:00',
        temperature: '23.58',
        humidity: '25.736',
        light: '738',
        co2: '1067.75',
        humidityRatio: '0.00463237796667757',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:07:00',
        temperature: '23.6',
        humidity: '25.89',
        light: '747',
        co2: '1072.25',
        humidityRatio: '0.0046659670837691',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:08:00',
        temperature: '23.64',
        humidity: '25.954',
        light: '745.2',
        co2: '1095.2',
        humidityRatio: '0.00468895881962261',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:08:59',
        temperature: '23.6666666666667',
        humidity: '26.0666666666667',
        light: '746.333333333333',
        co2: '1109',
        humidityRatio: '0.00471709525928931',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:09:59',
        temperature: '23.7',
        humidity: '26.12',
        light: '737.8',
        co2: '1119',
        humidityRatio: '0.00473638946145591',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:11:00',
        temperature: '23.718',
        humidity: '26.1',
        light: '745',
        co2: '1123.4',
        humidityRatio: '0.00473790584115977',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:12:00',
        temperature: '23.79',
        humidity: '26.125',
        light: '740.5',
        co2: '1122.5',
        humidityRatio: '0.0047632311174623',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:13:00',
        temperature: '23.745',
        humidity: '26.2',
        light: '754',
        co2: '1123',
        humidityRatio: '0.00476399300976303',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:14:00',
        temperature: '23.79',
        humidity: '26.31',
        light: '763',
        co2: '1158.2',
        humidityRatio: '0.0047972213207179',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:14:59',
        temperature: '23.79',
        humidity: '26.315',
        light: '758.25',
        co2: '1160.25',
        humidityRatio: '0.00479814002602634',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:15:59',
        temperature: '23.89',
        humidity: '26.39',
        light: '755.5',
        co2: '1166',
        humidityRatio: '0.00484117485260517',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:17:00',
        temperature: '23.89',
        humidity: '26.365',
        light: '758.25',
        co2: '1164.75',
        humidityRatio: '0.00483655300824924',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:18:00',
        temperature: '23.89',
        humidity: '26.29',
        light: '772.75',
        co2: '1163.25',
        humidityRatio: '0.00482268788410749',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:19:00',
        temperature: '23.9842857142857',
        humidity: '26.3757142857143',
        light: '767',
        co2: '1172.71428571429',
        humidityRatio: '0.00486624432774014',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:20:00',
        temperature: '24',
        humidity: '26.365',
        light: '774.5',
        co2: '1182',
        humidityRatio: '0.00486888220360127',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:21:00',
        temperature: '24.05',
        humidity: '26.34',
        light: '774.5',
        co2: '1182',
        humidityRatio: '0.00487897304812946',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:21:59',
        temperature: '24.08',
        humidity: '26.37',
        light: '769.8',
        co2: '1187.6',
        humidityRatio: '0.00489344901185261',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:23:00',
        temperature: '24.1',
        humidity: '26.5666666666667',
        light: '758.333333333333',
        co2: '1191.33333333333',
        humidityRatio: '0.0049362032071249',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:24:00',
        temperature: '24.1',
        humidity: '26.4725',
        light: '775.75',
        co2: '1213.75',
        humidityRatio: '0.00491856827026637',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:25:00',
        temperature: '24.1',
        humidity: '26.154',
        light: '775',
        co2: '1194',
        humidityRatio: '0.00485892895958963',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:25:59',
        temperature: '24.1',
        humidity: '25.958',
        light: '783.4',
        co2: '1173.4',
        humidityRatio: '0.00482223348496531',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:27:00',
        temperature: '24.1',
        humidity: '25.918',
        light: '789.6',
        co2: '1160.2',
        humidityRatio: '0.0048147451404422',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:27:59',
        temperature: '24.1',
        humidity: '25.8925',
        light: '797.5',
        co2: '1156.25',
        humidityRatio: '0.0048099714141955',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:28:59',
        temperature: '24.1',
        humidity: '25.832',
        light: '799',
        co2: '1139',
        humidityRatio: '0.00479864580556749',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:30:00',
        temperature: '24.175',
        humidity: '25.84',
        light: '782.5',
        co2: '1140.5',
        humidityRatio: '0.00482196327497705',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:31:00',
        temperature: '24.2',
        humidity: '25.8916666666667',
        light: '786.166666666667',
        co2: '1145.33333333333',
        humidityRatio: '0.00483898711768363',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:32:00',
        temperature: '24.2',
        humidity: '25.89',
        light: '794.25',
        co2: '1149.25',
        humidityRatio: '0.00483867320518602',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:33:00',
        temperature: '24.2',
        humidity: '25.89',
        light: '797.5',
        co2: '1152.5',
        humidityRatio: '0.00483867320518602',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:34:00',
        temperature: '24.2',
        humidity: '25.89',
        light: '787',
        co2: '1153.25',
        humidityRatio: '0.00483867320518602',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:34:59',
        temperature: '24.218',
        humidity: '25.912',
        light: '805',
        co2: '1152.4',
        humidityRatio: '0.0048480885145136',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:36:00',
        temperature: '24.26',
        humidity: '25.8916666666667',
        light: '798',
        co2: '1146.16666666667',
        humidityRatio: '0.00485656490522074',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:37:00',
        temperature: '24.29',
        humidity: '25.978',
        light: '793',
        co2: '1145.4',
        humidityRatio: '0.00488172534996697',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:38:00',
        temperature: '24.29',
        humidity: '25.852',
        light: '801.4',
        co2: '1140.8',
        humidityRatio: '0.00485786279907514',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:38:59',
        temperature: '24.29',
        humidity: '25.7',
        light: '808',
        co2: '1150.25',
        humidityRatio: '0.00482907864729539',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:40:00',
        temperature: '24.33',
        humidity: '25.736',
        light: '809.8',
        co2: '1129.2',
        humidityRatio: '0.00484759240740331',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:40:59',
        temperature: '24.33',
        humidity: '25.7',
        light: '817',
        co2: '1125.8',
        humidityRatio: '0.00484075873127256',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:41:59',
        temperature: '24.3566666666667',
        humidity: '25.7',
        light: '813',
        co2: '1123',
        humidityRatio: '0.00484855928127551',
        occupancy: '1'
      },
      {
        date: '2015-02-04 10:43:00',
        temperature: '24.4083333333333',
        humidity: '25.6816666666667',
        light: '798',
        co2: '1124',
        humidityRatio: '0.00486020770362199',
        occupancy: '1'
      }
    ];
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

    this.dataModelMin = 0;
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
    this.dataLight = [];
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

        this.dataLight.push(item.light);
      }
    }

    this.chartDatasets = [{ data: this.dataLight, label: 'Light' }];
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
  }
}
