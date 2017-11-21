import React, { Component } from 'react'
import '../lib/font-awesome-4.7.0/css/font-awesome.min.css'
import styles from './about.less'
import Gravatar from 'react-gravatar'
// import ReactComponent from './ReactComponent'

class About extends Component {
	state={
		forcegray:styles.forcegray,
		value:''
	}

	onMouseOverhandler = () =>{
		this.setState({forcegray:'',passdown:'mouse over'})
	}
	onMouseLeavehandler = () =>{
		this.setState({forcegray:styles.forcegray,passdown:'mouse leave'})
	}

	render(){
		return (
		  <div>
		  	<h1 className={styles.center} >Henpai Hsu</h1>
		    <Gravatar 
			    onMouseOver={this.onMouseOverhandler}
			    onMouseLeave={this.onMouseLeavehandler}
			    email="dreamfliper@gmail.com" size={200} 
			    className={styles.gravatar} />
		    <p id={styles.comment} >Gravatar</p>
				{/* eslint-disable */}
				<div id={styles.social} >
					<a className={`${styles.smGlobalBtn} ${styles.facebookBtn} ` + this.state.forcegray} href='//www.facebook.com/dreamfliper' />
					<a className={`${styles.smGlobalBtn} ${styles.githubBtn} ` + this.state.forcegray} href='//github.com/dreamfliper' />
					<a className={`${styles.smGlobalBtn} ${styles.telegramBtn} ` + this.state.forcegray} href='//t.me/dreamfliper' />
					<a className={`${styles.smGlobalBtn} ${styles.googleplusBtn} ` + this.state.forcegray} href='//plus.google.com/+%E8%A8%B1%E4%BA%A8%E7%99%BE' />
					<a className={`${styles.smGlobalBtn} ${styles.pinterestBtn} ` + this.state.forcegray} href='//www.pinterest.com/dreamfliper/' />
					<a className={`${styles.smGlobalBtn} ${styles.steamBtn} ` + this.state.forcegray} href='//steamcommunity.com/id/dreamfliper' />
					<a className={`${styles.smGlobalBtn} ${styles.linkedinBtn} ` + this.state.forcegray} href='//www.linkedin.com/in/henpai-hsu-76688282/' />
					<a className={`${styles.smGlobalBtn} ${styles.raindropBtn} ` + this.state.forcegray} href='//raindrop.io/user/129968' />
					<a className={`${styles.smGlobalBtn} ${styles.pocketBtn} ` + this.state.forcegray} href='//getpocket.com/@dreamfliper' />
				</div>
				{/* eslint-enable 
				<ReactComponent passdown={'passed'} />
				*/}
			</div>
		)
	}
}

export default About
