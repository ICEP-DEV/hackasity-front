import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackertimeslotComponent } from './hackertimeslot.component';

describe('HackertimeslotComponent', () => {
  let component: HackertimeslotComponent;
  let fixture: ComponentFixture<HackertimeslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackertimeslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackertimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
