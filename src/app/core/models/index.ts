export interface Dispatcher {}

export interface Dispatchable {
  setDispatch(dispatcher: Dispatcher): void
}
