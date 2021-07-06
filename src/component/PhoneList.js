import React from 'react';
import { ProductConsumer } from '../context/Context';
import Phone from './Phone';
import Title from './Title';
import './PhoneList.css';
import {Link} from 'react-router-dom';
export default function PhoneList() {
    return (
        <React.Fragment>
                    
                    <div className="container-phones">                       
                        <Title title1={"our"} title2={"phones"}/>
                        <Link to ={`/add-new-phone/`}>
                            <button className="btn btn-primary col-4 offset-8"><i class="fas fa-plus"></i> New Phone</button>
                        </Link>
                        <div className="row py-5" >
                        <ProductConsumer>
                            {val=>{
                                return val.products.map(item =>{
                                return <Phone key = {item.id} product = {item}/>
                                });
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
        </React.Fragment>
    );
}
