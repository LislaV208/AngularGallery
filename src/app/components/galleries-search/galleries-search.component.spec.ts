import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesSearchComponent } from './galleries-search.component';

describe('GalleriesSearchComponent', () => {
  let component: GalleriesSearchComponent;
  let fixture: ComponentFixture<GalleriesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
