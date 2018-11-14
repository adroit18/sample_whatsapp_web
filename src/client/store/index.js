import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer'

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

export function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant()
    )
  )
}