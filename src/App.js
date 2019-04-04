import React, { useState } from 'react';
import ChoreList from './components/ChoresList';
import AddChore from './components/AddChore';
import Header from './components/styled/Header';
import GlobalStyle from './components/styled/GlobalStyle'
import Wrapper from './components/styled/Wrapper.js'

const App = () => {
	const [ choresData, setChoresData ] = useState( )

	return (
		<>
			<GlobalStyle/>
			<Header>Split the chores</Header>
			<Wrapper>
				<AddChore/>
				<ChoreList/>
			</Wrapper>
		</>
	);
}

export default App


// FECZOWANIE

// import { useState, useEffect } from 'react';
// import db from '../firebaseConfig'
// import 'firebase/database'

// export default function useFetchChores() {
// 	const [chores, setChores] = useState(null);

// 	useEffect(() => {
// 		db.collection("chores").get()
// 		.then( snapshot => {
// 			return snapshot.docs.map(e => {
// 				return {
// 					id: e.id,
// 					task: e.data().task,
// 					person: e.data().person,
// 				}
// 			})
// 		}).then(fetchedChores => {
// 			setChores(fetchedChores)
// 		})
// 	}, [])

// 	return chores;
// }







// FETCHING 

// import db from './firebaseConfig'
// import 'firebase/database'


	// db.doc("todos/1").get().then((resp) => {
	// 	console.log(resp.data());
	// });

	// db.collection("todos").get().then((resp) => {
	// 	console.log(resp.docs[0].data());
	// });

	//db.doc("todos/4").set({content: 'oh jeez'})

	//.onSnapshot zamiast .get
