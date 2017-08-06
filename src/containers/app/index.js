import React,{ Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import Project from './projects'
import Resume from './resume'
import { Menu } from 'antd'
import './lib/intergram/js/widget.js'

window.intergramId = "160411797"
window.intergramCustomizations = {
        titleClosed: 'Online Chat',
        titleOpen: 'dreamfliper on telegram',
        introMessage: 'First message when the user opens the chat for the first time',
        autoResponse: 'A message that is sent immediately after the user sends its first message',
        autoNoResponse: 'A message that is sent one minute after the user sends its first message ' +
                        'and no response was received',
        mainColor: "#555", 
        alwaysUseFloatingButton: false 
    }

class App extends Component {

  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
	
	render() {
		return (
			<div>
				{
				// <header>
				// 	<Link to="/">Home</Link>
				// 	<Link to="/about">About</Link>
				// 	<Link to="/projects">Project</Link>
				// 	<Link to="/resume">Resume</Link>
				// </header>
				}
				
				<Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{'display': 'flex','justify-content':'center'}}
      	>
	      	<Menu.Item key="home">
						<Link to="/">Home</Link>
	        </Menu.Item>
	      	<Menu.Item key="about">
						<Link to="/about">About</Link>
	        </Menu.Item>
	      	<Menu.Item key="projects">
						<Link to="/projects">Projects</Link>
	        </Menu.Item>
	      	<Menu.Item key="resume">
						<Link to="/resume">Resume</Link>
	        </Menu.Item>
        </Menu>

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