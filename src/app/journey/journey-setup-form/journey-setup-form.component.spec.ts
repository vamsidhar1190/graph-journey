import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySetupFormComponent } from './journey-setup-form.component';

describe('JourneySetupFormComponent', () => {
  let component: JourneySetupFormComponent;
  let fixture: ComponentFixture<JourneySetupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneySetupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneySetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
