//@flow
import React from 'react'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import py from 'highlight.js/lib/languages/python'
import xml from 'highlight.js/lib/languages/xml'

Lowlight.registerLanguage('javascript', js)
Lowlight.registerLanguage('python', py)
Lowlight.registerLanguage('xml', xml)

type CodeBlockType = {
  language: string,
  literal: string,
  inline: boolean,
}

const CodeBlock = ({ language, literal, inline }: CodeBlockType) => (
  <Lowlight language={language === 'vue' ? 'xml' : language} value={literal} inline={inline} />
)

export default CodeBlock
