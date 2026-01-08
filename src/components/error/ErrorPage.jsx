import { TriangleAlert } from "lucide-react";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.body}>
      <TriangleAlert className={styles.triangle} size={150} />
      <h1 className={styles.message}>An Error Has Occured</h1>
    </div>
  );
}

export default ErrorPage;
