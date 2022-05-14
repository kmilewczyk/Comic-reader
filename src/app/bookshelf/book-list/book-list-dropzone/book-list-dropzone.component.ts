import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  NgZone,
  OnDestroy,
} from '@angular/core'
import { debounceTime, Subject, tap } from 'rxjs'
import { OpacityFade, opacityFade } from '../../../misc/_animations/opacity-fade.animation'

@Component({
  selector: 'app-book-list-dropzone',
  templateUrl: './book-list-dropzone.component.html',
  styleUrls: ['./book-list-dropzone.component.scss'],
  animations: [opacityFade],
})
export class BookListDropzoneComponent implements OnDestroy {
  visible: boolean = false

  private dragover$ = new Subject<void>()

  constructor(private zone: NgZone, private hostRef: ElementRef) {
    this.updateOnDropdownVisibility()
    this.initOutOfZoneListners()
  }

  ngOnDestroy(): void {
    this.dragover$.complete()
  }

  // NOTE: Run out of Angular
  private updateOnDropdownVisibility() {
    const setVisible = () => {
      if (!this.visible) {
        this.zone.run(() => (this.visible = true))
      }
    }

    const setHide = () => this.zone.run(() => (this.visible = false))

    this.dragover$.pipe(tap(setVisible), debounceTime(100)).subscribe(setHide)
  }

  private initOutOfZoneListners() {
    const host: HTMLElement = this.hostRef.nativeElement

    this.zone.runOutsideAngular(() => {
      host.addEventListener('dragover', (event) => this.onDragOver(event))
      host.addEventListener('drop', (event) => this.onDrop(event))
    })
  }

  private onDragOver(event: DragEvent) {
    event.preventDefault()
    event.stopImmediatePropagation()
    this.dragover$.next()
  }

  private onDrop(event: DragEvent) {
    event.preventDefault()
    event.stopImmediatePropagation()
    console.log('drop')
  }
}
