import React, { useState, useEffect } from 'react';
import ChoreItem from './ChoreItem'

const ChoreList = props => {
    const style = {
        wrapper: {
            maxHeight: '270px',
            overflow: 'scroll',
        },
    }

    return (
        <div style={style.wrapper}>
            <ChoreItem task='Feed the dog' person='Janusz' />
            <ChoreItem task='Feed the dog' person='Janusz' odd/>
            <ChoreItem task='Feed the dog' person='Janusz' />
            <ChoreItem task='Feed the dog' person='Janusz' odd/>
        </div>
    );
}

export default ChoreList;