import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {

    return <div className="chartxt" 
    onClick={props.clicked}> {props.letter} </div>
}

export default charComponent;