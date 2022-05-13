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

  constructor(private target: ViewContainerRef) {
    this.setPosition('relative')

    this.loading$.subscribe((loading) => this.onLoadChange(loading))
  }

  ngOnDestroy(): void {
    this.loading$.complete()
  }

  private onLoadChange(loading: boolean): void {
    const overlay = this.parent?.querySelector('app-load-overlay')

    if (!loading) {
      return void overlay?.remove()
    }

    if (!overlay) {
      return void this.target.createComponent(LoadOverlayComponent)
    }

  }

  private setPosition(value: string) {
    this.parent?.style.setProperty('position', value)
  }

  private getPosition() {
    return this.parent?.style.position
  }
}
