import React from 'react'
import SingleProduct from './SingleProduct';
import CategoryMenu from './CategoryMenu';

export default function ProductsList({products}) {
    if(products.length === 0){
        return  (
            <div className="empty-search">
                <h3>unfortunately no products matched your search paramenters</h3>
            </div>
        )
    }
    return (
        <div className="row">
            <div className="col-lg-3">
                {/* 
                    rubric19
                    The user shall see a category menu that displays all of the
                    available shopping categories 
                */}
                <CategoryMenu />
            </div>
            <div className="col-lg-9 mb-5">
                {/* 
                    rubric20
                    The user shall see a grid that is populated with the products of
                    the selected category
                */}
                <div className="row">
                {
                    products.map(item => {
                        return <SingleProduct key={item.name} product={item} />;
                    })
                }
                </div>
            </div>
        </div>
    )
}
