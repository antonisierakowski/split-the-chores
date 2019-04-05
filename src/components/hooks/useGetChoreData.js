import React, { useState, useEffect } from 'react';
import db from '../../firebaseConfig'

const useGetChoreData = () => {
    const [ choresData, setChoresData ] = useState( [] )
	const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);
	const [ listener, setListener ] = useState(true);
    
    useEffect( () => {
		console.log('USE EFFECT ODPALONY')
		const getChoreData = async () => {
			setIsLoading(true)
			setIsError(false);
			const result = await db.collection("chores").get()
			.then( snapshot => {
				return snapshot.docs.map(e => {
					return {
						id: e.id,
						task: e.data().task,
						person: e.data().person,
					}
				})
			}).then(fetchedChores => {
				setChoresData(fetchedChores);
				setIsLoading(false);
			}).catch( error => {
                setIsError(true);
                console.log('error getting data from firestore')
			})
		}
        getChoreData();
	}, [])
	
	useEffect( () => {
		const listenForChanges = async () => {
			db.collection('chores').onSnapshot(snapshot => {
				setListener(!listener);
				console.log(listener)
			})
		}
		// listenForChanges();
	}, [])
    
    return { choresData, isLoading, isError }
}

export default useGetChoreData;

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