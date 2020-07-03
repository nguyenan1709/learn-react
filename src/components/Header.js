import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <div className="container-fluid">
                <ul className="nav justify-content-start">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.tinhte.vn/">Link</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;