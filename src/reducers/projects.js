import {
	FETCH_PROJECTS, 
	TOGGLE_PROJECT,
	FETCH_PROJECT, 
} from '../actions/types'; 

const initialState = {
	projects: [],
	filters: [], 
}

let projects = []; 

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_PROJECTS:
			return {...state, projects: [...action.payload], filters : action.filters};
		case TOGGLE_PROJECT: 
			projects = []; 
			projects[0] = action.payload; 
	        return {...state, projects: projects}; 
		case FETCH_PROJECT: 
			return {...state, projects: [action.payload]}; 
	}

	return state; 
} 