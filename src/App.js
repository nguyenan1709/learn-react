import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Ref from './components/9.Ref'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          src: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
          name: 'Ip 10',
          price: '10.000.000',
          status: true
        },
    
        {
          id: 2,
          src: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
          name: 'Ip 11',
          price: '15.000.000',
          status: true
        }
      ],

      isActive: true
    }
  }
  
  onClick = () => {
    console.log("Đây là components")
  }

  onStateClick = () => {
    this.setState({
      isActive: ! this.state.isActive
    })
  }

  render() {
    let filterItem = this.state.products.map((i, index) => {
      let element = ''
      if(i.status) {
        element =  <tr key={ index }>
                      <td>{index}</td>
                      <td>{i.name}</td>
                      <td className="text-success">
                        {i.price}
                      </td>
                    </tr> 
      }
  
      return element;
    });
  
    return (
      <div className="App">
        <Header/>

        <Ref/>
  
        <button className="btn-danger" onClick={this.onClick}>Click me</button>

        

        <div className="container">
          {
            this.state.isActive ? (
              <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>

              <tbody>{filterItem}</tbody>
            </table>
            ) : null
          }
          <button
            onClick={this.onStateClick} 
            className="btn btn-info mt-4">Show table : {this.state.isActive == true ? 'true' : 'false'}</button>
        </div>
      </div>
    );
  }
}

export default App;
