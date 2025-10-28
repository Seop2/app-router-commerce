// /cart -> 장바구니 페이지
import styles from "./page.module.css";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";

const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

async function fetchCart() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

/**
 * @description 장바구니 페이지
 * - 장바구니 페이지는 장바구니에 담긴 상품 목록이 표시된다
 * - 장바구니 페이지 하단에는 총 상품 개수와 가격이 표시된다
 */
async function CartPage() {
  const cart = await fetchCart();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장바구니</h1>
      <CartList cart={cart} />
      <CartSummary cart={cart} />
    </div>
  );
}

export default CartPage;
