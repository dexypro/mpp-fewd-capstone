import React from 'react'
import loadingGif from '../images/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading mTop">
            <img src={loadingGif} alt="loading" />
            <h4>products data loading...</h4>
        </div>
    )
}
