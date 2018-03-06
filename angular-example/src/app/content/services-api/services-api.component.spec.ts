import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesApiComponent } from './services-api.component';

describe('ServicesApiComponent', () => {
  let component: ServicesApiComponent;
  let fixture: ComponentFixture<ServicesApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
