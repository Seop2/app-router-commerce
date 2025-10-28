import styles from "../page.module.css";

function CartSummary({ cart }) {
  return (
    <div className={styles.summary}>
      <p className={styles.summaryText}>총 상품 개수: {cart.length}개</p>
      <p className={`${styles.summaryText} ${styles.totalPrice}`}>
        총 가격:{" "}
        {cart.reduce((acc, item) => acc + item.price, 0).toLocaleString()}원
      </p>
    </div>
  );
}

export default CartSummary;
