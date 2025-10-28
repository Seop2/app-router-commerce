import Link from "next/link";
import styles from "./AppNavigation.module.css";

// /components <- 진입 안됨

function AppNavigation() {
  return (
    <div>
      <Link href="/" className={styles.link}>
        상품 목록
      </Link>{" "}
      |
      <Link href="/cart" className={styles.link}>
        장바구니
      </Link>
    </div>
  );
}

export default AppNavigation;
