import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import Spinner from 'react-spinkit'
import { Row, Col, Button } from 'antd'
import { updateResume, fetchDropbox } from '../../../modules/counter'
import '../about/about.less'

const mapStateToProps = ({ counter: { resumeSource, isFetching } }) => ({
	resumeSource,
	isFetching,
})

@connect(mapStateToProps, { updateResume, fetchDropbox })
class Resume extends PureComponent  {
	state = {
		langSelect: 0,
		resumeLang: ['Chinese', 'English'],
	}

	handleClick = () => {
		this.setState(({ langSelect }) => ({ langSelect: +!langSelect }))
		this.props.fetchDropbox({
			path: !!this.state.langSelect ? '/Resume_eng.md' : '/Resume.md',
		})
	}

	componentDidMount() {
		this.props.fetchDropbox({ path: '/Resume_eng.md' })
	}

	componentWillUnmount() {
		this.props.updateResume('waiting for connection')
	}

	render() {
		let { resumeLang, langSelect } = this.state
		return (
			<Row>
				<Col
					xs={{ span: 21, offset: 1 }}
					sm={{ span: 20, offset: 2 }}
					md={{ span: 18, offset: 3 }}
					lg={{ span: 14, offset: 5 }}
				>
					{this.props.isFetching && (
						<Spinner
							fadeIn="none"
							name="line-scale"
							color="steelblue"
							style={{ position: 'absolute', left: '50%', top: '50%' }}
						/>
					)}
					<Markdown source={this.props.resumeSource} />
					<Button styleName="lang-button" loading={this.props.isFetching} type="primary" onClick={this.handleClick}>
						{resumeLang[langSelect]}
					</Button>
				</Col>
			</Row>
		)
	}
}

export default Resume
