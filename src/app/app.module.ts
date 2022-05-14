import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { appImports } from './app-imports';
import { ScrollDirectionDirective } from './core/_directive/scroll-direction/scroll-direction.directive';

@NgModule({
  declarations: [AppComponent, ScrollDirectionDirective],
  imports: appImports,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
