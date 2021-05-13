import React from 'react';

import './App.css';
import Item from './Item';

const List = (props) => {
    const { base, activeSlide, changeActiveSlide, onTouchStart, onTouchMove } = props;

    const items = base.filter(item => (
        item.id === activeSlide
        || item.id === activeSlide + 1
        || item.id === activeSlide - 1
    ));

    const activeItems = items.map(item => (
        <Item
            key={item.id}
            {...item}
            changeActiveSlide={changeActiveSlide}
        />
    ))

    return (
        <ul
            className='slides-list'
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
        >
            {activeItems}
        </ul>
    );
}

export default List;