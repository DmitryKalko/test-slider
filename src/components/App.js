import React, { Component } from "react";

import './App.css';
import { Base } from './Base';
import List from './List';
import Points from './Points';

class App extends Component {
    state = {
        base: Base,
        activeSlide: 4,
        coordX: null,
    };

    prevSlide = () => {
        const { activeSlide, base } = this.state;
        if (activeSlide === base[0].id) {
            this.setState({ activeSlide: base[base.length - 1].id })
        } else {
            this.setState({ activeSlide: activeSlide - 1 });
        };
    };

    nextSlide = () => {
        const { activeSlide, base } = this.state;
        if (activeSlide === base.length) {
            this.setState({ activeSlide: base[0].id });
        } else {
            this.setState({ activeSlide: activeSlide + 1 });
        };
    };

    changeActiveSlide = (id) => {
        const { base } = this.state;
        const copyBase = [...base];
        const selectedSlide = copyBase.filter(item => item.id === id);
        this.setState({ activeSlide: selectedSlide[0].id });
    };

    touchStart = (e) => {
        const firstTouch = e.touches[0].clientX;
        this.setState({ coordX: firstTouch });
    };

    touchMove = (e) => {
        const { coordX } = this.state;
        if (!coordX) {
            return false
        };
        let finalCoordX = e.touches[0].clientX;
        let diff = finalCoordX - coordX;
        if (diff > 50) {
            this.prevSlide();
            this.setState({ coordX: null });
        } else if (diff < -50) {
            this.nextSlide();
            this.setState({ coordX: null });
        };
    };

    render() {
        const { activeSlide, base } = this.state;
        return (
            <div className='main'>
                <div className='slides-area'>
                    <i className="fas fa-chevron-left" onClick={this.prevSlide}></i>
                    <List
                        base={base}
                        activeSlide={activeSlide}
                        changeActiveSlide={this.changeActiveSlide}
                        onTouchStart={this.touchStart}
                        onTouchMove={this.touchMove}
                    />
                    <i className="fas fa-chevron-right" onClick={this.nextSlide}></i>
                </div>
                <Points
                    base={base}
                    activeSlide={activeSlide}
                    changeActiveSlide={this.changeActiveSlide}
                />
            </div>
        );
    };
};

export default App;