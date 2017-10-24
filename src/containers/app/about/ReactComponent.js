import React from 'react'
import InheritProp from './InheritProp'

const ReactComponent = (props) => {
	return <InheritProp passdown={props.passdown} />
}

export default ReactComponent