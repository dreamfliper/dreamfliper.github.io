import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Gravatar from 'react-gravatar'
import '../lib/font-awesome-4.7.0/css/font-awesome.min.css'
import styles from './about.less'
import ReactComponent from './ReactComponent'

@CSSModules(styles, { allowMultiple:true })
class About extends Component {
	state = {
		forcegray: 'forcegray'
	}

	onMouseEnterhandler = () => {
		this.setState({ forcegray:'', passdown:'mouse over' })
	}
	onMouseLeavehandler = () => {
		this.setState({ forcegray:'forcegray', passdown:'mouse leave' })
	}

	render(){
		const { forcegray } = this.state
		return (
		  <div>
		  	<h1 styleName='center' >Henpai Hsu</h1>
		    <Gravatar 
			    onMouseEnter={this.onMouseEnterhandler}
			    onMouseLeave={this.onMouseLeavehandler}
			    email="dreamfliper@gmail.com" size={200} 
			    styleName='gravatar' 
			  />
		    <p id={styles.comment} >Gravatar</p>
				{/* eslint-disable */}
				<div id={styles.social} >
					<a styleName={`smGlobalBtn facebookBtn 	 ${forcegray}`} href='//www.facebook.com/dreamfliper' />
					<a styleName={`smGlobalBtn githubBtn 		 ${forcegray}`} href='//github.com/dreamfliper' />
					<a styleName={`smGlobalBtn telegramBtn 	 ${forcegray}`} href='//t.me/dreamfliper' />
					<a styleName={`smGlobalBtn googleplusBtn ${forcegray}`} href='//plus.google.com/+%E8%A8%B1%E4%BA%A8%E7%99%BE' />
					<a styleName={`smGlobalBtn pinterestBtn  ${forcegray}`} href='//www.pinterest.com/dreamfliper/' />
					<a styleName={`smGlobalBtn steamBtn 		 ${forcegray}`} href='//steamcommunity.com/id/dreamfliper' />
					<a styleName={`smGlobalBtn linkedinBtn 	 ${forcegray}`} href='//www.linkedin.com/in/henpai-hsu-76688282/' />
					<a styleName={`smGlobalBtn raindropBtn 	 ${forcegray}`} href='//raindrop.io/user/129968' />
					<a styleName={`smGlobalBtn pocketBtn 		 ${forcegray}`} href='//getpocket.com/@dreamfliper' />
				</div>
				{/* eslint-enable 
				*/}
				<ReactComponent passdown={'passed'} />
			</div>
		)
	}
}

export default About
