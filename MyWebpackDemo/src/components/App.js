import React, { Component } from 'react'
import ProductListContainer from './../container/ProductListContainer';
import AddProductContainer from './../container/AddProductContainer';

class App extends Component {

    render() {
        return (
            <div>
                <h1 className="mt-3 text-center">Product Manager</h1>
                <div className="container">
                    <div className="row">
                        <AddProductContainer />
                        <ProductListContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;