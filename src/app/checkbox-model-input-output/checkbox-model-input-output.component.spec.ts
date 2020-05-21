import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxModelInputOutputComponent } from './checkbox-model-input-output.component';

describe('CheckboxModelInputOutputComponent', () => {
  let component: CheckboxModelInputOutputComponent;
  let fixture: ComponentFixture<CheckboxModelInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxModelInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxModelInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
