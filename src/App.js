import React, { Component } from 'react';
import Header from './components/Header'
import NewDate from './components/NewDate';
import DatesList from './components/DatesList';
class App extends Component{
    state = {
        dates: []
    }

    createNewDate = d => {
        //copiar el state
        const dates = [...this.state.dates, d];

        //agregar nuevo state
        this.setState({
            dates
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
                    <div className="mt-3 col-md-10 mx-auto">
                        <DatesList
                            cita={this.state.dates}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
