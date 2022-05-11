import { Injectable } from '@angular/core'
import { Dispatcher } from '@app/core/models'
import { UserConfiguration } from '@app/store/config/models'
import { catchError, filter, map, mergeAll, Observable, of } from 'rxjs'

export enum DisptachErrorType {
  NoCallbacks = 'no_callbacks_error',
  CallbackError = 'dispatcher_error',
}

export interface DispatchError {
  type: DisptachErrorType
  error: Error
}

type ConfigKey = keyof UserConfiguration

type ConfigValue<T extends ConfigKey> = UserConfiguration[T]

type ChangeCallbackReturn = Promise<void>
type DispatchObservable = Observable<void>

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
    this.changeCallbacks[configKey] = callback as ChangeCallback<ConfigValue<ConfigKey>>
  }

  dispatch(change: Partial<UserConfiguration>): DispatchObservable {
    const keys = Object.keys(change) as ConfigKey[]

    return of(...keys).pipe(
      map((key) => {
        if (this.changeCallbacks[key] === undefined) {
          throw { type: DisptachErrorType.NoCallbacks, value: `No callbacks for key "${key}"` }
        }

        return this.changeCallbacks[key]!(change[key]!)
      }),
      mergeAll(),
      catchError((error) => {
        if (error?.type === DisptachErrorType.NoCallbacks) {
          throw error
        }

        throw { type: DisptachErrorType.CallbackError, value: error }
      })
    )
  }
}
