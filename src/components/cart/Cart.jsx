import { useOutletContext } from "react-router";
import { useState } from "react";
import CartItem from "./CartItem";
import Receipt from "../receipt/Receipt";
import styles from "./Cart.module.css";
import stylesButton from "../icons/Icon.module.css";
import stylesFont from "../fonts/Font.module.css";
import { toast } from "react-toastify";
import { Trash } from "lucide-react";

function Cart() {
  const { cart } = useOutletContext();
  const [cartItems, setCartItems] = cart;
  const [inputValue, setInputValue] = useState(0);

  function updateQuantity(e, id) {
    setInputValue(+e.target.value);
    setCartItems({ ...cartItems, [id]: +e.target.value });
    setInputValue(0);
  }

  function decrease(id) {
    let value = cartItems[id];
    setCartItems({ ...cartItems, [id]: value > 1 ? +value - 1 : 1 });
  }

  function increase(id) {
    let value = cartItems[id];
    setCartItems({ ...cartItems, [id]: +value + 1 });
  }

  return (
    <div className={styles.body}>
      <div className={styles.cart}>
        <div className={styles.head}>
          <h1 className={stylesFont.thinFont}>Your Cart</h1>
          <button
            className={stylesButton.button}
            onClick={() => {
              setCartItems({});
              toast("Cart Is Now Empty");
            }}
          >
            <Trash className={stylesButton.trash} />
          </button>
        </div>

        <div>
          {Object.keys(cartItems).length > 0 ? (
            Object.entries(cartItems).map(([id, quantity]) => {
              return (
                <CartItem
                  key={id}
                  id={id}
                  quantity={+quantity}
                  inputValue={inputValue}
                  updateQuantity={updateQuantity}
                  increase={increase}
                  decrease={decrease}
                />
              );
            })
          ) : (
            <h2 className={stylesFont.thinFont}>Your Cart Is Empty!</h2>
          )}
        </div>
      </div>
      <Receipt />
    </div>
  );
}

export default Cart;
