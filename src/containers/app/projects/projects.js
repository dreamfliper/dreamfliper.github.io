import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Popover } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import withScrollReveal from '../lib/react-scrollreveal'
import flashlight from '../lib/flashlight.png'
import subTrans from '../lib/subTrans.png'
import SublimeMark from '../lib/SublimeMark.png'
// import BLEcontroller from '../lib/BLEController.png'
import '../about/about.less'

const Project = ({ animationContainerReference }) => (
	<div
		ref={animationContainerReference}
		style={{
			width: '70vw',
			display: 'flex',
			flexDirection: 'column',
			margin: 'auto',
		}}>
		<Wrapper>
			<a
				className="sr-item--left"
				href="//github.com/dreamfliper/Flashlight/tree/master/PluginDirectories/1/merge.bundle">
				<img src={SublimeMark} style={{ width: 150 }} alt="flashlight" />
			</a>
			<div className="sr-item-right">
				<b>Sublime Mark : A Visual Studio Code Plugin</b>
				<br />
				<p>The marking system that I ported to VSCode from Sublime Text</p>
				<a
					styleName="sm-square-btn githubalt-btn"
					href="//github.com/dreamfliper/Flashlight/tree/master/PluginDirectories/1/merge.bundle">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<Link styleName="smr-square-btn textfile-btn" to={`/note/Sublime Mark`}>
					<FontAwesomeIcon icon={faFileAlt} />
				</Link>
			</div>
			<img
				src="https://github.com/dreamfliper/vscode-mark-sublime/blob/master/preview.gif?raw=true"
				className="sr-item-sequence"
				alt="demoflash2"
				width="500px"
				height="300px"
			/>
		</Wrapper>

		<Wrapper>
			<div className="sr-item-left">
				<b>subTrans</b>
				<p>
					A GUI tool swap subtitle between traditional chinese and simplified chinese,
					<br />
					powered by electron-vue and OpenCC
				</p>
				<p>
					一個以 OpenCC 作為簡繁轉換的圖形介面工具
					<br />
					支援多種編碼，現代外觀，批次對文字檔簡繁轉換
				</p>
				<a styleName="sm-square-btn githubalt-btn" href="//github.com/dreamfliper/subTrans">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<Link styleName="smr-square-btn textfile-btn" to={`/note/subTrans開發與Vue入門`}>
					<FontAwesomeIcon icon={faFileAlt} />
				</Link>
			</div>
			<Popover content={demoSub} title="Demo">
				<a className="sr-item-right" href="//github.com/dreamfliper/subTrans">
					<img src={subTrans} style={{ width: 150 }} alt="subTrans" />
				</a>
			</Popover>
			<img
				className="sr-item--sequence"
				src="https://i.imgur.com/U0xw99E.gif"
				alt="demosub2"
			/>
		</Wrapper>

		<Wrapper>
			<Popover content={demoFlash} title="Demo">
				<a
					className="sr-item-up"
					href="//github.com/dreamfliper/Flashlight/tree/master/PluginDirectories/1/merge.bundle">
					<img src={flashlight} style={{ width: 150 }} alt="flashlight" />
				</a>
			</Popover>
			<div className="sr-item-right">
				<b>
					Merge Windows : A <a href="//flashlight.nateparrott.com">Flashlight</a> Plugin
				</b>
				<br />
				<p>
					Merge macOS application windows into tabs <br />
					example: make many finder windows into single window with tabs <br />
					<a href="https://www.dropbox.com/s/w7ildh25jcfag7x/merge_demo.mov?dl=0">demo</a>
				</p>
				<a
					styleName="sm-square-btn githubalt-btn"
					href="//github.com/dreamfliper/Flashlight/tree/master/PluginDirectories/1/merge.bundle">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<Link styleName="smr-square-btn textfile-btn" to={`/note/Flashlight插件開發`}>
					<FontAwesomeIcon icon={faFileAlt} />
				</Link>
			</div>
			<img
				className="sr-item--sequence"
				src="https://i.imgur.com/6yeANBf.gif"
				alt="demoflash2"
				width="500px"
			/>
		</Wrapper>
	</div>
)

export default withScrollReveal([
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
			useDelay: 'once',
		},
	},
])(Project)

const demoFlash = <img src="https://i.imgur.com/6yeANBf.gif" alt="demoflash" width="500px" />

const demoSub = <img src="https://i.imgur.com/U0xw99E.gif" alt="demosub" />

const Wrapper = styled.section`
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	flex-wrap: wrap;
	@media (max-width: 900px) {
		display: block;
	}

	img {
		align-self: flex-start;
		margin-top: 2em;
	}
`
