import React, { Component } from 'react';
import Header from './components/Header'
import NewDate from './components/NewDate';
import DatesList from './components/DatesList';
class App extends Component{
    state = {
        dates: []
    }

    componentDidMount() {
        const datesLS = localStorage.getItem('dates');
        if (datesLS) {
            this.setState({
                dates: JSON.parse(datesLS)
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem('dates', JSON.stringify(this.state.dates));
    }

    createNewDate = d => {
        //copiar el state
        const dates = [...this.state.dates, d];

        //agregar nuevo state
        this.setState({
            dates
        })
    }

    deleteDate = id => {
        //hacer una copia del state
        const currentlyDates = [...this.state.dates];

        //cuerpo de la funcion
        const dates = currentlyDates.filter(date => date.id !== id);

        //agregar cambios al state
        this.setState({
            dates
        })
    }

    render() {
        return (
            <div className="container">
                <Header
                    titulo="Pet Management"
                />
                <div className="row">
                    <div className="col-md-12 col-mx-auto">
                        <NewDate
                            createNewDate={this.createNewDate}
                        />
                    </div>
                    <div className="mt-3 col-md-12 mx-auto">
                        <DatesList
                            cita={this.state.dates}
                            deleteDate={this.deleteDate}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
