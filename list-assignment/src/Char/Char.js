import React from 'react';

const char = (props) => {
    return (
        <div
            style={{
            display: 'inline-block',
            padding: 16,
            textAlign: 'center',
            margin: 16,
            border: '1px solid black'
        }}
            onClick={props.click}>
            <p>{props.char}</p>
        </div>
    )
}
export default char;