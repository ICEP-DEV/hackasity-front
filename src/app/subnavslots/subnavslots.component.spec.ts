import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavslotsComponent } from './subnavslots.component';

describe('SubnavslotsComponent', () => {
  let component: SubnavslotsComponent;
  let fixture: ComponentFixture<SubnavslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnavslotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnavslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
