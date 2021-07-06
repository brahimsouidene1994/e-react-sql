import React from 'react';
import { ProductContext } from '../../context/Context';
import { useContext } from 'react';
import { useState } from 'react';
import './addPhone.css';

import { Formik, Form, Field } from 'formik';

import * as yup from 'yup';

let validationSchema = yup.object().shape({
    title: yup.string().min(5).required(),
    img: yup.string().required(),
    price: yup.number().min(0.0).required(),
    company: yup.string().min(5).required(),
    info: yup.string().min(10).required(),
    qte_stock: yup.number().min(0).required()
});

export default function AddPhone() {

     const [phone, setPhone] = useState({});

    const { addPhone } = useContext(ProductContext);
    return (
        <div className="container">
            <h1>Add new phone </h1>
            <Formik
                initialValues={{
                    title: '',
                    image: '',
                    price: 0,
                    company: '',
                    info: '',
                    qte_stock: 0
                }}
                validationSchema={validationSchema}
                onSubmit={async (data) => {
                    const { title, img, price, company, info, qte_stock } = data;
                    setPhone({
                        title: title,
                        img: img,
                        price: price,
                        company: company,
                        info: info,
                        qte_stock: qte_stock
                    })
                    if(await addPhone(phone)){
                        console.log("phone added");
                    }
                }}
            >
                {
                    ({ values, errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <Field name="title" type="input" placeholder="Title" className="form-control" />
                                {touched.title && errors.title ?
                                    (<small className="text-danger">{errors.title} </small>)
                                    : null
                                }
                            </div>
                            <div className="form-group">
                                <Field name="img" type="input" placeholder="Image" className="form-control" />
                                {touched.img && errors.img ?
                                    (<small className="text-danger">{errors.img} </small>)
                                    : null
                                }
                            </div>
                            <div className="form-group">
                                <Field name="price" type="input" placeholder="Price" className="form-control" />
                                {touched.price && errors.price ?
                                    (<small className="text-danger">{errors.price} </small>)
                                    : null
                                }
                            </div>
                            <div className="form-group">
                                <Field name="company" type="input" placeholder="Company" className="form-control" />
                                {touched.company && errors.company ?
                                    (<small className="text-danger">{errors.company} </small>)
                                    : null
                                }
                            </div>
                            <div className="form-group">
                                <Field name="info" type="input" placeholder="Description" className="form-control" />
                                {touched.info && errors.info ?
                                    (<small className="text-danger">{errors.info} </small>)
                                    : null
                                }
                            </div>
                            <div className="form-group">
                                <Field name="qte_stock" type="input" placeholder="Qte en stock" className="form-control" />
                                {touched.qte_stock && errors.qte_stock ?
                                    (<small className="text-danger">{errors.qte_stock} </small>)
                                    : null
                                }
                            </div>
                            <button type="submit" className="btn btn-primary" >Save</button>
                            {/* {console.log(JSON.stringify(values, null, 2))} */}
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
