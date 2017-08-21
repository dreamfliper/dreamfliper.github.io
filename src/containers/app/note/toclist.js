import React from 'react'
import { Anchor } from 'antd'
const { Link } = Anchor

const toclist = ({anchorlist}) =>(
	<Anchor affix={false}>
		{
			anchorlist.map((anchor,i) =>
					<Link key={i} href={`#${anchor}`} title={`${anchor}`} />
			)
		}
  </Anchor>
)

export default toclist