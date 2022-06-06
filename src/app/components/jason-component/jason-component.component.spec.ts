import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasonComponentComponent } from './jason-component.component';

describe('JasonComponentComponent', () => {
  let component: JasonComponentComponent;
  let fixture: ComponentFixture<JasonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JasonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
