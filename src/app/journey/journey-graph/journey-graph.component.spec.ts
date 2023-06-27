import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyGraphComponent } from './journey-graph.component';

describe('JourneyGraphComponent', () => {
  let component: JourneyGraphComponent;
  let fixture: ComponentFixture<JourneyGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
