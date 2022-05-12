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
  private originalPosition?: string

  constructor(private target: ViewContainerRef) {
    this.originalPosition = this.getPosition();

    this.setPosition('relative')

    this.loading$.pipe(distinct()).subscribe((loading) => this.onLoadChange(loading))
  }

  ngOnDestroy(): void {
    this.loading$.complete()

    if (this.originalPosition) this.setPosition(this.originalPosition)
  }

  private onLoadChange(loading: boolean): void {
    const overlay = this.element?.querySelector('app-load-overlay')

    if (loading && !overlay) {
      return void this.target.createComponent(LoadOverlayComponent)
    }

    overlay?.remove()
  }

  private setPosition(value: string) {
    this.element?.parentElement?.style.setProperty('position', value)
  }

  private getPosition() {
    return this.element?.parentElement?.style.position
  }
}
