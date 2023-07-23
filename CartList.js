import React, { useEffect, useState } from 'react'

export default function CartList({ cart }) {

    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart)
    }, [cart])
    return (<>
        <div className>CartList</div>
        {CART.map((cartItem, cartindex) => {
            return <>
                <div><img src={cartItem.image} width={100} height={100} /></div>
                <span> {cartItem.price * cartItem.quantity}</span>
                <span>{cartItem.title}</span>
                <button  onClick={() => {
                    const _CART = CART.map((item, index) => {
                        return cartindex === index ? { ...item, quantity : item.quantity - 1 } : item
                    })
                    setCART(_CART)
                }} >-</button>
                <span>{cartItem.quantity}</span>
                <button onClick={() => {
                    const _CART = CART.map((item, index) => {
                        return cartindex === index ? { ...item, quantity : item.quantity + 1 } : item
                    })
                    setCART(_CART)
                }}>+</button>
            </>

        })}

        <p>{
            CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
        }/-</p>
    </>
    )
}
