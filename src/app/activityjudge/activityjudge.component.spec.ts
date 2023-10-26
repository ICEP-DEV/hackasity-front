import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityjudgeComponent } from './activityjudge.component';

describe('ActivityjudgeComponent', () => {
  let component: ActivityjudgeComponent;
  let fixture: ComponentFixture<ActivityjudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityjudgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityjudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
