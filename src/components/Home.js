import React from 'react'
import Pinapple from "../assets/img/4.jpg";
import {connect} from 'react-redux'

function Home(props) {
    // console.warn("Home", props.data)
    return (
        <div className="cartDisplay">
            <h1 style={{ fontSize: '70px', color: 'red', paddingBelow:'0px' }} > Star Fruits </h1>
            <h1 style={{  paddingTop:'0px', color: 'aqua'  }} >Online Shopping Cart</h1>
        <div className="cartMove" style={{ paddingTop: '120px', color: 'red'}}>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Pinapple} alt="Pinapple" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        FRUIT: Pineapple
                    </span>
                    <br />
                    <span>
                        PRICE:  $1000.000
                    </span>
                </div>
                <div className="btn-wrapper item" style={{ paddingTop: '10px' }}>
                    <button
                        onClick={() => 
                        props.addToCartHandler({price:1000,fruit:'Pineapple'})
                        }>Add To Cart</button>

                    <button style={{ backgroundColor: 'rgb(230 228 32)',  marginLeft: '4px'  }}
                        onClick={() => 
                        props.removeToCartHandler()
                        }>Remove To Cart
                        </button>

                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Pinapple} alt="Pinapple" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        FRUIT: Pineapple
                    </span>
                    <br />
                    <span>
                        PRICE:  $1000.000
                    </span>
                </div>
                <div className="btn-wrapper item" style={{ paddingTop: '10px' }}>
                    <button
                        onClick={() => 
                        props.addToCartHandler({price:1000,fruit:'Pineapple'})
                        }>Add To Cart</button>

                    <button style={{ backgroundColor: 'rgb(230 228 32)',  marginLeft: '4px'  }}
                        onClick={() => 
                        props.removeToCartHandler()
                        }>Remove To Cart
                        </button>

                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Pinapple} alt="Pinapple" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        FRUIT: Pineapple
                    </span>
                    <br />
                    <span>
                        PRICE:  $1000.000
                    </span>
                </div>
                <div className="btn-wrapper item" style={{ paddingTop: '10px' }}>
                    <button
                        onClick={() => 
                        props.addToCartHandler({price:1000,fruit:'Pineapple'})
                        }>Add To Cart</button>

                    <button style={{ backgroundColor: 'rgb(230 228 32)',  marginLeft: '4px'  }}
                        onClick={() => 
                        props.removeToCartHandler()
                        }>Remove To Cart
                        </button>

                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Pinapple} alt="Pinapple" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        FRUIT: Pineapple
                    </span>
                    <br />
                    <span>
                        PRICE:  $1000.000
                    </span>
                </div>
                <div className="btn-wrapper item" style={{ paddingTop: '10px' }}>
                    <button
                        onClick={() => 
                        props.addToCartHandler({price:1000,fruit:'Pineapple'})
                        }>Add To Cart</button>

                    <button style={{ backgroundColor: 'rgb(230 228 32)',  marginLeft: '4px'  }}
                        onClick={() => 
                        props.removeToCartHandler()
                        }>Remove To Cart
                        </button>

                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={Pinapple} alt="Pinapple" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        FRUIT: Pineapple
                    </span>
                    <br />
                    <span>
                        PRICE:  $1000.000
                    </span>
                </div>
                <div className="btn-wrapper item" style={{ paddingTop: '10px' }}>
                    <button
                        onClick={() => 
                        props.addToCartHandler({price:1000,fruit:'Pineapple'})
                        }>Add To Cart</button>

                    <button style={{ backgroundColor: 'rgb(230 228 32)',  marginLeft: '4px'  }}
                        onClick={() => 
                        props.removeToCartHandler()
                        }>Remove To Cart
                        </button>

                </div>
            </div>
            </div>
        </div>
    )
}
export default Home