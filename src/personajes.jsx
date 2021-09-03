import React from 'react';
import PropTypes from 'prop-types';

const Personajes = ({imagen, nombre, edad, genero,posicion,equipo}) => (
    <div className="card">
        <div className="card-body">
            <div>
                {imagen}
            </div>
            <h5 className="card-title">
                {nombre}
            </h5>
            <p className="card-text">Edad: {edad}.</p>
            <p className="card-text">Genero: {genero}.</p>
            <p className="card-text">Posicion: {posicion}.</p>
            <p className="card-text">Equipo: {equipo}.</p>
        </div>
    </div>
);
export default Personajes;
