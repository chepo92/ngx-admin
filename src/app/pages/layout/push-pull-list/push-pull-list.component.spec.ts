import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushPullListComponent } from './push-pull-list.component';

describe('PushPullListComponent', () => {
  let component: PushPullListComponent;
  let fixture: ComponentFixture<PushPullListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushPullListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushPullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
