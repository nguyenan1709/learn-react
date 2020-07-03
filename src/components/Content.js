import React, { component, Component } from 'react';

class Content extends Component {
    render () {
        var product = [
            {
                id: 1,
                name: 'Ip 6',
                status: true
            },

            {
                id: 2,
                name: 'Ip 7',
                status: true
            },

            {
                id: 3,
                name: 'Ip 8',
                status: false
            }
        ];

        var filterProduct = product.map((i, index) => {
            return <div key={index}>
                <h2>Name: { i.name }</h2>
                <p>Id: {i.id }</p>
            </div>
        })

        return (
            <div className="container">
                <div className="content">
                    {filterProduct}
                </div>
            </div>
        )
    }
}

export default Content;