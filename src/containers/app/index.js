import React,{ Component } from 'react';
import { Route, Link } from 'react-router-dom'
import {Tab, Tabs} from 'react-toolbox/lib/tabs'
import Home from './home'
import About from './about'
import Project from './projects'
import Resume from './resume'

class App extends Component {
	state = {
		index: 1,
	}

	handleTabChange = (index) => {
		this.setState({index});
	}

	handleActive = () => {
		console.log('Special one activated');
	}
	
	render() {
		return (
			<div>
				<header>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/projects">Project</Link>
					<Link to="/resume">Resume</Link>
				</header>

				<Tabs index={this.state.index} onChange={this.handleTabChange}>
					<Tab label='Primary'><small>Primary content</small></Tab>
					<Tab label='Secondary' onActive={this.handleActive}><small>Secondary content</small></Tab>
					<Tab label='Third' disabled><small>Disabled content</small></Tab>
					<Tab label='Fourth' hidden><small>Fourth content hidden</small></Tab>
					<Tab label='Fifth'><small>Fifth content</small></Tab>
				</Tabs>

				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Project} />
					<Route exact path="/resume" component={Resume} />
				</main>
			</div>
		);
	}
}

export default App