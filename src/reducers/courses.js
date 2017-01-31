import {
	GET_COURSES, 
} from '../actions/types'; 

const initialState = {
	schools: [], 
	selfstudySchools: []
}

let projects = []; 

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_COURSES:
			return {
				schools: action.payload, 
				selfstudySchools: action.selfstudySchools

			};
	}

	return state; 
} 