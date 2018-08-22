import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Gravatar from 'react-gravatar'
import styles from './about.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faFacebookF, 
	faSteamSymbol,
	faGithub,
	faTelegramPlane,
	faGooglePlusG,
	faPinterestP,
	faLinkedinIn,
	faGetPocket,
} from '@fortawesome/free-brands-svg-icons'
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
				
				<div id={styles.social} >
					<a styleName={`${forcegray} sm-global-btn facebook-btn`} href='//www.facebook.com/dreamfliper'><FontAwesomeIcon icon={faFacebookF} /></a>
					<a styleName={`${forcegray} sm-global-btn github-btn`} href='//github.com/dreamfliper'><FontAwesomeIcon icon={faGithub} /></a>
					<a styleName={`${forcegray} sm-global-btn telegram-btn`} href='//t.me/dreamfliper'><FontAwesomeIcon icon={faTelegramPlane} /></a>
					<a styleName={`${forcegray} sm-global-btn googleplus-btn`} href='//plus.google.com/+%E8%A8%B1%E4%BA%A8%E7%99%BE'><FontAwesomeIcon icon={faGooglePlusG} /></a>
					<a styleName={`${forcegray} sm-global-btn pinterest-btn`} href='//www.pinterest.com/dreamfliper/'><FontAwesomeIcon icon={faPinterestP} /></a>
					<a styleName={`${forcegray} sm-global-btn steam-btn`} href='//steamcommunity.com/id/dreamfliper'><FontAwesomeIcon icon={faSteamSymbol} /></a>
					<a styleName={`${forcegray} sm-global-btn linkedin-btn`} href='//www.linkedin.com/in/henpai-hsu-76688282/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
					{/*<a styleName={`${forcegray} sm-global-btn raindrop-btn`} href='//raindrop.io/user/129968'><FontAwesomeIcon icon={faSteamSymbol} /></a>*/}
					<a styleName={`${forcegray} sm-global-btn pocket-btn`} href='//Getpocket.com/@dreamfliper'><FontAwesomeIcon icon={faGetPocket} /></a>
				</div>
				{/*
				<ReactComponent passdown={'passed'} />
				*/}
			</div>
		)
	}
}

export default About
