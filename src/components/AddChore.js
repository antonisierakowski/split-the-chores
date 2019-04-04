import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import db from '../firebaseConfig'
import 'firebase/database'
import AddChoreForm from './styled/AddChoreForm'

const AddChore = props => {
    const [ taskInputValue, setTaskInputValue ] = useState('')
    const [ personInputValue, setPersonInputValue ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if ( taskInputValue && personInputValue ) {
            db.collection('chores').add({
                task: taskInputValue,
                person: personInputValue,
            }).then(() => {
                console.log('sukces')
            }).catch(error => {
                console.log(error)
            })
            // setTaskInputValue('')
            // setPersonInputValue('')
        }
    }

    return (
        <AddChoreForm onSubmit={handleSubmit}>
            <TextField
            autoComplete='off'
            id="standard-full-width"
            label="add task"
            placeholder="type here"
            value={taskInputValue}
            onChange={e => setTaskInputValue(e.target.value)}
            margin="none"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
            autoComplete='off'
            id="standard-full-width"
            label="who's doing it"
            value={personInputValue}
            onChange={e => setPersonInputValue(e.target.value)}
            placeholder="type here"
            margin="none"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <Button type='submit' style={{marginRight: '8px',}}>
                Submit
            </Button>
      </AddChoreForm>
    )
}

export default AddChore;