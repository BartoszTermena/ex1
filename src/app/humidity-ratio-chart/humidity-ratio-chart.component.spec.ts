import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityRatioChartComponent } from './humidity-ratio-chart.component';

describe('HumidityRatioChartComponent', () => {
  let component: HumidityRatioChartComponent;
  let fixture: ComponentFixture<HumidityRatioChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityRatioChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityRatioChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
