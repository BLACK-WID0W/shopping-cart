import ShopItem from "./ShopItem";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import stylesFont from "../fonts/Font.module.css";
import { toast } from "react-toastify";

function Shop() {
  const { cart, stock } = useOutletContext();
  const [cartItems, setCartItems] = cart;
  const [stockItems] = stock;

  function addToCart(item) {
    console.log(cartItems);
    const updatedCartItems = { ...cartItems };
    if (item.id in updatedCartItems) {
      updatedCartItems[item.id] = +updatedCartItems[item.id] + 1;
    } else {
      updatedCartItems[item.id] = 1;
    }
    setCartItems(updatedCartItems);
    toast(`Added ${item.title} To Cart!`);
  }

  return (
    <section className={styles.body}>
      <h1 className={stylesFont.thinFont}>Products</h1>
      <div className={styles.grid}>
        {stockItems &&
          stockItems.map((stockItem) => (
            <ShopItem
              key={stockItem.id}
              item={stockItem}
              addToCart={addToCart}
            />
          ))}
      </div>
    </section>
  );
}

export default Shop;
