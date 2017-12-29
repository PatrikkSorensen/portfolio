import {
	GET_CV, 
} from '../actions/types'; 

const initialState = {
	educations: [], 
	selfstudy: [], 
	work: [], 
	skills: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CV:
			return {
				educations: action.payload, 
				selfstudy: action.selfstudy,
				work: action.work, 
				skills: action.skills 
			}
			
	    default:
    		return state
	}
} 