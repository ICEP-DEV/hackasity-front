import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerslotsComponent } from './hackerslots.component';

describe('HackerslotsComponent', () => {
  let component: HackerslotsComponent;
  let fixture: ComponentFixture<HackerslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerslotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
