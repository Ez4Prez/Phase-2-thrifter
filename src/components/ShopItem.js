import React, {useState} from 'react';


function ShopItem({item, addToCart}){
    
    const [inCart, setInCart] = useState(false)

    function toggleAddToCart(){
        setInCart(inCart => !inCart)
    }
    // Map(item => item.id)
    // Map(item =>{
    //     item.id += 1
    //     return item.id
    // })
    return (
        <li className="shop-item">
            <img src={item.image} alt={"Item Name"} />
            <h2 className="shop-brand">{item.brand}</h2>
            <h3 className="shop-description">{item.description}</h3>
            <h3 className="shop-price">${item.price}</h3>
            <h4 className="shop-size">Size: {item.size}</h4>
            <button onClick={() => {
                addToCart(item)
                toggleAddToCart()
            }} className="add-to-cart">{inCart ? "In Cart" : "Add to Cart"}</button>

        </li>
    )
}

export default ShopItem;

