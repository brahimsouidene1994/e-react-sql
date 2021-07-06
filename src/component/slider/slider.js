import React from 'react';
import './slider.css';
import Carousel from 'react-elastic-carousel';
import {ProductConsumer} from '../../context/Context';
import PhoneSlider from './PhoneSlider';
export default function Slider() {


    return (
        <ProductConsumer>
            {val => {
                let phones = [];
                phones =  val.products.map(item => {
                     if (item.qte_stock > 8) {
                      return  <PhoneSlider key={item.id} product={item} />
                    }
                });  
                return (
                <Carousel className="carousel"
                    enableAutoPlay
                    autoPlaySpeed={3000}
                    transitionMs={1000}
                    focusOnSelect={true} >
                        {phones}
                    </Carousel>
                )
            }}
        </ProductConsumer>

    )


}
