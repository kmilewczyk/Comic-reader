import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScrollDirectionDirective } from './scroll-direction.directive'

@NgModule({
  declarations: [ScrollDirectionDirective],
  imports: [CommonModule],
  exports: [ScrollDirectionDirective],
})
export class ScrollDirectionModule {}
