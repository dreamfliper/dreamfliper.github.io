import React from 'react'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import py from 'highlight.js/lib/languages/python'
import xml from 'highlight.js/lib/languages/xml'

Lowlight.registerLanguage('javascript', js)
Lowlight.registerLanguage('python', py)
Lowlight.registerLanguage('xml', xml)

const CodeBlock = ({language, literal, inline}) =>(
			<Lowlight
				language={language==='vue' ? 'xml':language}
				value={literal}
				inline={inline}
			/>
)

export default CodeBlock;