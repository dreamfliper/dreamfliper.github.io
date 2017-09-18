import React,{ Component } from 'react';
import { Route, Link } from 'react-router-dom'
import About from './about'
import Project from './projects'
import Resume from './resume'
import Note from './note'
import Notecontent from './note/notecontent'
import { Menu } from 'antd'
import styled from 'styled-components'
import './lib/intergram/js/widget.js'
import './lib/night.css'

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
					selectedKeys={window.location.pathname==='/' ? 'about':window.location.pathname}
					mode="horizontal"
					style={{'backgroundColor':'transparent'}}
					>
						<Menu.Item key="about" >
							<Link style={{'textDecoration': 'none'}} to="/">About</Link>
						</Menu.Item>
						<Menu.Item key="projects">
							<Link style={{'textDecoration': 'none'}} to="/projects">Projects</Link>
						</Menu.Item>
						<Menu.Item key="resume">
							<Link style={{'textDecoration': 'none'}} to="/resume">Resume</Link>
						</Menu.Item>					
						<Menu.Item key="note">
							<Link style={{'textDecoration': 'none'}} to="/note">Notes</Link>
						</Menu.Item>
					</Menu>
				</Navigation>
				<main>
					<Route exact path="/" component={About} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/projects" component={Project} />
					<Route exact path="/note" component={Note} />
					<Route exact path="/note/:name" component={Notecontent} />
				</main>
			</div>
		);
	}
}

export default (App)

