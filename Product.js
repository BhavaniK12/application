import React from 'react'

export default function Product({ data, onClick }) {

    return (<>
        <div className='container'>
            <div className='row'>

                <div>Product</div>
                {data.map((productItem, productindex) => {
                    return (
                        <>

                        <div className="col-sm-3" key={productItem.id}>
                <div className="card">
                  <img
                    src={productItem.image}
                    className="card-img-top"
                    alt="aa"
                    width="200"
                    height="150"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{productItem.category}</h5>
                    <p className="card-text">{productItem.title}</p>
                    <p className="card-text">{productItem.price}</p>
                    <p className="card-text">{productItem.rating.rate}</p>
                                    <button className="btn btn-danger" onClick={() => onClick(productItem)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>

    </>
    )
}
