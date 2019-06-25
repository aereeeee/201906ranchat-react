import React from 'react';
import './Textbox.scss'

const Textbox = ({
    content,
}) => {

    return (
        <div className='wrapper'>
            <div className='textbox'>
                {content}
            </div>
        </div>
    );
};

export default Textbox;