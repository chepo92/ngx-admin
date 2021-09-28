import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMatTableComponent } from './crud-mat-table.component';

describe('CrudMatTableComponent', () => {
  let component: CrudMatTableComponent;
  let fixture: ComponentFixture<CrudMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
