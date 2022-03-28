import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import "./cart-drawer.scss";

import { connect } from "react-redux";
import { addToCart, clearCart, closeCart, getCartTotal } from "../../actions";

const CartDrawer = (props) => {
    useEffect(() => {
        props.getCartTotal(props.cartItems);
    }, [props.cartItems])

    const content = (
        <div className={ props.isCartOpen ? 'cart-drawer slide-from-right' : 'cart-drawer ' }>
            <div className="cart-drawer__header">
                <h3>My Cart</h3>
                <button onClick={() => props.closeCart()}>Close Cart</button>
            </div>
            <div className="cart-drawer__body">
                {props.cartItems.length > 0 ? props.cartItems.map((item) => {
                    return (
                        <div className="cart-drawer__item" key={item.id}>
                            <div className="item-col img ">
                                <img src={item.imageUrl} />
                            </div>
                            <div className="item-col details ">
                               <h3>{item.title}</h3>
                               <p>Quantity: {item.quantity}</p>
                               <p>Price: ${item.price}</p>
                            </div>
                        </div>
                    )
                }) : <h3>Your Cart Is Empty</h3>}
            </div>
            <div className="cart-drawer__footer">
                <p>TOTAL: ${props.cartTotal}</p>
            </div>
        </div>
    ) 
    
    return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}


const mapStateToProps = state => {
    return { cartItems: state.cartItems, isCartOpen: state.isCartOpen, cartTotal: state.cartTotal  }
}

export default connect(mapStateToProps, { addToCart, clearCart, closeCart, getCartTotal })(CartDrawer);