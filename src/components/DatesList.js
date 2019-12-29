import React from 'react';
import Date from './Date';
import PropTypes from 'prop-types';
const DatesList = ({ cita, deleteDate }) => (  
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">Date Management</h2>
            <div className="lista-citas">
                {cita.map(d => (
                    <Date
                        key={d.id}
                        cita={d}
                        deleteDate={deleteDate}
                    />
                ))}
            </div>
        </div>
    </div>
);
DatesList.propTypes = {
    cita: PropTypes.array.isRequired,
    deleteDate: PropTypes.func.isRequired
}
export default DatesList;