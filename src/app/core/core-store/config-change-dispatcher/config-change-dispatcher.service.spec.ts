import { TestBed } from '@angular/core/testing'
import { Theme } from '@app/core/_enums'
import { UserConfiguration } from '@app/store/config/models'
import { firstValueFrom, of, single, toArray } from 'rxjs'

import {
  ConfigChangeDispatcherService,
  DisptachErrorType,
} from './config-change-dispatcher.service'

describe('ConfigChangeDispatcherService', () => {
  let service: ConfigChangeDispatcherService
  let dispatch = (change: Partial<UserConfiguration>) => {
    return firstValueFrom(service.dispatch(change).pipe(toArray()))
  }

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ConfigChangeDispatcherService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should register an dispatch', async () => {
    service.register('ui.theme', async (value) => {})
    service.register('ui.disableAnimations', async (value) => {})

    const feedback = await dispatch({ 'ui.theme': Theme.Dark, 'ui.disableAnimations': false })

    expect(feedback.length).toEqual(2)
  })

  it('lets through errors', async () => {
    service.register('ui.theme', async (_) => {
      throw 'lol'
    })

    let errorOccured: boolean = false

    await dispatch({ 'ui.theme': Theme.Dark }).catch((error) => {
      expect(error.type === DisptachErrorType.CallbackError)
      expect(error.value === 'lol')
      errorOccured = true
    })

    expect(errorOccured).toBeTrue()
  })

  it('gives typed error on unhandled commands', async () => {
    service.register('ui.theme', async (_) => {})

    let errorOccured: boolean = false

    await dispatch({ 'ui.disableAnimations': true }).catch((error) => {
      expect(error.type === DisptachErrorType.NoCallbacks)
      errorOccured = true
    })

    expect(errorOccured).toBeTrue()
  })
})
