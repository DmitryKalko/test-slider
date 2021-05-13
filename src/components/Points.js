import React from 'react';

import './App.css';
import Point from './Point';

const Points = (props) => {
    const { base, activeSlide, changeActiveSlide } = props;


    const points = base.map(item => (
        <Point
            key={item.id}
            {...item}
            activeSlide={activeSlide}
            changeActiveSlide={changeActiveSlide}
        />
    ));

    return (
        <div className='points-list'>
            {points}
        </div>
    );
};

export default Points;