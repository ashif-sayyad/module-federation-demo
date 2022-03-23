import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultsPageComponent } from './defaults-page.component';

describe('DefaultsPageComponent', () => {
  let component: DefaultsPageComponent;
  let fixture: ComponentFixture<DefaultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
