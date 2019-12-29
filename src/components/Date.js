import React from 'react';

const Date = ({ cita, deleteDate }) => (  
    <div className="media mt3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre Dueño: </span>{cita.propietario}</p>
            <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
            <p className="card-text"><span>Hora: </span>{cita.hora}</p>
            <p className="card-text"><span>Sintomas: </span></p>
            <p className="card-text">{cita.sintomas}</p>

            <button
                className="btn btn-danger"
                onClick={()=> deleteDate(cita.id)}
            >
                Eliminar &times;
            </button>
        </div>
    </div>

);

 
export default Date;