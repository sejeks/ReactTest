import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {
        return (
            <div>
                <Link to="/Reptiles"><button>Reptiles</button></Link>
                <Link to="/Cats"><button>Cats</button></Link>
            </div>
        );
    }
}

export default Menu;