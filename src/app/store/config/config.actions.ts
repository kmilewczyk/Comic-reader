import { createAction, props } from '@ngrx/store'
import { UserConfiguration } from './models'

const changeConfig = createAction(
  '[Config] Change configuration',
  props<Partial<UserConfiguration>>()
)

const changeSuccess = createAction('[Config] Config changed succefully')

const changeFailure = createAction('[Config] Configed change failed')

export const ConfigApiActions = {
  ChangeConfig: changeConfig,
  ChangeConfigSuccess: changeSuccess,
  ChangeConfigFailure: changeFailure,
}
