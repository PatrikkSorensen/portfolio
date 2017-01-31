import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'; 

import projectListReducer from './projects'; 
import searchFieldReducer from './search_field'; 
import coursesReducer from './courses'; 
import { ADD_FILTER } from '../actions/types';

const rootReducer = combineReducers({
  projects: projectListReducer,
  filters: searchFieldReducer, 
  cv: coursesReducer, 
  form: formReducer.plugin({
    addTag: (state, action) => { 
      switch(action.type) {
        case ADD_FILTER:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  })
});

export default rootReducer;
