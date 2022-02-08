import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesStartComponent } from './series-start.component';

describe('SeriesStartComponent', () => {
  let component: SeriesStartComponent;
  let fixture: ComponentFixture<SeriesStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
