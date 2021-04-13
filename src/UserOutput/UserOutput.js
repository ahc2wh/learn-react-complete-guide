import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return(
        <div className="UserOutput">
        <p>
            Hey {props.userInput_username}
        </p>

        <p>
            Look at all this text
        </p>

        </div>

    )
}

export default userOutput;