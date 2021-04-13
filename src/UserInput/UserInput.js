import React from 'react';

const userInput = (props) => {
    const inline_style = {
        margin: '10px',
        color: 'blue'
    }
    return(
        <div style={inline_style}>
        Input Username: <input type="text" value={props.username} onChange={props.changeEvent}></input>

        </div>

    )
}

export default userInput;