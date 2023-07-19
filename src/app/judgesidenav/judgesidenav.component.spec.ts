import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesidenavComponent } from './judgesidenav.component';

describe('JudgesidenavComponent', () => {
  let component: JudgesidenavComponent;
  let fixture: ComponentFixture<JudgesidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgesidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgesidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
