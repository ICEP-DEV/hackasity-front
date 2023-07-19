import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsonComponent } from './whatson.component';

describe('WhatsonComponent', () => {
  let component: WhatsonComponent;
  let fixture: ComponentFixture<WhatsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
