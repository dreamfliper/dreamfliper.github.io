import React,{ Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
// import About from './about'
// import Project from './projects'
// import Resume from './resume'
// import Note from './note'
// import Notecontent from './note/notecontent'
import Spinner from 'react-spinkit'
import { Menu } from 'antd'
import styled from 'styled-components'
import Loadable from 'react-loadable'
import './lib/intergram/js/widget.js'
import './lib/night.css'

const About = Loadable({
  loader: () => import("./about/about.js"),
  loading: Spinner
})
const Project = Loadable({
  loader: () => import("./projects/projects.js"),
  loading: Spinner
})
const Resume = Loadable({
  loader: () => import("./resume/resume.js"),
  loading: Spinner
})
const Note = Loadable({
  loader: () => import("./note/note.js"),
  loading: Spinner
})
const Notecontent = Loadable({
  loader: () => import("./note/notecontent.js"),
  loading: Spinner
})

window.intergramId = "160411797"
window.intergramCustomizations = {
	titleClosed: 'Online Chat',
	titleOpen: 'dreamfliper on telegram',
	introMessage: 'Ask Me Anything :)',
	autoResponse: 'Messages Sent',
	autoNoResponse: "It seems I'm temporarily not available. "+
									"Please leave your contact information. I'll contact you ASAP",
	mainColor: "#555", 
	alwaysUseFloatingButton: false 
}

const Navigation = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	backgroundColor: transparent;
	@media (max-width: 900px) {
		display: block;
	}
`

class App extends Component {

	state = {
		current: 'about',
	}

	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	}
	
	render() {
		return (
			<div>
			
				<Navigation>
					<Menu
					onClick={this.handleClick}
					selectedKeys={[window.location.pathname==='/' ? 'about':window.location.pathname.split('/')[1]]}
					mode="horizontal"
					style={{'backgroundColor':'transparent'}}
					>
						<Menu.Item key="about">
							<Link style={{'textDecoration': 'none'}} to="/">About</Link>
						</Menu.Item>
						<Menu.Item key="projects" onMouseEnter={() => Project.preload()} >
							<Link style={{'textDecoration': 'none'}} to="/projects">Projects</Link>
						</Menu.Item>
						<Menu.Item key="resume" onMouseEnter={() => Resume.preload()}>
							<Link style={{'textDecoration': 'none'}} to="/resume">Resume</Link>
						</Menu.Item>					
						<Menu.Item key="note" onMouseEnter={() => Note.preload()}>
							<Link style={{'textDecoration': 'none'}} to="/note">Notes</Link>
						</Menu.Item>
					</Menu>
				</Navigation>
				<main>
					<Route exact path="/" component={About} />
					<Route path="/resume" component={Resume} />
					<Route path="/projects" component={Project} />
					<Switch>
						<Route path="/note/:name" component={Notecontent} />
						<Route path="/note" component={Note} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default (App)

