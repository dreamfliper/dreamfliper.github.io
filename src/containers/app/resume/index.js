import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateResume } from '../../../modules/counter'
import store from '../../../store'
import Markdown from 'react-mark'
import Dropbox from 'dropbox'
import { Row, Col } from 'antd'

class Resume extends Component {

	componentWillMount() {
		let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
		try{
			(async ()=>{
			const {fileBlob} = await dbx.filesDownload({path: '/Resume.md'})
			let filebuffer = new FileReader()
			filebuffer.readAsText(fileBlob)
			filebuffer.onload = evt => 
				store.dispatch(updateResume(evt.currentTarget.result))
			})()
		}	catch(err) {
			console.log(err)
		}
	}
	
	componentWillUnmount(){
		store.dispatch(updateResume('waiting for connection'))
	}

	render() {
		return (
			<Row>
				<Col sm={{ span:21, offset:2 }} md={{ span:18, offset:3 }} lg={{ span:18, offset:4 }}>
					<Markdown  text={this.props.resumeSource} />
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
)(Resume)
