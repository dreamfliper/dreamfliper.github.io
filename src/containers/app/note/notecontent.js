import React,{ Component } from 'react';
import Markdown from 'react-markdown'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateResume, fetchDropbox } from '../../../modules/counter'
import { Row, Col, /* Anchor */ } from 'antd'
import CodeBlock from './code-render'
// import Toclist from './toclist'
import 'highlight.js/styles/tomorrow-night.css'
import tocbot from 'tocbot'

// let anchorlist=[]

function flatten (text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}


class Notecontent extends Component{
	state = {
		name:this.props.match.params.name,
		anchorlist:[]
	} 

	// Handlestate = () =>{
	// 	this.setState({anchorlist:anchorlist})
	// }

	HeadingRenderer = (props) => {
	  let children = React.Children.toArray(props.children)
	  let text = children.reduce(flatten, '')
	  let slug = text.toLowerCase()
	  // this.Handlestate()
	  return React.createElement('h' + props.level, {id: slug}, props.children)
	}

	componentWillMount(){
		this.props.fetchDropbox({path: `/notes/${this.state.name}.md`})
		tocbot.init({
		  tocSelector: '.js-toc',
		  contentSelector: '.js-toc-content',
		  headingSelector: 'h1, h2, h3',
		})
	}

	componentDidMount(){
		// setTimeout(
		// 	() => this.setState({
		// 	anchorlist:anchorlist
		// }),2000)
	}

	componentWillUnmount(){
		this.props.updateResume('waiting for connection')
		// anchorlist=[]
	}

	componentDidUpdate(){
		tocbot.refresh()
	}
	
	render(){
		return (
			<Row>
				<Col sm={{ span:21, offset:2 }} md={{ span:17, offset:3 }} lg={{ span:18, offset:4 }}>
				<b>TOC :</b>
				<div className='js-toc' />
{/*					<Toclist anchorlist={this.state.anchorlist} />
					*/}					
					<div className='js-toc-content' >
						<Markdown 
						source={this.props.resumeSource} 
						renderers={{CodeBlock, Heading: this.HeadingRenderer}} 
						/>
					</div>				
				</Col>
			</Row>
		)
	}
}

const mapStateToProps = state => ({
	resumeSource: state.counter.resumeSource,
	isFetch: state.counter.isFetch,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  updateResume,
  fetchDropbox,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Notecontent)