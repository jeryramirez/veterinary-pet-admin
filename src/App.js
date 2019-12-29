import React, { Component } from 'react';
import Header from './components/Header'
import NewDate from './components/NewDate';
class App extends Component{
    state = {

    }
    render() {
        return (
            <div className="container">
                <Header
                    titulo="Veterinary Pet Management"
                />
                <div className="row">
                    <div className="col-md-12 col-mx-auto">
                        <NewDate/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
