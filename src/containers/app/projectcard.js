import React from 'react'

const ProjectCard = ({title}) => (
	<section>

		<img src={require(`./${title}.png`)} style={{ width: 150 }} alt={`${title}`}  />
	    <p>title:flashlight plugin</p>
	    <p>merge windows into tabs</p>
	    <p>demo</p>

	</section>
)

export default ProjectCard