// Funcional Component -> Es como se usa actualmente react
import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, substitulo }) => {
    return ( // Esto es como un "Fragment", los booleanos no lo muestra
        <>
            {/*<pre> { JSON.stringify(saludo, null, 3) } </pre>;*/}
            <h1> { saludo } </h1>
            <p> { substitulo } </p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    substitulo: 'Soy un substitulo'
}

export default PrimeraApp;