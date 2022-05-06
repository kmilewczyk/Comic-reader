import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleButtonToggleComponent } from './example-button-toggle.component';

describe('ExampleButtonToggleComponent', () => {
  let component: ExampleButtonToggleComponent;
  let fixture: ComponentFixture<ExampleButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleButtonToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
