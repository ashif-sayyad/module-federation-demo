import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenessPageComponent } from './responsiveness-page.component';

describe('ResponsivenessPageComponent', () => {
  let component: ResponsivenessPageComponent;
  let fixture: ComponentFixture<ResponsivenessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivenessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivenessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
