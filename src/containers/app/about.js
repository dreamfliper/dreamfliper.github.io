import React from 'react'
import './lib/font-awesome-4.7.0/css/font-awesome.min.css'
import styles from './about.less'
import Gravatar from 'react-gravatar'

const About = () => (
  <div>
    <h1>About Page</h1>
    <p>Did you get here via Redux?</p>
    <Gravatar email="dreamfliper@gmail.com" size={150} className={styles.gravatar} />
		{/* eslint-disable */}
		<div id="social">
			<a className={`${styles.smGlobalBtn} ${styles.facebookBtn}`} href='http://www.facebook.com/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.githubBtn} `} href='http://github.com/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.telegramBtn} `} href='http://t.me/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.googleplusBtn} `} href='http://plus.google.com/+%E8%A8%B1%E4%BA%A8%E7%99%BE' />
			<a className={`${styles.smGlobalBtn} ${styles.pinterestBtn} `} href='http://www.pinterest.com/dreamfliper/' />
			<a className={`${styles.smGlobalBtn} ${styles.steamBtn} `} href='http://steamcommunity.com/id/dreamfliper' />
			<a className={`${styles.smGlobalBtn} ${styles.linkedinBtn} `} href='http://www.linkedin.com/in/henpai-hsu-76688282/' />
			<a className={`${styles.smGlobalBtn} ${styles.raindropBtn} `} href='https://raindrop.io/user/129968' />
			<a className={`${styles.smGlobalBtn} ${styles.pocketBtn} `} href='https://getpocket.com/@dreamfliper' />
		</div>
		{/* eslint-enable */}
	</div>
)

export default About
