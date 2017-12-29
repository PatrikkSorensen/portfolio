import React from 'react'

const ProjectContents = ({name, date, contents, tags, role, collaborators, created_with, source}) => (
  <div className="row project-contents">
    <div className="col-sm-10">
      <h1>{name}</h1>
      <p>Finished on {date}</p>
      <div className="project-meta-info">
        <p><span className="meta-label">Role: </span> {role}</p>
        <p><span className="meta-label">Collaborators: </span>{collaborators}</p>
        <p><span className="meta-label">Source: </span>{source}</p>
        <p><span className="meta-label">Made with: </span>{created_with}</p>
      </div>
      {contents}
    </div>
    <div className="row">
      <div className="col-sm-10">
        <div style={{marginTop: '24px'}} className="col-sm-8">
          <p><span className="meta-label">Tags: </span> <i>{tags}</i></p>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectContents;

