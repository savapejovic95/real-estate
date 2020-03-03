import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateFormComponent } from './real-estate-form.component';

describe('RealEstateFormComponent', () => {
  let component: RealEstateFormComponent;
  let fixture: ComponentFixture<RealEstateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
