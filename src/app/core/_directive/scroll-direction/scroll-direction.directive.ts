import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { debounceTime, distinct, mergeAll, of, Subject, tap, throttle } from 'rxjs'
import { ScrollDirectionService } from './scroll-direction.service'

export enum Scroll {
  Up,
  Down,
}

@Directive({
  selector: '[appScrollDirection]',
})
export class ScrollDirectionDirective implements OnInit, OnDestroy {
  @Input() appScrollDirection?: string

  private scrolled$ = new Subject<Scroll>()

  constructor(
    private hostRef: ElementRef,
    private zone: NgZone,
    private scrollService: ScrollDirectionService
  ) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => this.initDirective())
  }

  ngOnDestroy(): void {
    this.scrollService.unregister(this.appScrollDirection!)
    this.scrolled$.complete()
  }

  private initDirective() {
    const host: HTMLElement | null = this.hostRef.nativeElement

    let previousScrollY: number
    let currentScrollY: number
    let waitFromAnimationFrame = false

    const onScroll = () => {
      const direction = currentScrollY - previousScrollY > 0 ? Scroll.Down : Scroll.Up
      this.scrolled$.next(direction)
      previousScrollY = currentScrollY
      waitFromAnimationFrame = false
    }

    const scrollListener = (event: Event) => {
      event.stopImmediatePropagation()

      currentScrollY = host!.scrollTop

      if (!waitFromAnimationFrame) {
        waitFromAnimationFrame = true
        window.requestAnimationFrame(onScroll)
      }
    }

    host?.addEventListener('scroll', scrollListener)

    this.updateOutputs()
  }

  private updateOutputs() {
    if (!this.appScrollDirection) {
      throw 'No value passed to the ScrollDirectionDirective'
    }

    const { scrolled } = this.scrollService.register(this.appScrollDirection)

    const scrollStop$ = this.scrolled$.pipe(debounceTime(100))

    const scrollStart$ = this.scrolled$.pipe(throttle(() => scrollStop$))

    const changedDirection$ = this.scrolled$.pipe(distinct())

    of(scrollStart$, changedDirection$)
      .pipe(mergeAll())
      .subscribe((direction) => this.zone.run(() => scrolled(direction)))
  }
}
