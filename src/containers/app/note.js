import React,{ Component } from 'react';
import Dropbox from 'dropbox'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.section`
	font-size:40px;
	width: 80vh;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-decoration: none;
`;

class Note extends Component {
	state = {
		filelist:[]
	}

	componentDidMount() {
		let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
		dbx.filesListFolder({path: '/notes'})
			.then( (response) => {
				for (let file of response.entries){
					this.setState({
						filelist:[...this.state.filelist, file.name.split('.')[0]]
					})
				}
				console.log(this.state.filelist)
			})
			.catch( (error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<div>
				<ul>
				{
					this.state.filelist.map( (file,i) =>
						<Title key={i}><Link style={{'width': '80vh','text-decoration': 'none'}} to={`/note/${file}`} >{file}</Link></Title>
					)
				}
				</ul>
			</div>
		);
	}
}

export default Note