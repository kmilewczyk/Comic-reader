import { Directive, Input, OnDestroy, ViewContainerRef } from '@angular/core'
import { distinct, Subject } from 'rxjs'
import { LoadOverlayComponent } from './load-overlay.component'

@Directive({
  selector: '[appLoadOverlay]',
})
export class LoadOverlayDirective implements OnDestroy {
  @Input() set appLoadOverlay(loading: boolean) {
    this.loading$.next(loading)
  }

  private loading$ = new Subject<boolean>()
  private element: HTMLElement | null = this.target.element.nativeElement;
  private parent?: HTMLElement | null = this.element?.parentElement;
  private overlay?: HTMLElement;

  constructor(private target: ViewContainerRef) {
    this.setPosition('relative')

    this.loading$.subscribe((loading) => this.onLoadChange(loading))
  }

  ngOnDestroy(): void {
    this.loading$.complete()
  }

  private onLoadChange(loading: boolean): void {
    if (!loading) {
      return void this.overlay?.remove()
    }

    if (!this.overlay) {
      this.overlay = this.target.createComponent(LoadOverlayComponent).location.nativeElement;
    }
  }

  private setPosition(value: string) {
    this.parent?.style.setProperty('position', value)
  }
}
