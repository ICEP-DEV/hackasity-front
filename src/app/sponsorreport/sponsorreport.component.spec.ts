import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorreportComponent } from './sponsorreport.component';

describe('SponsorreportComponent', () => {
  let component: SponsorreportComponent;
  let fixture: ComponentFixture<SponsorreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
