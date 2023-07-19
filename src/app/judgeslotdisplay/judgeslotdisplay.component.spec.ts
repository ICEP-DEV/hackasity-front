import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeslotdisplayComponent } from './judgeslotdisplay.component';

describe('JudgeslotdisplayComponent', () => {
  let component: JudgeslotdisplayComponent;
  let fixture: ComponentFixture<JudgeslotdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgeslotdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeslotdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
