import React from 'react'
import {connect} from "react-redux"

function Cart(props) {
    return (
        <div>
            {console.log(props.cart)}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)
