import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEditComponent } from './signup-edit.component';

describe('SignupEditComponent', () => {
  let component: SignupEditComponent;
  let fixture: ComponentFixture<SignupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
