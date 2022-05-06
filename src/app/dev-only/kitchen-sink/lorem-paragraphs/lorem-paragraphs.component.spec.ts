import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremParagraphsComponent } from './lorem-paragraphs.component';

describe('LoremParagraphsComponent', () => {
  let component: LoremParagraphsComponent;
  let fixture: ComponentFixture<LoremParagraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoremParagraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremParagraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
