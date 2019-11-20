import React, { Component } from 'react';
import MyCounter from './mycounter';

class LstCounters extends Component {
    state = {
        counters: [
           {id: 1,name: " React JS vs Angular", value:0}, 
{id: 2, name: "ASP.NET Core or Node JS" , value:0}, 
{id: 3, name: "Lifecycle of React JS Components", value :0 }, 
{id: 4, name: "Comparing JavaScript Libraries/Frameworks", value:0}
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

    handleClearCounters = () => {
        const tempcounters = this.state.counters.map(ct => {
            ct.value = 0;
            return ct;
        });
        this.setState({ counters: tempcounters })
    };

    render() {
        return (<div>

            <button className="btn btn-primary btn-sm m-3" onClick={this.handleClearCounters}>Clear Counters</button>
            {this.state.counters.map(counter =>
                (<MyCounter key={counter.id} counter={counter} onDelete={this.handleDeleteButton} onIncrement={this.handleAddButton} />))}
				
        </div>)
    }
}

export default LstCounters;