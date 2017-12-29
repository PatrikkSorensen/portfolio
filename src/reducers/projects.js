import { FETCH_PROJECTS, TOGGLE_PROJECT } from '../actions/types'; 

const initialState = {
	projects: [], 
	project: { content: [] }
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_PROJECTS:
			return {...state, projects: [...action.payload]};
		case TOGGLE_PROJECT: 
	        return {...state, project: action.payload}; 

	    default:
      		return state
	}
} 