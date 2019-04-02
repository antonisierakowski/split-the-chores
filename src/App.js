import React, { Component } from 'react';
import db from './firebaseConfig'
import 'firebase/database'

class App extends Component {
	componentDidMount() {
		// db.doc("todos/1").get().then((resp) => {
		// 	console.log(resp.data());
		// });

		// db.collection("todos").get().then((resp) => {
		// 	console.log(resp.docs[0].data());
		// });

		db.doc("todos/4").set({content: 'oh jeez'})
	}

	render() {
		return (
			<div className="App">
				asd
			</div>
		);
	}
}

export default App;
