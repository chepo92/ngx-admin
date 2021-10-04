import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushPullComponent } from './push-pull.component';

describe('PushPullComponent', () => {
  let component: PushPullComponent;
  let fixture: ComponentFixture<PushPullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushPullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushPullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
