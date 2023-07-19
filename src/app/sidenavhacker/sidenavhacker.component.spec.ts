import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavhackerComponent } from './sidenavhacker.component';

describe('SidenavhackerComponent', () => {
  let component: SidenavhackerComponent;
  let fixture: ComponentFixture<SidenavhackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavhackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavhackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
