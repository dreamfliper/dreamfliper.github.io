import React from 'react'
import { shallow, mount } from 'enzyme'
import InheritProps from '../InheritProp'
import RenderPropsTest from '../RenderPropsTest'

describe('InheritProps', () => {
	it('input can only catch number', () => {
		const wrapper = shallow(<InheritProps />)
		const input = wrapper.find('input')
		input.simulate('change', {
			target: { value: 'h3llo' },
		})
		expect(wrapper.state('value')).toEqual('3')
	})

	it('render RenderPropsTest', () => {
		const wrapper = mount(<InheritProps />)
		expect(wrapper.children().containsMatchingElement(<p>Yes it's me renderprops</p>)).toBeTruthy()
	})

})
