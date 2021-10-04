import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushPullTableComponent } from './push-pull-table.component';

describe('PushPullTableComponent', () => {
  let component: PushPullTableComponent;
  let fixture: ComponentFixture<PushPullTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushPullTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushPullTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
