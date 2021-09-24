import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHtmlTableComponent } from './smart-html-table.component';

describe('SmartHtmlTableComponent', () => {
  let component: SmartHtmlTableComponent;
  let fixture: ComponentFixture<SmartHtmlTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartHtmlTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartHtmlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
