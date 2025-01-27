import React from 'react'
import "./CardProducts.css"

const CardProducts = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.Name}</h5>
                <p className="card-text">{props.item.Description}</p>
                <div className='d-flex justify-content-end'>
                    <a href="#" className="btn btn-dark">${props.item.Price}</a>
                </div>
            </div>
        </div>
    )
}

export default CardProducts