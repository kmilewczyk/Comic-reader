import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarExampleViewComponent } from './side-bar-example-view.component';

describe('SideBarExampleViewComponent', () => {
  let component: SideBarExampleViewComponent;
  let fixture: ComponentFixture<SideBarExampleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarExampleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarExampleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
