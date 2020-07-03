import React, { Component } from 'react';

class Product extends Component {
    onAddToCart1(_text) {
        alert(_text);
    }


    //onAddToCart2 phải có constructor
    constructor(props) {
        super(props);
        this.onAddToCart2 = this.onAddToCart2.bind(this)
    }

    onAddToCart2() {
        alert(this.props.price)
    }

    onAddToCart3 = () => {
        alert(this.props.name)
    }

    render () {
        return (
            <div>
                <div className="col-md-4">
                    <img src={ this.props.src } alt=""/>
                    <h2>{ this.props.name }</h2>
                    <p>{ this.props.price }</p>   
                    <p>
                        <button className="btn btn-primary" onClick={() => { this.onAddToCart1('mua di nao') }}>Buy</button>
                    </p>

                    <p>
                        <button className="btn btn-primary" onClick={ this.onAddToCart2 }>Show price</button>
                    </p>

                    <p>
                        <button className="btn btn-primary" onClick={ this.onAddToCart3 }>Show name</button>
                    </p>
                </div>
            </div>
        )
    }
}

export default Product;