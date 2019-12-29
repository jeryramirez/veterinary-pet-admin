import React, { Component } from 'react';
import Header from './components/Header'
import NewDate from './components/NewDate';
class App extends Component{
    state = {
        citas: []
    }

    createNewDate = dates => {
        //copiar el state
        const citas = [...this.state.citas, dates];

        //agregar nuevo state
        this.setState({
            citas
        })
    }
    render() {
        return (
            <div className="container mb-5">
                <Header
                    titulo="Veterinary Pet Management"
                />
                <div className="row">
                    <div className="col-md-12 col-mx-auto">
                        <NewDate
                            createNewDate={this.createNewDate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
