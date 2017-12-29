import React from 'react'
import { PropTypes } from 'prop-types'

const ProjectContents = ({name, year, contents, tags, role, collaborators, created_with, source}) => (
  <div className="row">
    <div className="col-sm-10 post-container">
      <h1>{name}</h1>
      <span className="glyphicon glyphicon-time">Finished on {year}</span>
      <div className="project-meta-info">
        <p>
          <span className="meta-label">Role: </span> 
          {role}
        </p>
        <p>
          <span className="meta-label">Collaborators: </span> 
          {collaborators}
        </p>
        {source}
        <p>
          <span className="meta-label">Made with: </span> 
          {created_with}
        </p>
      </div>
    </div>
    {contents}
    <div className="row">
      <div style={{marginTop: '48px'}} className="col-sm-10 post-container">
        <p>
          <span className="meta-label">Tags: </span> 
          <i>{tags}</i>
        </p>
      </div>
    </div>
  </div>
)

export default ProjectContents;

