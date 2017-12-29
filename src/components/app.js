import React from 'react';
import { Route } from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import FrontPage from './front-page'
import AboutPage from './about-page'
import ProjectPage from './project-page'
import CVPage from './cv-page'
import Project from './project'


const App = () => (
  <div>
	<Header />
	<div className="container">
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/projects" component={ProjectPage} />
  	  <Route exact path="/projects/:id" component={Project} />
      <Route exact path="/cv" component={CVPage} />
  	</div>
  	<Footer />
  </div>
)

export default App