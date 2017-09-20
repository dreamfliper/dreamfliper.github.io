import React,{ Component } from 'react'
import Dropbox from 'dropbox'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Spinner from 'react-spinkit'

const Title = styled.section`
	font-size:40px;
	width: 80vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-decoration: none;
`

const Table = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

class Note extends Component {
	state = {
		filelist:[],
		spin:true
	}

	componentDidMount() {
		let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
		dbx.filesListFolder({path: '/notes'})
			.then( (response) => {
				for (let file of response.entries){
					this.setState({
						filelist:[...this.state.filelist, file.name.split('.')[0]],
						spin:false
					})
				}
				// console.log(this.state.filelist)
			})
			.catch( (error) => {
				console.error(error)
			})
	}

	render() {
		return (
			<Table>
				{this.state.spin && <Spinner fadeIn='none' name="line-scale" color="steelblue"/>}
				<ul>
				{
					this.state.filelist.map( (file,i) =>
						<Title key={i}><Link style={{'width': '80vw','textDecoration': 'none'}} to={`/note/${file}`} >{file}</Link></Title>
					)
				}
				</ul>
			</Table>
		);
	}
}

export default Note