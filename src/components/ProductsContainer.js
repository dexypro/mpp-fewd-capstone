import React from 'react'
import ProductsFilter from './ProductsFilter';
import ProductsList from './ProductsList';
import { ProductConsumer } from '../context';
import Loading from './Loading';

export default function ProductsContainer() {
    return (
        <ProductConsumer>
            {
                (value) => {
                    const { loading, sortedProducts, products } = value;
                    if(loading){
                        return <Loading />
                    }
                    return (
                        <div className="mt-5">
                            {/* 
                                rubric14
                                The user shall see a controls bar
                            */}
                            <ProductsFilter products={products} />
                            {/* 
                                rubric20
                                The user shall see a grid that is populated with the products of
                                the selected category 
                            */}
                            <ProductsList products={sortedProducts} />
                        </div>
                    )
                }
            }
        </ProductConsumer>
    )
}
