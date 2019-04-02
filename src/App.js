import React, { Component } from 'react';
import './App.css';

class App extends Component {
	componentDidMount() {
		fetch('https://test-45931.firebaseio.com/')
			.then(resp => {
				console.log(resp);
			})
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
