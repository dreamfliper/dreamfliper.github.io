import React,{ Component } from 'react';
import Markdown from 'react-markdown'
import { connect } from 'react-redux'
import { updateResume, fetchDropbox } from '../../../modules/counter'
import { Row, Col, /* Anchor */ Button } from 'antd'
import CodeBlock from './code-render'
import 'highlight.js/styles/tomorrow-night.css'
import tocbot from 'tocbot'
import CSSModules from 'react-css-modules'
import styles from '../about/about.less'

function flatten (text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

@CSSModules(styles)
class Notecontent extends Component{

	state = {
		name: this.props.match.params.name,
		hasHeader: false
	} 

	componentWillReceiveProps(nextProps) {
	  nextProps.resumeSource.startsWith('#') && this.setState({hasHeader:true})
	}

	HeadingRenderer = (props) => {
	  let children = React.Children.toArray(props.children)
	  let text = children.reduce(flatten, '')
	  let slug = text.toLowerCase()
	  // !this.state.hasHeader && this.setState({hasHeader:true})
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

	componentWillUnmount(){
		this.props.updateResume('waiting for connection')
	}

	componentDidUpdate(){
		tocbot.refresh()
	}
	
	render(){
		return (
			<Row>
				{
					this.state.hasHeader && 
					<Col lg={{ span:2, offset:1 }} style={{position:'fixed'}} >
						<b>TOC :</b>
						<div styleName='js-toc' className='js-toc' />
					</Col>
				}
				<Col sm={{ span:21, offset:2 }} md={{ span:17, offset:3 }} lg={{ span:12,offset:6 }}>
					<div className='js-toc-content' >
						<Markdown 
						source={this.props.resumeSource} 
						renderers={{CodeBlock, Heading: this.HeadingRenderer}} 
						/>
					</div>				
				</Col>
				<Button onClick={()=>this.setState({hasHeader:!this.state.hasHeader})} styleName='btn-toc' shape="circle" icon="bars" size='large' ghost/>
			</Row>
		)
	}
}

const mapStateToProps = state => ({
	resumeSource: state.counter.resumeSource,
	isFetch: state.counter.isFetch,
})


export default connect(
	mapStateToProps,
	{updateResume,fetchDropbox}
)(Notecontent)