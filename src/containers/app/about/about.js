import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Gravatar from 'react-gravatar'
import '../lib/font-awesome-4.7.0/css/font-awesome.min.css'
import styles from './about.less'
// import ReactComponent from './ReactComponent'

@CSSModules(styles, { allowMultiple:true })
class About extends Component {
	state = {
		forcegray: 'forcegray'
	}

	onMouseEnter = () => this.setState({ forcegray:'', passdown:'mouse over' })
	onMouseLeave = () => this.setState({ forcegray:'forcegray', passdown:'mouse leave' })

	render(){
		const { onMouseEnter, onMouseLeave } = this
		const { forcegray } = this.state
		return (
		  <div>
		  	<h1 styleName='center' >Henpai Hsu</h1>
		    <Gravatar 
			    email="dreamfliper@gmail.com" 
			    styleName='gravatar' 
			    size={200} 
			    {...{ onMouseEnter, onMouseLeave }}
			  />
		    <p id={styles.comment} >Gravatar</p>
				{/* eslint-disable */}
				<div id={styles.social} >
					<a styleName={`${forcegray} sm-global-btn facebook-btn`} href='//www.facebook.com/dreamfliper' />
					<a styleName={`${forcegray} sm-global-btn github-btn`} href='//github.com/dreamfliper' />
					<a styleName={`${forcegray} sm-global-btn telegram-btn`} href='//t.me/dreamfliper' />
					<a styleName={`${forcegray} sm-global-btn googleplus-btn`} href='//plus.google.com/+%E8%A8%B1%E4%BA%A8%E7%99%BE' />
					<a styleName={`${forcegray} sm-global-btn pinterest-btn`} href='//www.pinterest.com/dreamfliper/' />
					<a styleName={`${forcegray} sm-global-btn steam-btn`} href='//steamcommunity.com/id/dreamfliper' />
					<a styleName={`${forcegray} sm-global-btn linkedin-btn`} href='//www.linkedin.com/in/henpai-hsu-76688282/' />
					<a styleName={`${forcegray} sm-global-btn raindrop-btn`} href='//raindrop.io/user/129968' />
					<a styleName={`${forcegray} sm-global-btn pocket-btn`} href='//getpocket.com/@dreamfliper' />
				</div>
				{/* eslint-enable 
				<ReactComponent passdown={'passed'} />
				*/}
			</div>
		)
	}
}

export default About
