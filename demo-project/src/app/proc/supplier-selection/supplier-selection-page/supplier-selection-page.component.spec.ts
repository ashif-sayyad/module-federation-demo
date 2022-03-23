import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSelectionPageComponent } from './supplier-selection-page.component';

describe('SupplierSelectionPageComponent', () => {
  let component: SupplierSelectionPageComponent;
  let fixture: ComponentFixture<SupplierSelectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierSelectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
