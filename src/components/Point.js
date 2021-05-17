import React from 'react';

import './App.css';

const Point = (props) => {
    const { id, activeSlide, changeActiveSlide } = props;
    if (activeSlide === id) {
        return (
           <div className='circle not-active-circle'></div>
        )
    } else {
        return (
            <div className='circle active-circle' onClick={() => changeActiveSlide(id)}></div>
        )
    };
};

export default Point;