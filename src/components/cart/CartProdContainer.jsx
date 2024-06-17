import { useState, useEffect } from 'react';
import './cartProdContainer.scss';
import Delivery from './Delivery.jsx';
import QntySelect from './QntySelect.jsx';

const CartProdContainer = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const handleRemove = (title) => {
        const updatedCart = cartItems.filter(item => item.title !== title);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className='cartProdContainer'>
            {cartItems.map((item) => (
                <div className="productAdded" key={item.title}>
                    <div className='cartImg'>
                        <img className="imgInCart" src={`/${item.img}`} alt={item.title} />
                    </div>
                    <div className="cartProdInfo">
                        <p className="ff productDesc summaryText">{item.title}</p>
                        <span className="ff summaryText">Cant:
                            <QntySelect 
                                value={item.quantity} 
                                onChange={(quantity) => {
                                    const updatedItems = cartItems.map(cartItem => 
                                        cartItem.title === item.title ? { ...cartItem, quantity } : cartItem
                                    );
                                    setCartItems(updatedItems);
                                    localStorage.setItem('cart', JSON.stringify(updatedItems));
                                }} 
                            />
                        </span>
                    </div>
                    <div className="cartItemPrice">
                        <div className="ff summaryText">{item.price} €</div>
                        <a className="ff removeFromCart" href="#" onClick={() => handleRemove(item.title)}>Remove</a>
                    </div>
                    <div className="delivInfo">
                        <Delivery />
                    </div>
                </div>
            ))}

        </div>
    );
};

export default CartProdContainer;