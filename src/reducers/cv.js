import {
	GET_CV, 
} from '../actions/types'; 

const initialState = {
	schools: [], 
	selfstudy: [], 
	work: [], 
	skills: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CV:
			return {
				schools: action.payload, 
				selfstudys: action.selfstudy,
				work: action.work, 
				skills: action.skills 
			}
			
	    default:
    		return state
	}
} 