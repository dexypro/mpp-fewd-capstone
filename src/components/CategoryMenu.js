import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context';


export default function CategoryMenu() {
    const context = useContext(ProductContext);
    const {
        
        testChange,
        subcategoriesArray,
        categoryNames
        
    } = context;
    
    return (
        <div>
            {/* 
                rubric19
                The user shall see a category menu that displays all of the
                available shopping categories 
            */}
            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div className="card">
                <div className="card-header" role="tab" id="headingOne1">
                {/* 
                    rubric25 
                    Clicking on a category name in the category menu should toggle a
                    dropdown of the available subcategories within that category
                */}
                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                    aria-controls="collapseOne1">
                    <h5 className="mb-0">
                    {categoryNames[0]}
                    </h5>
                </a>
                </div>
                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                <div className="card-body">
                    <ul>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[0]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[1]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[2]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[3]}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingTwo2">
                {/* 
                    rubric25 
                    Clicking on a category name in the category menu should toggle a
                    dropdown of the available subcategories within that category
                */}
                <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                    aria-expanded="false" aria-controls="collapseTwo2">
                    <h5 className="mb-0">
                    {categoryNames[1]}
                    </h5>
                </a>
                </div>
                <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                <div className="card-body">
                    <ul>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[4]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[5]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[6]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[7]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[8]}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingThree3">
                 {/* 
                    rubric25 
                    Clicking on a category name in the category menu should toggle a
                    dropdown of the available subcategories within that category
                */}
                <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                    aria-expanded="false" aria-controls="collapseThree3">
                    <h5 className="mb-0">
                    {categoryNames[2]}
                    </h5>
                </a>
                </div>
                <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                <div className="card-body">
                    <ul>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[9]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[10]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[11]}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="headingThree4">
                {/* 
                    rubric25 
                    Clicking on a category name in the category menu should toggle a
                    dropdown of the available subcategories within that category
                */}
                <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree4"
                    aria-expanded="false" aria-controls="collapseThree4">
                    <h5 className="mb-0">
                    {categoryNames[3]}
                    </h5>
                </a>
                </div>
                <div id="collapseThree4" className="collapse" role="tabpanel" aria-labelledby="headingThree4" data-parent="#accordionEx">
                <div className="card-body">
                    <ul>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[12]}</a></li>
                        <li><a href="#" name="selectCategory" onClick={testChange}>{subcategoriesArray[13]}</a></li>
                    </ul>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
