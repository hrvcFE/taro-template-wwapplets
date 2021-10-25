import { combineReducers } from 'redux'
import sharedReducers from '@ww-applets/shared/store/reducers'

export default combineReducers({
  ...sharedReducers
})
