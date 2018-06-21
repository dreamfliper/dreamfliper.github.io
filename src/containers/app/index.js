import React,{ Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import Spinner from 'react-spinkit'
import { Menu } from 'antd'
import styled from 'styled-components'
import Loadable from 'react-loadable'
import './lib/intergram/js/widget.js'
import './lib/night.css'
import './lib/tocbot.css'

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
	autoNoResponse: 
		"It seems I'm temporarily not available. "+
		"Please leave your contact information. I'll contact you ASAP",
	mainColor: "#555", 
	alwaysUseFloatingButton: true 
}

const Navigation = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	overflow: auto;
	@media (max-width: 800px){
		justify-content: unset;
	}
`

class App extends Component {

	state = {
		current: 'about',
	}

	handleClick = ({key}) => {
		this.setState({
			current: key
		});
	}
	
	render() {
		const { pathname } = this.props.location
		return (
			<div>
			
				<Navigation>
					<Menu
					onClick={this.handleClick}
					selectedKeys={
						[ 
							pathname === '/' 
								? 'about'
								: pathname.split('/')[1]
						]
					}
					mode="horizontal"
					style={{'backgroundColor':'transparent',display:'flex'}}
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
					{/*
						<Menu.Item key="repository">
							<a 
								href="http://dreamfliper.ddns.net/"
								style={{'textDecoration': 'none'}}
							>
								Repository</a>
						</Menu.Item>
					*/}
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

export default withRouter(App)

