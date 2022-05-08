import { createReducer, on } from '@ngrx/store'
import { ConfigApiActions } from './config.actions'
import { defaultConfiguration } from './consts'

export const configReducer = createReducer(
  defaultConfiguration,
  on(ConfigApiActions.ChangeConfig, (state, { type, ...change}) => ({ ...state, ...change }))
)
