import React from 'react';
import Date from './Date'
const DatesList = ({ cita }) => (  
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">Date Management</h2>
            <div className="lista-citas">
                {cita.map(d => (
                    <Date
                        key={d.id}
                        cita={d}
                    />
                ))}
            </div>
        </div>
    </div>
);
 
export default DatesList;