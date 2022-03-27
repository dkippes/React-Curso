// https://es.reactjs.org/docs/events.html
import React, {Fragment, useState} from "react";
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value); // [] -> Con 2 valores

    // handleAdd
    const handleAdd = (e) => {
        // setCounter((c) => c + 1); -> Otra forma de setear un nuevo valor si no tuvieramos acceso a la variable
        setCounter(counter + 1)
    }

    const handleSubtract = (e) => {
        setCounter(counter - 1)
    }

    return (
        <>
            <h1> CounterApp </h1>
            <p> { counter } </p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={(e) => setCounter(value) }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 123
}

export default CounterApp;