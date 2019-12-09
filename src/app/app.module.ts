import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChartsModule } from './chart/chart.module';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { HumidityChartComponent } from './humidity-chart/humidity-chart.component';

//material
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { Ng5SliderModule } from 'ng5-slider';
import { LightChartComponent } from './light-chart/light-chart.component';
import { Co2ChartComponent } from './co2-chart/co2-chart.component';
import { HumidityRatioChartComponent } from './humidity-ratio-chart/humidity-ratio-chart.component';
import { FullChartComponent } from './full-chart/full-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureChartComponent,
    HumidityChartComponent,
    LightChartComponent,
    Co2ChartComponent,
    HumidityRatioChartComponent,
    FullChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    ChartsModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
