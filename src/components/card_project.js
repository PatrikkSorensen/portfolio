import React, { PropTypes } from 'react'

const CardProject = ({onClick, name, tags, imgPath, createdWith }) => (
    <div className="card card-block">
      <a className="card-link" onClick={onClick}>
      	<img src={'images/' + imgPath} className="img-fluid" width="400px" />
          <p className="project-title">{name}</p>
          <p><b>Created with: {createdWith}</b></p>
          <p><i>{tags}</i></p>
      </a>
      <button type="button" onClick={onClick} className="btn btn-primary">Read more</button>
    </div>
)

CardProject.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired, 
  imgPath: PropTypes.string.isRequired
}

export default CardProject;
