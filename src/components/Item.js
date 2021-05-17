import React from 'react';

import './App.css';

const Item = (props) => {
    const { name, url, id, changeActiveSlide } = props;

    return (
        <li
            className='slide'
            onClick={() => changeActiveSlide(id)}
        >
            <img src={url} />
            <p>{name}</p>
        </li>
    );
};

export default Item;