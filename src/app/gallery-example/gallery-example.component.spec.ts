import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryExampleComponent } from './gallery-example.component';

describe('GalleryExampleComponent', () => {
  let component: GalleryExampleComponent;
  let fixture: ComponentFixture<GalleryExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
