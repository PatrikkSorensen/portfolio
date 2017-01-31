import {
	FETCH_PROJECTS, 
	FETCH_PROJECT, 
	TOGGLE_PROJECT,
	GET_FILTERS, 
	ADD_FILTER, 
	REMOVE_FILTER,
	CLEAR_FILTERS,
	GET_SEARCH_OPTIONS, 
	GET_COURSES
} from './types'; 
 
import {browserHistory, Router} from 'react-router';
import Schools from './courses'; 
import SelfStudySchools from './selfstudy_data'; 
import projects from './projects'; 

let filters = []; 
let selectOptions = projects.map(project => {
	return { label: project.name, value: project.name }; 
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
	console.log("Getting filters");
	return {
		payload: filters, 
		type: GET_FILTERS
	}
}

export function addFilter(tag) {
	console.log("ActionCreator addFilter: ", tag); 
	filters.push(tag); 
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

export function getCourses() {
	console.log("Firing action getCourses", Schools); 
	return {
		payload : Schools, 
		selfstudySchools: SelfStudySchools,
		type: GET_COURSES
	}
}