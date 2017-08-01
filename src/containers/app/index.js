import React,{ Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import Project from './projects'
import Resume from './resume'
import { Menu } from 'antd'

const menustyle={
	'display': 'flex',
	'justify-content':'center'
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
        style={menustyle}
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