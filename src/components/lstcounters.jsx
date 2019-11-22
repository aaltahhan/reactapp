import React, { Component } from 'react';
import MyCounter from './mycounter';

class LstCounters extends Component {

    render() {
        return (<div>
            <p>
            {this.props.counters.map(counter =>
                (<MyCounter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} />))}</p>
        </div>)
    }
}

export default LstCounters;