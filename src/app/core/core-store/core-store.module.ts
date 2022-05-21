import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { configReducer } from '@app/store/config/config.reducers'
import { CONFIG_FEATURE_NAME, defaultConfiguration } from '@app/store/config/consts'
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './config.effects'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CONFIG_FEATURE_NAME, configReducer, {
      initialState: defaultConfiguration,
    }),
    EffectsModule.forFeature([ConfigEffects])
  ],
  exports: [StoreModule],
})
export class CoreStoreModule {}
