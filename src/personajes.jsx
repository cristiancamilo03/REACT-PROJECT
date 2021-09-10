import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Personajes = ({imagen, nombre, edad, genero,posicion,equipo,id}) => (

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

            <p><Link to={`/personaje/${id}`} class="btn btn-primary">Detalle</Link></p>

        </div>
    </div>
);
export default Personajes;
