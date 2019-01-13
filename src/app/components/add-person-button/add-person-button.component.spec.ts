import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonButtonComponent } from './add-person-button.component';

describe('AddPersonButtonComponent', () => {
  let component: AddPersonButtonComponent;
  let fixture: ComponentFixture<AddPersonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
