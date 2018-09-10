import React, { Component } from 'react'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            price: '',
            category: '',
            brand: '',
            quantity: 100
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.onAddProduct(this.state);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form className="col-md-4" onSubmit={this.onSubmit}>
            <h1>Add product</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" type="text" className="form-control" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input name="price" type="text" className="form-control" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input name="category" type="text" className="form-control" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Brand</label>
                    <input name="brand" type="text" className="form-control" onChange={this.onChange} />
                </div>
                <button type="submit" className="btn btn-secondary">Add</button>
            </form>
        );
    }
}

export default AddProduct;