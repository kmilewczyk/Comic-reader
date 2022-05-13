import { Component } from '@angular/core'
import { ComponentFixture, TestBed, TestBedStatic } from '@angular/core/testing'
import { LoadOverlayComponent } from './load-overlay.component'
import { LoadOverlayDirective } from './load-overlay.directive'
import { LoaderOverlayModule } from './loader-overlay.module'

@Component({
  template: `
    <div id="parent-div" style="position: fixed">
      <div id="test-div" [appLoadOverlay]="showOverlay">content</div>
    </div>
  `,
})
class TestComponent {
  showOverlay = false
}

describe('LoadOverlayDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let testDiv: HTMLDivElement
  let parentDiv: HTMLDivElement

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [LoaderOverlayModule],
      declarations: [TestComponent],
    }).createComponent(TestComponent)

    fixture.detectChanges()

    testDiv = fixture.debugElement.nativeElement.querySelector('#test-div')
    parentDiv = fixture.debugElement.nativeElement.querySelector('#parent-div')
  })

  it('adds "position: relative" to the parent', () => {
    expect(parentDiv.style.position).toEqual('relative')
  })

  it('adds and removes overlay on the value changes', () => {
    fixture.componentInstance.showOverlay = true
    fixture.detectChanges()
    let overlay = parentDiv.querySelectorAll('app-load-overlay')
    expect(overlay.length).toEqual(1)

    fixture.componentInstance.showOverlay = true
    fixture.detectChanges()
    overlay = parentDiv.querySelectorAll('app-load-overlay')
    expect(overlay.length).toEqual(1)

    fixture.componentInstance.showOverlay = false
    fixture.detectChanges()
    overlay = parentDiv.querySelectorAll('app-load-overlay')
    expect(overlay.length).toEqual(0)
  })
})
