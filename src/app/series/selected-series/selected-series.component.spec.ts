import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSeriesComponent } from './selected-series.component';

describe('SelectedSeriesComponent', () => {
  let component: SelectedSeriesComponent;
  let fixture: ComponentFixture<SelectedSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
