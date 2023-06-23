import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgereportComponent } from './judgereport.component';

describe('JudgereportComponent', () => {
  let component: JudgereportComponent;
  let fixture: ComponentFixture<JudgereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
