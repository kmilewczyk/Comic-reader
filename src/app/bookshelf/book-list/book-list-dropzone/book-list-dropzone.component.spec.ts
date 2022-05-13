import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDropzoneComponent } from './book-list-dropzone.component';

describe('BookListDropzoneComponent', () => {
  let component: BookListDropzoneComponent;
  let fixture: ComponentFixture<BookListDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListDropzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
