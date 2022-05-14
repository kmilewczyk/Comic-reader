import { Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core'
import { debounce, debounceTime, delay, of, Subject, switchMap, tap } from 'rxjs'
import { OpacityFade, opacityFade } from './opacity-fade.animation'

@Component({
  selector: 'app-book-list-dropzone',
  templateUrl: './book-list-dropzone.component.html',
  styleUrls: ['./book-list-dropzone.component.scss'],
  animations: [opacityFade],
})
export class BookListDropzoneComponent implements OnDestroy {
  visible: OpacityFade = OpacityFade.Hide

  private flashVisible$ = new Subject<void>()

  constructor() {
    this.flashVisible$
      .pipe(
        tap((_) => {
          // TODO: Check if the if does anything
          if (this.visible === OpacityFade.Hide) this.visible = OpacityFade.Visible
        }),
        debounceTime(100)
      )
      .subscribe((_) => {
        this.visible = OpacityFade.Hide
      })
  }

  ngOnDestroy(): void {
    this.flashVisible$.complete()
  }

  @HostBinding('@appOpacityFade')
  get changeVisibility() {
    return this.visible
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    // TODO: check if file
    event.preventDefault()
    this.flashVisible$.next()
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault()
    console.log('drop')
  }
}
