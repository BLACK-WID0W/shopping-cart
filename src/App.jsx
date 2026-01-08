import Navigation from "./components/navigation/Navigation";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartItems, setCartItems] = useState({});
  const [stockItems, setStockItems] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let totalCartItems = Object.values(cartItems).reduce(
    (prev, curr) => prev + +curr,
    0,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries",
        );
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        setStockItems(data.products);
        console.log(data);
        setLoading(false);
        setError(false);
      } catch (e) {
        console.log(e.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading Data...</h1>;
  if (error) return <h1>An Error Has Occured!</h1>;

  return (
    <>
      <Navigation totalCartItems={totalCartItems} />
      <Outlet
        context={{
          cart: [cartItems, setCartItems],
          stock: [stockItems, setStockItems],
        }}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        closeButton={false}
        style={{
          width: "max-content",
        }}
        toastStyle={{
          backgroundColor: "var(--dark-green)",
          color: "var(--white)",
        }}
      />
    </>
  );
}

export default App;
