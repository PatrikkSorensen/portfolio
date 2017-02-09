import {
	FETCH_PROJECTS, 
	FETCH_PROJECT, 
	TOGGLE_PROJECT,
	GET_FILTERS, 
	ADD_FILTER, 
	REMOVE_FILTER,
	CLEAR_FILTERS,
	GET_SEARCH_OPTIONS, 
	GET_CV
} from './types'; 
 
import {browserHistory, Router} from 'react-router';
import Schools from './courses'; 
import SelfStudySchools from './selfstudy_data'; 
import WorkExperienceData from './workdata'; 
import projects from './projects'; 
import Skills from './skills'; 

let filters = []; 
let tags = []; 


console.log("final array: ", Skills); 

for(let i = 0; i < projects.length; i++){
	for(let j = 0; j < projects[i].tags.length; j++) {
		let string = projects[i].tags[j]; 
		if(!tags.includes(string.toLowerCase())){
			tags.push(string.toLowerCase()); 
		}
	}
	tags.push(projects[i].name); 
}

let selectOptions = tags.map(tag => {
	return { 
		label: tag, 
		value: tag 
	}; 
}); 



export function toggleProject(id) {
	let project = projects[id];  
	let path = '/projects/' + id; 
	browserHistory.push(path); 
	return {
		type: TOGGLE_PROJECT, 
		payload: project
	}
}

export function fetchProjects() {
	return {
		type: FETCH_PROJECTS, 
		payload: projects,
		filters: filters
	}; 
};

export function fetchProject(id){
	let project = projects[id]; 
	return {
		payload: project,
		type: FETCH_PROJECT,
	}
}

export function fetchFrontPageProjects() {
	return {
		payload: projects, 
		type: SHOWCASE_PROJECTS,
	}
}

export function getFilters() {
	return {
		payload: filters, 
		type: GET_FILTERS
	}
}

export function addFilter(tag) {
	console.log("add filter", tag.label); 
	filters.push(tag.label); 
	return {
		payload: filters, 
		type: ADD_FILTER
	}
}

export function removeFilter(tag){
	let index = filters.indexOf(tag); 
	filters.splice(index, 1);  
	return {
		payload: filters, 
		type: REMOVE_FILTER
	}
}

export function clearFilters(){
	filters = [];
	return {
		type: CLEAR_FILTERS
	}
}

export function getSearchOptions() {
	return {
		payload: selectOptions, 
		type: GET_SEARCH_OPTIONS
	}
}

export function getCV() {
	return {
		payload : Schools, 
		skills : Skills,
		WorkExperienceData,
		selfstudySchools : SelfStudySchools,
		type: GET_CV
	}
}