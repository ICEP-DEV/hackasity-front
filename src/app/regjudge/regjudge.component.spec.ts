import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegjudgeComponent } from './regjudge.component';

describe('RegjudgeComponent', () => {
  let component: RegjudgeComponent;
  let fixture: ComponentFixture<RegjudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegjudgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegjudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
