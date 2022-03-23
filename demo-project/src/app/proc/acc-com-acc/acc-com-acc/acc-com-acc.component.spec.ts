import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccComAccComponent } from './acc-com-acc.component';

describe('AccComAccComponent', () => {
  let component: AccComAccComponent;
  let fixture: ComponentFixture<AccComAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccComAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccComAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
