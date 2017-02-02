import {
	ADD_FILTER, 
	CLEAR_FILTERS, 
	REMOVE_FILTER, 
	GET_SEARCH_OPTIONS
} from '../actions/types'; 

const initialState = {
	activeFilters: [], 
	searchOptions: []
}

export default function(state = initialState, action) {
	switch (action.type) {

		case ADD_FILTER: 
		console.log(action.payload); 
			return {...state, activeFilters: [...action.payload] }
		case REMOVE_FILTER: 
			return {...state, activeFilters: [...action.payload] }
		case CLEAR_FILTERS: 
			return {...state, activeFilters: []}
		case GET_SEARCH_OPTIONS: {
			return {...state, searchOptions : [...action.payload] }
		}
	}

	return state; 
} 