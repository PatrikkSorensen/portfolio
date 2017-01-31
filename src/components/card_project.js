import React, { PropTypes } from 'react'

const CardProject = ({onClick, name, tags, imgPath }) => (
    <div className="card card-block">
      <a className="card-link" onClick={onClick}>
      	<img src={'images/' + imgPath} className="center-block img-responsive" width="450px" height="300px"/>
          <h3 className="card-title">{name}</h3>
          <p><i>{tags}</i></p>
      </a>
    </div>
)

CardProject.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired, 
  imgPath: PropTypes.string.isRequired
}

export default CardProject;
