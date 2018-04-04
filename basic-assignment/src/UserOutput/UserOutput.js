import React from 'react'

const useroutput = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am a user and my username is {props.username}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default useroutput;