//@flow
import * as React from 'react'
import { Component } from 'react'
import RenderPropsTest from './RenderPropsTest'
import styled from 'styled-components'

type Props = { gotdata?: string, passdown: string }

type State = { gotdata?: string, value: string }

type RenderProps = { message: string, name: string }

export default class InheritProp extends Component<Props, State> {
	state = {
		// gotdata: this.props.passdown,
		value: '',
	}

	// BAD design, but I saw this everyday
	// componentWillReceiveProps(nextProps: Props) {
	// 	if (nextProps !== this.props) {
	// 		this.setState({
	// 			gotdata: nextProps.passdown,
	// 		})
	// 	}
	// }

	handleChange = ({ target: { value: newValue } }: { target: { value: string } }) =>
		this.setState({ value: newValue.replace(/\D/g, '') })

	render() {
		const str: string = '中文www.google.com也是沒問題中文www.googleeee.com也是沒問題'
		const matched: Array<string> = str.match(reg) || []

		return (
			<div>
				{this./*state*/ props.gotdata}
				<StyledProps gray="gray" />
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				{str
					.split(reg)
					.map(
						phrase => (phrase === '' ? <a href={matched[0]}>{matched.shift()}</a> : phrase)
					)}
				<RenderPropsTest name="renderprops">
					{(props: RenderProps) => <p>{`${props.message} ${props.name}`}</p>}
				</RenderPropsTest>
			</div>
		)
	}
}

const StyledProps = styled.div`
	width: 30px;
	height: 20px;
	background-color: ${({ gray }: { gray: string }) => gray};
`
const reg: RegExp = /[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
