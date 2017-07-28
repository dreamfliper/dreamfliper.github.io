import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import Project from './projects'
import Resume from './resume'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Project</Link>
      <Link to="/resume">Resume</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/resume" component={Resume} />
    </main>
  </div>
)

export default App
