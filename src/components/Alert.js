import React, {Fragment} from 'react';

const Alert = ({ error }) => {
    return (
        error ? <div className="alert alert-danger text-center">Todos Los Campos son Obligatorios</div> : null
    
    )
}
 
export default Alert;