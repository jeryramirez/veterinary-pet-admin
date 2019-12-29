import React, { Component } from 'react';
import uuid from 'uuid'


// esto se utiliza para que una vez se haya ejecutado el evento submit las variables del state queden vacias junto a los campols del form
const initialState = {
    cita: {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        },
        error: false
}
class NewDate extends Component {

    //this is the state here we have to add every input
    state = {...initialState}
    //this method process the event and here we can chage the state using this.setState{}
    handleChange = (e) => {
        
        //this is a method, we have to use ()
        //this method is used to sent the new dates from form to state
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    //envio del formulario
    handleSubmit = (e) => {
        e.preventDefault();
        
        // se extraen los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        // se validan los campos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });

            return;
        }
        //generar objeto con los datos
        const newDate = {...this.state.cita}
        newDate.id = uuid();

        // agrega la cita
        this.props.createNewDate(newDate)

            //empting every form input
        this.setState({
            ...initialState
            })
    }

    render() {

        const { error } = this.state;

        return (
            <div className="card mt-5 py-3">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Completar Campos Correspondientes
                    </h2>

                    {error ? <div className="alert alert-danger text-center">todos los campos son obligatorios</div> : null}



                    {/* por convencion a los eventos se les pone el prefijo handle seguido del nombre del evento */}
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div> {/* form-group end ! */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div> {/* form-group end ! */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div> {/* form-group end ! */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                    
                                >

                                </textarea>
                            </div>
                        </div> {/* form-group end ! */}

                        <input type="submit" className="py-2 btn btn-block btn-success" value="Agregar nueva cita"/>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default NewDate;