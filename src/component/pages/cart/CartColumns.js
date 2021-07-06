import React from 'react';
import './Cart.css';
export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
           <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="column-head">products</p>     
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="column-head">name of products</p>     
                </div>
                <div className="col-10 mx-auto col-lg-2">
                     <p className="column-head">price</p>     
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="column-head">quantity</p>     
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="column-head">remove</p>     
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="column-head">total</p>     
                </div>
            </div> 
        </div>
    )
}
