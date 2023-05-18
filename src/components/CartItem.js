import Cart from "./Cart";

function CartItem({cartItem, removeFromCart}){
    
    return (
        <li className="cart-item">
            <img src={cartItem.image} alt={"Item Name"} />
            <h2 className="shop-brand">{cartItem.brand}</h2>
            <h3 className="shop-description">{cartItem.description}</h3>
            <h4 className="shop-price">${cartItem.price}</h4>
            <button id={cartItem.id} onClick={() => removeFromCart(cartItem.id)} className="remove-from-cart">Remove From Cart</button>

        </li>
        

    )
}

export default CartItem;