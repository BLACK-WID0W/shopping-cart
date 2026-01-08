import { LoaderCircle } from "lucide-react";
import styles from "./LoadingPage.module.css";

function LoadingPage() {
  return (
    <div className={styles.body}>
      <LoaderCircle className={styles.circle} size={150} />
    </div>
  );
}

export default LoadingPage;
