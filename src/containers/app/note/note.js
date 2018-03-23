import React, { Component } from "react"
import Dropbox from "dropbox"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Spinner from "react-spinkit"

const Title = styled.section`
	font-size: 40px;
	width: 80vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-decoration: none;
`

const Table = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

class Note extends Component {
	state = {
		filelist: [],
		spin: true,
	}

	async componentDidMount() {
		const dbx = new Dropbox({
			accessToken:
				"UVoVCEKzMf4AAAAAAAAQQpNz6Ya0Bu0cAEqT_pHWX0iCyqgkmrsSiQeP1Dho6gQT",
		})
		const { entries } = await dbx.filesListFolder({ path: "/notes" })
		this.setState(({ filelist }) => ({
			filelist: entries.map(file => file.name.split(".")[0]),
			spin: false,
		}))
	}

	render() {
		return (
			<Table>
				{this.state.spin && (
					<Spinner fadeIn="none" name="line-scale" color="steelblue" />
				)}
				<ul>
					{this.state.filelist.map((file, i) => (
						<Title key={i}>
							<Link
								style={{ width: "80vw", textDecoration: "none" }}
								to={`/note/${file}`}>
								{file}
							</Link>
						</Title>
					))}
				</ul>
			</Table>
		)
	}
}

export default Note
