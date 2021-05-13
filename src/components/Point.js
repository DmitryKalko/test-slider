import React from 'react';

import './App.css';

const Point = (props) => {
    const { id, activeSlide, changeActiveSlide } = props;
    if (activeSlide === id) {
        return (
            <i className="fas fa-circle"></i>
        )
    } else {
        return (
            <i className="far fa-circle" onClick={() => changeActiveSlide(id)}></i>
        )
    };
};

export default Point;