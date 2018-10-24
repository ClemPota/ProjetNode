import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePComponent } from './create-p.component';

describe('CreatePComponent', () => {
  let component: CreatePComponent;
  let fixture: ComponentFixture<CreatePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
