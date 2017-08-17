import React from 'react';
import Lowlight from 'react-lowlight';
import shallowCompare from 'react-addons-shallow-compare';
import js from 'highlight.js/lib/languages/javascript';
import py from 'highlight.js/lib/languages/python';

Lowlight.registerLanguage('javascript', js);
Lowlight.registerLanguage('python', py);

const CodeBlock = React.createClass({
    displayName: 'CodeBlock',

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    },

    render: function() {
        return (
            <Lowlight
                language={this.props.language==='vue' ? 'javascript':this.props.language}
                value={this.props.literal}
                inline={this.props.inline}
            />
        );
    }
});

export default CodeBlock;