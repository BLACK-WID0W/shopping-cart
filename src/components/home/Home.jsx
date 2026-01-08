import styles from "./Home.module.css";
import { Link } from "react-router";
import stylesFont from "../fonts/Font.module.css";
import classNames from "classnames";

function Home() {
  return (
    <div className={classNames(styles.body, stylesFont.thickFont)}>
      <h1 className={styles.banner}>
        A little bit of everything <br /> All in one place
      </h1>
      <Link to="/shop" className={styles.button}>
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
