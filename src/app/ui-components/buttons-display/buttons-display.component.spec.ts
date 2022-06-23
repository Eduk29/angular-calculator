import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDisplayComponent } from './buttons-display.component';

describe('ButtonsDisplayComponent', () => {
  let component: ButtonsDisplayComponent;
  let fixture: ComponentFixture<ButtonsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
