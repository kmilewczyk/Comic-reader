import { Injectable } from '@angular/core'
import { Theme } from '@app/core/_enums'
import { Dispatchable } from '@app/core/_models';
import { EMPTY, Observable, of } from 'rxjs';
import { ConfigChangeDispatcherService } from '../config-change-dispatcher/config-change-dispatcher.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements Dispatchable {
  constructor() {}

  setDispatch(dispatcher: ConfigChangeDispatcherService) {
    dispatcher.register('ui.theme', (theme) => this.setTheme(theme))
  }

  async setTheme(theme: Theme): Promise<void> {
    switch (theme) {
      case Theme.Dark:
        document.querySelector('body')?.classList.add('dark-theme');
        break
      case Theme.Light:
        document.querySelector('body')?.classList.remove('dark-theme');
        break
    }
  }
}
