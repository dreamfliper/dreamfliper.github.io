import React,{ Component } from 'react';
import Dropbox from 'dropbox'
import Markdown from 'react-markdown'
import store from '../../store'
import { connect } from 'react-redux'
import { updateResume } from '../../modules/counter'
import { Row, Col } from 'antd'
import CodeBlock from './code-render'
import 'highlight.js/styles/tomorrow-night.css'

class Notecontent extends Component{
	state = {
		name:this.props.match.params.name
	} 

	componentDidMount(){
		let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
		dbx.filesDownload({path: `/notes/${this.state.name}.md`})
			.then( (response) => {
				let filebuffer = new FileReader()
				filebuffer.readAsText(response.fileBlob)
				filebuffer.onload = evt => 
					store.dispatch(updateResume(evt.currentTarget.result))
			})
			.catch( (error) => {
				console.error(error);
			});
	}

	componentWillUnmount(){
		store.dispatch(updateResume('waiting for connection'))
	}
	
	render(){
		return (
			<Row>
				<Col sm={{ span:21, offset:2 }} md={{ span:17, offset:3 }} lg={{ span:18, offset:4 }}>
					<Markdown source={this.props.resumeSource} renderers={{CodeBlock}} />
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = state => ({
	resumeSource: state.counter.resumeSource,
})

export default connect(
	mapStateToProps,
)(Notecontent)