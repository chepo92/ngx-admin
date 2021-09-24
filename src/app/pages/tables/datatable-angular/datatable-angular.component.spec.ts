import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableAngularComponent } from './datatable-angular.component';

describe('DatatableAngularComponent', () => {
  let component: DatatableAngularComponent;
  let fixture: ComponentFixture<DatatableAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
