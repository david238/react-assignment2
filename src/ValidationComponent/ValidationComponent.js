import React from 'react';

const validationComponent = (props) => {

    let txt = 'Txt long enough';

    if (props.txtlength < 5) {
        txt = 'Txt too short';
    }
    
    return (
        <div>
            <p>Length of text input is: {props.txtlength}</p>
            <p>{txt}</p>
        </div>
    )
}

export default validationComponent;