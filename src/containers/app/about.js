import React from 'react'
import './lib/font-awesome-4.7.0/css/font-awesome.min.css'
import styles from './about.less'
import Gravatar from 'react-gravatar'

const About = () => (
  <div>
  	<h1 className={styles.center} >Henpai Hsu</h1>
    <Gravatar email="dreamfliper@gmail.com" size={200} className={styles.gravatar} />
    <p id={styles.comment} >Gravatar</p>
		{/* eslint-disable */}
		<div id={styles.social} >
			<a className={`${styles.smGlobalBtn} ${styles.facebookBtn}`} href='//www.facebook.com/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.githubBtn} `} href='//github.com/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.telegramBtn} `} href='//t.me/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.googleplusBtn} `} href='//plus.google.com/+%E8%A8%B1%E4%BA%A8%E7%99%BE' />
			<a className={`${styles.smGlobalBtn} ${styles.pinterestBtn} `} href='//www.pinterest.com/dreamfliper/' />
			<a className={`${styles.smGlobalBtn} ${styles.steamBtn} `} href='//steamcommunity.com/id/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.linkedinBtn} `} href='//www.linkedin.com/in/henpai-hsu-76688282/' />
			<a className={`${styles.smGlobalBtn} ${styles.raindropBtn} `} href='//raindrop.io/user/129968' />
			<a className={`${styles.smGlobalBtn} ${styles.pocketBtn} `} href='//getpocket.com/@dreamfliper' />
		</div>
		{/* eslint-enable */}
	</div>
)

export default About
