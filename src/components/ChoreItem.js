import React from 'react'
import ChoreItemContainer from './styled/ChoreItemContainer'
import CloseButton from './styled/CloseButton'
import Divider from '@material-ui/core/Divider'

export default function ChoreItem(props) {
	const { task, person, odd } = props;
	return (
		<ChoreItemContainer odd={odd}>
			<div>
				<h4>{task}</h4>
				{/* <Divider /> */}
				<span>{person}</span>
			</div>
			<div>
				<CloseButton>X</CloseButton>
			</div>
		</ChoreItemContainer>
	)
}
