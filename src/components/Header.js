import React from 'react'
// import Pinapple from "../assets/img/4.jpg";


function Header(props) {
    console.warn("Header", props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cartCount">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="" />
            </div>

        </div>
    )
}
export default Header