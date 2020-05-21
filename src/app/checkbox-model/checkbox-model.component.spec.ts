import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxModelComponent } from './checkbox-model.component';

describe('CheckboxModelComponent', () => {
  let component: CheckboxModelComponent;
  let fixture: ComponentFixture<CheckboxModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
