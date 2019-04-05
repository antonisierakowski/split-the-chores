import React from 'react'
import ChoreItemContainer from './styled/ChoreItemContainer'
import CloseButton from './styled/CloseButton'
import Divider from '@material-ui/core/Divider'
import db from '../firebaseConfig'

export default function ChoreItem(props) {
	const { task, person, id, odd } = props;

	const handleClick = () => {
		console.log(id)
		db.collection('chores').doc(id).delete().then(function() {
			console.log("Document successfully deleted!");
		}).catch(function(error) {
			console.error("Error removing document: ", error);
		});
	}

	return (
		<ChoreItemContainer odd={odd}>
			<div>
				<h4>{task}</h4>
				<Divider />
				<span>{person}</span>
			</div>
			<div>
				<CloseButton onClick={handleClick}>X</CloseButton>
			</div>
		</ChoreItemContainer>
	)
}
