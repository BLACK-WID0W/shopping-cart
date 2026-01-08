import PropTypes from "prop-types";
import styles from "./ShopItem.module.css";
import stylesButton from "../icons/Icon.module.css";
import stylesFont from "../fonts/Font.module.css";
import classNames from "classnames";
import { CirclePlus } from "lucide-react";

function ShopItem({ item, addToCart, displayHandler }) {
  return (
    <div className={styles.item} onClick={displayHandler}>
      <img className={styles.img} src={item.images[0]} />

      <div className={styles.labelContainer}>
        <div className={classNames(styles.label, stylesFont.thinFont)}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.price}>${item.price.toFixed(2)}</p>
        </div>
        <button
          className={stylesButton.button}
          type="button"
          onClick={() => addToCart(item)}
        >
          <CirclePlus size={34} className={stylesButton.nav} />
        </button>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
  displayHandler: PropTypes.func,
};

export default ShopItem;
