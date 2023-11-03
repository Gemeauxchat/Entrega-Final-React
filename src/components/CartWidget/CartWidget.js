import Cart from "../../assets/Cart.svg"
import './CartWidget.css';

const CartWidget = () => {
    return(
        <div>
            <img src={Cart} alt="cart-widget" height="20px" width="20px" />
            0
        </div>
    )
}

export default CartWidget;
