import { useOutletContext } from "react-router";
import styles from "./Receipt.module.css";
import classNames from "classnames";
import stylesFont from "../fonts/Font.module.css";

function Receipt() {
  const { cart, stock } = useOutletContext();
  const [cartItems] = cart;
  const [stockItems] = stock;
  let total = 0;

  let purchasedItems = stockItems.filter((item) =>
    Object.hasOwn(cartItems, item.id),
  );
  console.log(`Receipt keys: ${purchasedItems}`);
  purchasedItems.map((item) => {
    item.quantity = cartItems[item.id];
  });

  total = purchasedItems
    .reduce((prev, curr) => prev + curr.price * curr.quantity, total)
    .toFixed(2);

  return (
    <div>
      <div className={styles.receipt}>
        <h1 className={classNames(styles.title, stylesFont.thickFont)}>
          RandoMart Receipt
        </h1>
        <table className={classNames(styles.table, stylesFont.receiptFont)}>
          <thead>
            <tr>
              <th>Itm</th>
              <th>Unt</th>
              <th>Qty</th>
              <th>Amt</th>
            </tr>
          </thead>
          <tbody>
            {purchasedItems.map((item) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className={classNames(styles.total, stylesFont.receiptFont)}>
          Total: <span>${total}</span>
        </p>
      </div>
    </div>
  );
}

export default Receipt;
