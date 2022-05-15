import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { appImports } from './app-imports';

@NgModule({
  declarations: [AppComponent],
  imports: appImports,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
