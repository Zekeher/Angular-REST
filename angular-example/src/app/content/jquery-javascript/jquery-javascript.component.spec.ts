import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryJavascriptComponent } from './jquery-javascript.component';

describe('JqueryJavascriptComponent', () => {
  let component: JqueryJavascriptComponent;
  let fixture: ComponentFixture<JqueryJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
