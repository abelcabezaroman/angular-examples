import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForExampleComponent } from './for-example.component';

describe('ForExampleComponent', () => {
  let component: ForExampleComponent;
  let fixture: ComponentFixture<ForExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
