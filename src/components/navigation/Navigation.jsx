import { Link } from "react-router";
import styles from "./Navigation.module.css";
import stylesButton from "../icons/Icon.module.css";
import stylesFont from "../fonts/Font.module.css";
import classNames from "classnames";
import { ShoppingCart, Store } from "lucide-react";

function Navigation({ totalCartItems }) {
  return (
    <nav className={styles.nav}>
      <h1 className={classNames(styles.brand, stylesFont.thickFont)}>
        <Link to="/home" className={styles.link}>
          Rando<span className={styles.subBrand}>Mart</span>
        </Link>
      </h1>
      <Link to="/shop" className={styles.link}>
        <Store size={35} className={stylesButton.nav} />
      </Link>
      <Link
        to="/cart"
        className={classNames(styles.link, styles.cartContainer)}
      >
        <ShoppingCart size={35} className={stylesButton.nav} />
        <span className={classNames(styles.dot, stylesFont.thinFont)}>
          {totalCartItems > 99 ? "99+" : totalCartItems}
        </span>
      </Link>
    </nav>
  );
}

export default Navigation;
