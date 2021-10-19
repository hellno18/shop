import React, {Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './context'
import { ButtonContainer } from './Button'
import {ButtonCart} from './Button'

export default class Details extends Component{
    render(){
        return(
            <ProductConsumer>
                {value => {
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        weight,
                        title
                    } = value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>

                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4>made by : <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue">price : <span >${price}</span></h4>
                                    <h4>weight : <span >{weight}</span></h4>
                                    <p className="text-capitalize font-weight-bold- mt-3 mb-0">
                                        info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>

                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonCart>add to cart</ButtonCart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}