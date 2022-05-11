import { Injectable } from '@angular/core'
import { ConfigApiActions } from '@app/store/config/config.actions'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { defaultIfEmpty, exhaustMap, ignoreElements, mergeAll, of, tap } from 'rxjs'
import { ConfigChangeDispatcherService } from './config-change-dispatcher/config-change-dispatcher.service'
import { ThemeService } from './theme-service/theme.service'



@Injectable()
export class ConfigEffects {
  changeConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfigApiActions.ChangeConfig),
      exhaustMap((action) => {
        const { type, ...change } = action
        return this.dispatcher.dispatch(change)
      }),
      ignoreElements(),
      defaultIfEmpty(ConfigApiActions.ChangeConfigSuccess())
    )
  )

  constructor(
    private actions$: Actions,
    private dispatcher: ConfigChangeDispatcherService,
    private themeService: ThemeService,
  ) {
    this.themeService.setDispatch(dispatcher);
  }
}
