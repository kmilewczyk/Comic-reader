import { Injectable } from '@angular/core'
import { Dispatcher } from '@app/core/models'
import { UserConfiguration } from '@app/store/config/models'
import { filter, map, mergeAll, Observable, of } from 'rxjs'

type ConfigKey = keyof UserConfiguration

type ConfigValue<T extends ConfigKey> = UserConfiguration[T]

type ChangeCallbackReturn = Observable<void>

type ChangeCallback<T> = (configValue: T) => ChangeCallbackReturn

type CallbackMap<T extends ConfigKey> = Partial<Record<T, ChangeCallback<ConfigValue<T>>>>

@Injectable({
  providedIn: 'root',
})
export class ConfigChangeDispatcherService implements Dispatcher {
  changeCallbacks: CallbackMap<ConfigKey> = {}

  constructor() {}

  register<T extends ConfigKey>(configKey: T, callback: ChangeCallback<ConfigValue<T>>) {
    // Without the 'as' typescript gets aneurysm.
    this.changeCallbacks[configKey] = callback as ChangeCallback<ConfigValue<ConfigKey>>;
  }

  dispatch(change: Partial<UserConfiguration>): ChangeCallbackReturn {
    const keys = Object.keys(change) as ConfigKey[]
    return of(...keys).pipe(
      filter((key) => key in this.changeCallbacks),
      map((key) => this.changeCallbacks[key]!(change[key]!)),
      mergeAll()
    )
  }
}
