"use client";
import { useState } from "react";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
import { handleCreateCart } from "app/actions";
import styles from './ShoppingCart.module.sass'

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);
      if(!checkoutUrl) throw new Error('Error creating checkout');
      window.localStorage.removeItem('cart');
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  }
  return (
    <button className={styles.ShoppingCart} onClick={handleOpen}>
      <span className={styles.ShoppingCart__counter}>
      {cart.length}
      </span>
      <FaShoppingCart />
      {isOpen && (
        <div className={styles.ShoppingCart__items}>
          {
            cart.map(item => (
              <>
                <p key={item?.id}>{item?.title}</p>
                <p>Cantidad: {item.quantity}</p>
              </>
            ))
          }
          <button onClick={handleBuy}  className={styles.ShoppingCart__buyButton} disabled={isBuying}>
            Buy
          </button>
        </div>
      )}
    </button>
  )
}