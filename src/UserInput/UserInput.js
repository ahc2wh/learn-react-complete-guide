import React from 'react';

const userInput = (props) => {
    return(
        <div>
        Input Username: <input type="text" value={props.username} onChange={props.change}></input>

        </div>

    )
}

export default userInput;