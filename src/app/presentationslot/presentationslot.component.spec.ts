import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationslotComponent } from './presentationslot.component';

describe('PresentationslotComponent', () => {
  let component: PresentationslotComponent;
  let fixture: ComponentFixture<PresentationslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
