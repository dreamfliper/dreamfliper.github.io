import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateResume } from '../../../modules/counter'
import Markdown from 'react-markdown'
import Dropbox from 'dropbox'
import { Row, Col, Button  } from 'antd'

class Resume extends Component {
	state = {
		langSelect:0,
		resumeLang:['English', 'Chinese']
	}

	handleClick = () =>{
		this.setState({langSelect:+!this.state.langSelect})
		let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
		try{
			(async ()=>{
			const {fileBlob} = await dbx.filesDownload({
				path: !!this.state.langSelect ? '/Resume.md':'/Resume_eng.md'
			})
			let filebuffer = new FileReader()
			filebuffer.readAsText(fileBlob)
			filebuffer.onload = evt => 
				this.props.updateResume(evt.currentTarget.result)
			})()
		}	catch(err) {
			console.log(err)
		}
	}

	componentWillMount() {
		let dbx = new Dropbox({accessToken:'UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT'});
		try{
			(async ()=>{
			const {fileBlob} = await dbx.filesDownload({path: '/Resume.md'})
			let filebuffer = new FileReader()
			filebuffer.readAsText(fileBlob)
			filebuffer.onload = evt => 
				this.props.updateResume(evt.currentTarget.result)
			})()
		}	catch(err) {
			console.log(err)
		}
	}
	
	componentWillUnmount(){
	  this.props.updateResume('waiting for connection')
	}

	render() {
		return (
			<Row>
				<Col sm={{ span:21, offset:2 }} md={{ span:18, offset:3 }} lg={{ span:18, offset:4 }}>
					<Markdown  source={this.props.resumeSource} />
				</Col>
				<Col>
					<Button type="primary" onClick={()=>this.handleClick()} >{this.state.resumeLang[this.state.langSelect]}</Button>
				</Col>
			</Row>
		)
	}
}


const mapStateToProps = state => ({
	resumeSource: state.counter.resumeSource,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateResume,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Resume)
