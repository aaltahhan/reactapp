import React from 'react';

const Cart = (props) => {
    return (<nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
           Total Enrollments
        <span className="badge badge-pill badge-info">{props.totalItems}</span>
        </a>
    </nav>);
};

export default Cart;