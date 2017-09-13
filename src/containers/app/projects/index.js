import React from 'react'
import flashlight from './flashlight.png'
import subTrans from './subTrans.png'
import BLEcontroller from './BLEController.png'
import styles from '../about/about.less'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import withScrollReveal from '../lib/react-scrollreveal'
import { Popover } from 'antd';

const Wrapper = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	@media (max-width: 900px) {
		display: block;
	}
`;

const demovideo = (
		<img src="https://i.imgur.com/6yeANBf.gif" alt="demoflash" width="500px" />
	)
const demogif = (
		<img src="https://i.imgur.com/U0xw99E.gif" alt="demosub"/>
	)

const Project = ({animationContainerReference}) => (
<div ref={animationContainerReference} style={{width:'70vw'}}>
	<Wrapper>
			<Popover content={demovideo} title="Demo" >
				<a className='sr-item--sequence' href="//github.com/dreamfliper/Flashlight/tree/master/PluginDirectories/1/merge.bundle">
					<img src={flashlight} style={{ width: 150 }} alt='flashlight' />
				</a>
			</Popover>			<div className='sr-item-right'>
				<b>
					Merge Windows : A <a href="//flashlight.nateparrott.com">Flashlight</a> Plugin
				</b>
				<p>
					Merge macOS application windows into tabs <br/>
					example: make many finder windows into single window with tabs <br/>
					<a href="https://www.dropbox.com/s/w7ildh25jcfag7x/merge_demo.mov?dl=0">demo</a> <br/>
					合併 macOS 上多個視窗成為一個，變成好幾個分頁共用一個視窗 <br/>
				</p>
				<a className={`${styles.smSquareBtn} ${styles.githubaltBtn} `} href='//github.com/dreamfliper/Flashlight/tree/master/PluginDirectories/1/merge.bundle' > </a>
				<Link className={`${styles.smrSquareBtn} ${styles.textfileBtn} `} to={`/note/Flashlight插件開發`} />
			</div>
	</Wrapper>
	
	<Wrapper>
			<div className='sr-item-left' >
				<b>subTrans</b>
				<p>A GUI tool swap subtitle between tchinese and schinese,<br/> powered by electron-vue and OpenCC</p>
				<p>一個以 OpenCC 作為簡繁轉換的圖形介面工具</p>
				<p>支援多種編碼，現代外觀，批次對文字檔簡繁轉換</p>
				<a className={`${styles.smSquareBtn} ${styles.githubaltBtn} `} href='//github.com/dreamfliper/subTrans' > </a>
				<Link className={`${styles.smrSquareBtn} ${styles.textfileBtn} `} to={`/note/subTrans開發與Vue入門`} />
			</div>			
	<Popover content={demogif} title="Demo" >
		<a className='sr-item--sequence' href="//github.com/dreamfliper/subTrans">
			<img src={subTrans} style={{ width: 150 }} alt='subTrans' />
		</a>
	</Popover>	</Wrapper>

	<Wrapper>
		<a className='sr-item--sequence' href="//github.com/dreamfliper/subTrans">
			<img src={BLEcontroller} style={{ width: 150 }} alt='subTrans' />
		</a>
		<div className='sr-item-right'>
			<h2> </h2>
			<b>BLEcontroller</b>
			<p>使用iOS Device與藍芽4.0裝置連線</p>
			<p>掃描附周的藍芽4.0裝置，與其連線，取得上面的資料，寫入新的資料</p>
			<a className={`${styles.smSquareBtn} ${styles.githubaltBtn} `} href='//github.com/dreamfliper/Flashlight/tree/master/PluginDirectories/1/merge.bundle' > </a>
			<Link className={`${styles.smrSquareBtn} ${styles.textfileBtn} `} to={`/note/BlEcontroller`} />
		</div>
	</Wrapper>

		<b>Demos:mashingopencc, react-video-modal-list</b>

</div>
)

export default 
withScrollReveal([
  {
    selector: '.sr-item-left',
    options: {
      reset: true,
      distance: '20%',
      origin: 'left',
      duration: 500,
    },
  },
  {
    selector: '.sr-item-right',
    options: {
      reset: true,
      distance: '20%',
      origin: 'right',
      duration: 500,
    },
  
  },
  {
    selector: '.sr-item--sequence',
    options: {
      reset: true,
      delay: 400,
      useDelay: 'once'
    },
  }
])(Project) 
