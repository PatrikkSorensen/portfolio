import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projectReducer from './projects'
import cvReducer from './cv'

export default combineReducers({
  router: routerReducer,
  projects: projectReducer,
  cv: cvReducer
})
