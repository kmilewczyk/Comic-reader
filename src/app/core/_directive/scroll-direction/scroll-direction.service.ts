import { Injectable, OnDestroy } from '@angular/core'
import { defer, first, map, Observable, shareReplay, Subject, switchMap, take } from 'rxjs'
import { Scroll as ScrollDirection } from './scroll-direction.directive'

interface ScrollListener {
  subject: Subject<ScrollDirection>
  scroll$: Observable<ScrollDirection>
}

@Injectable({
  providedIn: 'root',
})
export class ScrollDirectionService implements OnDestroy {
  private scrollListeners: Record<string, ScrollListener> = {}
  private newListener$ = new Subject<string>()

  ngOnDestroy(): void {
    Object.values(this.scrollListeners).forEach((listener) => listener.subject.complete())
    this.newListener$.complete()
  }

  scroll$(key: string) {
    return defer(() => this.onScrollSubscription(key))
  }

  register(key: string) {
    if (this.scrollListeners[key])
      throw `Failed to register a scroll listener. Listener with the key "${key}" already exists.`

    const subject = new Subject<ScrollDirection>()
    const scroll$ = subject.pipe(shareReplay())
    this.scrollListeners[key] = { subject, scroll$ }

    this.newListener$.next(key)

    return {
      scrolled: (direction: ScrollDirection) => this.scrollListeners[key].subject.next(direction),
    }
  }

  unregister(key: string) {
    this.scrollListeners[key]?.subject.complete()
  }

  private onScrollSubscription(key: string) {
    const listener = this.scrollListeners[key]

    if (listener) return listener.scroll$

    return this.newListener$.pipe(
      first((listenerKey) => listenerKey === key),
      switchMap((key) => this.scrollListeners[key].scroll$)
    )
  }
}
