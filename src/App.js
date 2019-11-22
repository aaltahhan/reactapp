import React, { Component } from 'react';
import Cart from './components/cart';
import LstCounters from './components/lstcounters';
import './App.css';
class App extends Component {
    state = {
        counters: [
            { id: 1, name: " React JS vs Angular", value: 0 },
            { id: 2, name: "ASP.NET Core or Node JS", value: 0 },
            { id: 3, name: "Lifecycle of React JS Components", value: 0 },
            { id: 4, name: "Comparing JavaScript Libraries/Frameworks", value: 0 }
        ]
    };
    handleAddButton = counter => {
        const tempcounters = [...this.state.counters];
        const i = tempcounters.indexOf(counter);
        tempcounters[i] = { ...counter };
        tempcounters[i].value++;
        this.setState({ counters: tempcounters });
    };

    handleDeleteButton = (countersId) => {
        const tempcounters = this.state.counters.filter(c => c.id !== countersId);
        this.setState({ counters: tempcounters });
    };

 

    render() {
        return (
            <React.Fragment>
                <Cart totalItems = {this.state.counters.map(c => c.value).reduce((prev, next) =>   prev + next)} />
                <main className="container">
                    <LstCounters counters={this.state.counters}  onDelete={this.handleDeleteButton} onIncrement={this.handleAddButton} />
                </main>
            </React.Fragment>
        );
    }
}

export default App;