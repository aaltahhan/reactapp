import React, { Component } from 'react';

class MyCounter extends Component {
    render() {
        return (
            <div>
              <ul> <li> <h5>{this.props.counter.name }</h5>
                <span className={this.setBadgeClasses()}>{this.formatCt()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary btn-sm"> Enrollment</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-warning btn-sm m-3">Cancel</button>
                  </li>  </ul>
            </div>
        );
    };

    setBadgeClasses() {
        let badgeclasses = "badge m-3 ";
        badgeclasses += (this.props.counter.value === 0) ? "badge-danger" : "badge-info";
        return badgeclasses;
    };

    formatCt() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    };
}

export default MyCounter;
