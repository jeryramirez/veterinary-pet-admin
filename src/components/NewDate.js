import React, { Component}from 'react';

class NewDate extends Component {

    //this is the state here we have to add every input
    state = { 
        cita: {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }
    }
    //this method process the event and here we can chage the state using this.setState{}
    handleChange = (e) => {
        
        //this is a method we have to use ()
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }


    render() {
        return (
            <div className="card mt-5 py-3">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Completar Campos Correspondientes
                    </h2>
                    <form>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
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
                                />
                            </div>
                            
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
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