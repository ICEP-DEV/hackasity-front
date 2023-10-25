import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgedashComponent } from './judgedash.component';

describe('JudgedashComponent', () => {
  let component: JudgedashComponent;
  let fixture: ComponentFixture<JudgedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
