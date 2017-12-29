import projects from '../data/projects'
import educations from '../data/educations'
import selfstudy from '../data/selfstudy'
import work from '../data/work'
import skills from '../data/skills'; 

import { push } from 'react-router-redux'

import { 
  FETCH_PROJECTS,
  TOGGLE_PROJECT,
  FETCH_PROJECT,
  GET_CV,
} from './types'; 

export function fetchProjects() {
  return dispatch => {
    dispatch({
      type: FETCH_PROJECTS,
      payload: projects,
    })
  }
}

export function toggleProject(id, url) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_PROJECT,
      payload: projects[id]
    });
    
    dispatch(push(url))
  }
}

export function getCV() {
  return {
    type: GET_CV,
    payload : educations, 
    skills,
    work,
    selfstudy,
  }
}