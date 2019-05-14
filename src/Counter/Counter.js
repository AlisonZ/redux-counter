import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

export default class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }

    render() {
        const {count, onIncrement, onDecrement} = this.props;

        return (
            <div className="counter">
                <button className="counter__button" type="button" onClick={onDecrement}>-</button>
                <span className="counter__count">{count}</span>
                <button className="counter__button" type="button" onClick={onIncrement}>+</button>
            </div>
        );
    }
}