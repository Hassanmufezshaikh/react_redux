import Header from '../components/Header'
import {connect} from 'react-redux'

// import {addToCart} from './service/actions/Action'

const mapStateToProps = state =>({
    data:state.cardItems
})

const mapDispatchToProps = dispatch =>({
}) 

    // addToCartHandler:data=> dispatch(addToCart(data)) doesnt needs this it will trigger it from home

export default connect(mapStateToProps,mapDispatchToProps)(Header)




// export default Home;
