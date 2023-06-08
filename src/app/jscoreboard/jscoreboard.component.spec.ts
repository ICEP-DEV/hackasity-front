import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JscoreboardComponent } from './jscoreboard.component';

describe('JscoreboardComponent', () => {
  let component: JscoreboardComponent;
  let fixture: ComponentFixture<JscoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JscoreboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JscoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
