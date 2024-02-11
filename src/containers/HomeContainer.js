import Home from '../components/Home'
import {addToCart,removeToCart} from '../service/actions/Action'
// import {addToCart} from './service/actions/Action'
import {connect} from 'react-redux'


const mapStateToProps = state =>({
    data:state.cardItems
})

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=> dispatch(addToCart(data)),
    removeToCartHandler:data=> dispatch(removeToCart(data))
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Home)






// export default Home;
