import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooDetailsComponent } from './foo-details.component';

describe('FooDetailsComponent', () => {
  let component: FooDetailsComponent;
  let fixture: ComponentFixture<FooDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
