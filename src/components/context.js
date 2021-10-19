import React, {Component} from 'react';
import { storeProducts,detailProduct } from '../data';
const ProductContent = React.createContext();


class ProductProvider extends Component{
    state={
        products:[],
        detailProduct:detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(()=>{
            return { products:tempProducts};
        });
    };

    getItem = id =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    };


    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })  
    };

    render(){
        return(
            <ProductContent.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail}}
            >
                {this.props.children}
            </ProductContent.Provider>
        )
    }
}


const ProductConsumer = ProductContent.Consumer;
export {ProductProvider,ProductConsumer};