import React, { Component } from 'react';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import py from 'highlight.js/lib/languages/python';

Lowlight.registerLanguage('javascript', js);
Lowlight.registerLanguage('python', py);

class CodeBlock extends Component{
	render(){
		return (
			<Lowlight
				language={this.props.language==='vue' ? 'javascript':this.props.language}
				value={this.props.literal}
				inline={this.props.inline}
			/>
		);
	}
};

export default CodeBlock;