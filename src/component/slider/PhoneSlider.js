import React from 'react';
import './slider.css';
import {Link} from 'react-router-dom';

import {ButtonContainer} from '../styled-component/Buttons';
export default function PhoneSlider(props) {
    const {title, img, company, price, info, } = props.product;
    return (
        <div className="container-slider">
                    <div className="row">
                        <div className="title-phone col-10">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="row">    
                        <div className="col-10  col-md-3 ">
                            <img src={`../${img}`} className="img-fluid"  alt="product"/>
                        </div>  
                        <div className="model-phone col-10  col-md-6 m-4  ">
                            <h1>model: {title}</h1>
                            <h4 className="company-phone"> 
                                mady by: {company}
                            </h4>
                            <h4 className="price-phone">
                                <strong>
                                    price: <span>$</span>
                                    {price}
                                </strong>
                            </h4>
                            <p className="info-phone ">
                                some info : {info}
                            </p>
                            {/* buttons*/}
                        </div>
                        <div className="col-10 col-md-2">
                            <div className=" mt-5">
                                <Link to="/phones">
                                    <ButtonContainer>Check our store</ButtonContainer>
                                </Link>
                               
                            </div> 
                        </div>
                    </div>
                </div>
    )
}
