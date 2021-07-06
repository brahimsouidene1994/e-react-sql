import React, { Component } from 'react';
import { ProductConsumer } from '../../../context/Context';
import Title from '../../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';
import Empty from './CartEmpty';
import './Cart.css';
export default class Cart extends Component {
    render() {
        
        return (
            <div>
                <ProductConsumer>
                    {val => {
                        
                        const { cart } = val;
                        if (cart.length > 0) {
                            return (
                                    <div className="cart-container">

                                        <Title title1={"your"} title2={"cart"} />
                                        <CartColumns />
                                        <CartList />
                                        <CartTotal val={val} />
                                    </div>
                            );
                        } else {
                            
                            return (
                                <div className="cart-container">
                                    <Empty />
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
