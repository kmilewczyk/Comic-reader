import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, Output } from '@angular/core'
import { Subject } from 'rxjs'

@Directive({
  selector: '[appScrollDirection]',
})
export class ScrollDirectionDirective implements OnDestroy {
  @Output() scrollUp = new EventEmitter<void>()
  @Output() scrollDown = new EventEmitter<void>()
  @Output() scrollStop = new EventEmitter<void>()

  private scrolled$ = new Subject<void>()

  constructor(private hostRef: ElementRef, private zone: NgZone) {
    this.zone.runOutsideAngular(() => this.initDirective());
  }

  ngOnDestroy(): void {
    this.scrolled$.complete()
  }

  private initDirective() {
    const host: HTMLElement | null = this.hostRef.nativeElement

    let previousScrollY: number
    let currentScrollY: number

    const onScroll = () => {
      // TODO: Here

      previousScrollY = currentScrollY
    }

    const scrollListener = (event: Event) => {
      currentScrollY = host!.scrollTop;
      window.requestAnimationFrame(onScroll)
    }
    
    host?.addEventListener('scroll', scrollListener)
  }
}
