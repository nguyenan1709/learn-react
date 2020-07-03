import React, { Component } from 'react';

class Ref extends Component {
    onSave = () => {
        console.log(this.refs.key.value )
    }
    
    render() { 
        return (
            <div>
                 <div className="col-12">
                    <label>search</label>
                    <input ref="key"/>
                    <button className="btn btn-danger" onClick={ this.onSave }>Lưu</button>
                </div>
            </div>
        );
    }
}
 
export default Ref;

// Lấy giá trị thông qua Ref. VD: lấy giá trị ô input, textarea,...
// Cú pháp: thêm thuộc tính ref="key"
// Lấy giá trị: this.ref.key.value