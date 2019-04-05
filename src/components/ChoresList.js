import React from 'react';
import ChoreItem from './ChoreItem'

const ChoreList = props => {
    const style = {
        wrapper: {
            maxHeight: '240px',
            overflow: 'scroll',
        },
    }

    const listOfChores = props.data ? props.data.map( (e, i) => {
        return (
            <ChoreItem task={e.task} person={e.person}key={e.id} odd={i % 2} id={e.id} key={e.id} />
        )
    }) : null;

    return (
        <>
            {listOfChores}
        </>
    );
}

export default ChoreList;