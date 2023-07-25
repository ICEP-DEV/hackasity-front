import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordscreenComponent } from './recordscreen.component';

describe('RecordscreenComponent', () => {
  let component: RecordscreenComponent;
  let fixture: ComponentFixture<RecordscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
