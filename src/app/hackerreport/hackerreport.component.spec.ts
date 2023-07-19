import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerreportComponent } from './hackerreport.component';

describe('HackerreportComponent', () => {
  let component: HackerreportComponent;
  let fixture: ComponentFixture<HackerreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
