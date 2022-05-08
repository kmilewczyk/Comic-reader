import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CONFIG_FEATURE_NAME } from './consts'
import { UserConfiguration } from './models'

export type StoreConfigSlice = {
  [CONFIG_FEATURE_NAME]: UserConfiguration,
}

export const selectConfig = createFeatureSelector<UserConfiguration>(CONFIG_FEATURE_NAME)

export const selectConfigKey = (props: { key: keyof UserConfiguration }) =>
  createSelector(selectConfig, (config) => config[props.key])
