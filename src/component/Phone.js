import React from 'react';
import { ProductConsumer } from '../context/Context';
import { Link } from 'react-router-dom';
import './Phone.css';
export default function Phone(props) {
    //console.log("phone object:",props.product)
    const { id, title, img, price, inCart , qte_stock } = props.product;
    return (
    
        <div className="col-9 mx-auto my-1 col-md-6 col-lg-3">
            <ProductConsumer>
                {val => {
                    return (
                    <div className="card my-2">
                        <div className="img-container"
                            onClick={() => { val.handleProduct(id) }}>
                            <Link to={`/details/`}>
                                <img src={img} alt="product" className="card-img-top" />
                            </Link>
                            <button className="cart-btn"
                                disabled={inCart || qte_stock <= 0 ? true : false}
                                onClick={() => { 
                                    val.addToCart(id);
                                    val.openModal(id);
                                 }}>
                                {inCart ?
                                    <p className="text-capitalize mb-0" style={{color:"green"}}>in Cart</p> :
                                    <i className="fas fa-cart-plus" />
                                }
                            </button >
                            <button 
                                className="cart-btn-stock"
                                disabled
                            >
                            {qte_stock > 0 ?
                                <p className="text-capitalize mb-0">on stock</p> :
                                <p className="text-capitalize mb-0" style={{color:"red"}}>repture de stock</p>
                            }
                            </button>
                        </div>
                        <div className="card-footer">
                            <p >{title}</p>
                            <h5 >
                                <span>$</span>
                                {price}
                            </h5>
                        </div>
                    </div>)
                }}
            </ProductConsumer>
            
        </div>
    )
}
