import styles from "../page.module.css";
import CartItemDeleteButton from "./CartItemDeleteButton";
import Image from "next/image";

function CartList({ cart }) {
  return (
    <ul className={styles.cartList}>
      {cart.map((item) => (
        <li key={item.id} className={styles.cartItem}>
          <Image
            src={item.image_url}
            alt={item.name}
            width={80}
            height={80}
            className={styles.itemImage}
          />
          <div className={styles.itemInfo}>
            <span className={styles.itemName}>{item.name}</span>
          </div>
          <span className={styles.itemPrice}>
            {item.price.toLocaleString()}원
          </span>
          <CartItemDeleteButton productId={item.id} />
        </li>
      ))}
    </ul>
  );
}

export default CartList;
