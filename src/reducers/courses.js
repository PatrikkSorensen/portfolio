import {
	GET_CV, 
} from '../actions/types'; 

const initialState = {
	schools: [], 
	selfstudySchools: [], 
	workExperience: [], 
	skills: []
}

let projects = []; 

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CV:
			return {
				schools: action.payload, 
				selfstudySchools: action.selfstudySchools,
				workExperience: action.WorkExperienceData, 
				skills: action.skills 
			};
	}

	return state; 
} 