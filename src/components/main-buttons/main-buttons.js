import React from 'react'
import "./main-buttons.scss"
import { connect } from "react-redux";
import { addToCart, clearCart } from "../../actions";

const MainButtons = (props) => {
  return (
    <div className="main-btns">
        <button onClick={() => props.addToCart(props.cartItems)}>ADD TO CART</button>
        <button onClick={() => props.clearCart(props.cartItems)}>CLEAR CART</button>
    </div>
  )
}

const mapStateToProps = state => {
    return { cartItems: state.cartItems }
}

export default connect(mapStateToProps, { addToCart, clearCart })(MainButtons);