import PropTypes from "prop-types";
import { useOutletContext } from "react-router";
import styles from "./CartItem.module.css";
import stylesButton from "../icons/Icon.module.css";
import stylesFont from "../fonts/Font.module.css";
import classNames from "classnames";
import { X, CirclePlus, CircleMinus } from "lucide-react";

function CartItem({
  id,
  quantity,
  inputValue,
  updateQuantity,
  decrease,
  increase,
}) {
  const { cart, stock } = useOutletContext();
  const [cartItems, setCartItems] = cart;
  const [stockItems] = stock;

  const item = stockItems.find((item) => item.id == id);
  const filteredCartItems = { ...cartItems };
  delete filteredCartItems[id];

  return (
    item && (
      <div
        className={classNames(styles.item, stylesFont.thinFont)}
        key={item.id}
      >
        <h2 className={styles.title}>{item.title}</h2>

        <div className={styles.field}>
          <button
            className={stylesButton.button}
            onClick={() => decrease(item.id)}
          >
            <CircleMinus size={24} className={stylesButton.nav} />
          </button>
          <input
            className={classNames(styles.input, stylesFont.thinFont)}
            min={1}
            type="number"
            value={inputValue ? inputValue : quantity}
            onChange={(e) => updateQuantity(e, id)}
          />
          <button
            className={stylesButton.button}
            onClick={() => increase(item.id)}
          >
            <CirclePlus size={24} className={stylesButton.nav} />
          </button>
        </div>

        <div className={styles.price}>
          <p>Unit Price: ${item.price.toFixed(2)}</p>
          <p>
            <b>Subtotal Price: ${(item.price * quantity).toFixed(2)}</b>
          </p>
        </div>

        <button
          className={classNames(styles.delete, stylesButton.button)}
          onClick={() => setCartItems({ ...filteredCartItems })}
        >
          <X size={20} color={"var(--red)"} />
        </button>
      </div>
    )
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  inputValue: PropTypes.number,
  updateQuantity: PropTypes.func,
  decrease: PropTypes.func,
  increase: PropTypes.func,
};

export default CartItem;
