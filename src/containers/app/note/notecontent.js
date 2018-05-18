import React, { Component } from 'react'
import Markdown from 'react-markdown'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import tocbot from 'tocbot'
import CSSModules from 'react-css-modules'
import { DiscussionEmbed } from 'disqus-react'
import Spinner from 'react-spinkit'
import { updateResume, fetchDropbox, setArticleid } from '../../../modules/counter'
import CodeBlock from './code-render'
import styles from '../about/about.less'
import 'highlight.js/styles/tomorrow-night.css'

const disqusShortname = 'dreamfliper-github-io'

const mapStateToProps = ({ counter: { resumeSource, articleID, isFetching } }) => ({
	resumeSource,
	articleID,
	isFetching,
})

@connect(mapStateToProps, { updateResume, fetchDropbox, setArticleid })
@CSSModules(styles, { allowMultiple: true })
class Notecontent extends Component {
	state = {
		name: this.props.match.params.name,
		hasHeader: false,
	}

	componentWillReceiveProps(nextProps) {
		nextProps.resumeSource.startsWith('#') &&
			window.innerWidth > 700 &&
			this.setState({ hasHeader: true })
	}

	componentWillMount() {
		this.props.fetchDropbox({ path: `/notes/${this.state.name}.md` })
		tocbot.init({
			tocSelector: '.js-toc',
			contentSelector: '.js-toc-content',
			headingSelector: 'h1, h2, h3',
		})
	}

	componentWillUnmount() {
		this.props.updateResume('')
		this.props.setArticleid('')
	}

	componentDidUpdate() {
		tocbot.refresh()
	}

	HeadingRenderer = props => {
		let slug = React.Children.toArray(props.children)
			.reduce(flatten, '')
			.toLowerCase()
		return React.createElement('h' + props.level, { id: slug }, props.children)
	}

	render() {
		const disqusConfig = {
			url: `https://dreamfliper.github.io${window.location.pathname}`,
			identifier: this.props.articleID,
			title: this.props.match.params.name,
		}
		return (
			<div>
				<Row>
					<Col
						styleName={`js-toc-container ${this.state.hasHeader ? '' : 'hide'}`}
						lg={{ span: 2, offset: 1 }}
					>
						<b>TOC :</b>
						<div
							onClick={() => window.innerWidth < 700 && this.setState({ hasHeader: false })}
							className="js-toc"
						/>
					</Col>
					<Col
						xs={{ span: 22, offset: 1 }}
						sm={{ span: 21, offset: 2 }}
						md={{ span: 17, offset: 3 }}
						lg={{ span: 12, offset: 6 }}
					>
						<div className="js-toc-content">
							{this.props.isFetching && (
								<Spinner
									fadeIn="none"
									name="line-scale"
									color="steelblue"
									style={{ position: 'absolute', left: '50%', top: '50%' }}
								/>
							)}
							<Markdown
								source={this.props.resumeSource}
								renderers={{ CodeBlock, Heading: this.HeadingRenderer }}
							/>
						</div>
					</Col>
					<Button
						onClick={() => this.setState(({ hasHeader }) => ({ hasHeader: !hasHeader }))}
						style={{ position: 'fixed', right: '19px', bottom: '80px', zIndex: '6' }}
						shape="circle"
						icon="bars"
						size="large"
						ghost
					/>
				</Row>
				<Row>
					<Col
						xs={{ span: 22, offset: 1 }}
						sm={{ span: 21, offset: 2 }}
						md={{ span: 17, offset: 3 }}
						lg={{ span: 12, offset: 6 }}
					>
						{this.props.articleID && (
							<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
						)}
					</Col>
				</Row>
			</div>
		)
	}
}

export default Notecontent

function flatten(text, child) {
	return typeof child === 'string'
		? text + child
		: React.Children.toArray(child.props.children).reduce(flatten, text)
}
