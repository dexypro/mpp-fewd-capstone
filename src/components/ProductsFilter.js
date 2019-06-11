import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context';

export default function ProductsFilter() {
    const context =useContext(ProductContext);
    const {
        handleChange,
        testChange,
        optionsSort,
        inStock,
        itemsCount,
        filteredCount,
        selectCategory
    } = context;
    
    return (
        <section className="d-flex">
            <form className="filter-form">
                {/* 
                    rubric16
                    The user shall see a section in the controls bar that displays the
                    number of items shown out of the total number of items in the
                    selected category 
                */}
                <p id="zaTest">Showing
                <strong> {filteredCount}</strong> of <strong>{itemsCount}</strong> items in 
                {/* 
                    rubric15
                    The user shall see a section in the controls bar that displays the
                    selected category name 
                */}
                <strong> {selectCategory}</strong></p>
                <div className="form-group">
                    {/* 
                        rubric18
                        The user shall see a dropdown list labeled “Sort By” that has the
                        following options: (None, Price, Alphabetical, Rating) in the
                        controls bar 
                    */}
                    <label  htmlFor="optionsSort">Sort By:</label>
                    <select 
                        name="optionsSort" 
                        id="optionsSort" 
                        value={optionsSort} 
                        
                        onChange={handleChange}
                    >
                        <option value="none">None</option>
                        <option value="price">Price</option>
                        <option value="alphabetical">Alphabetical</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                    {/* 
                        rubric17
                        The user shall see a toggle switch labeled “In Stock Only” in the
                        controls bar 
                    */}
                    <label htmlFor="inStock">In Stock Only:</label>
                        <input 
                            type="checkbox" 
                            name="inStock" 
                            id="inStock"
                            checked={inStock}
                            onChange={handleChange}
                        />
                        
                    </div>
                </div>
            </form>
        </section>
    )
}
