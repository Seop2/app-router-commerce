"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

// const apiUrl = 'https://app-router-api-five.vercel.app/api/cart'

// async function addToCart(productId) {
//   const response = await fetch(apiUrl, {
//     method: 'POST',
//     body: JSON.stringify({ productId }),
//     headers: {
//       Authorization: 'Bearer 1234567890',
//     }
//   });

//   if (!response.ok) {
//     // console.log(response)
//     // const errorMessage = await response.json();
//     // throw new Error({
//     //   errorMessage: '장바구니에 담는 중 오류가 발생했습니다.',
//     //   status: response.status,
//     // });
//     throw new Error('장바구니에 담는 중 오류가 발생했습니다.');
//   }

//   const data = await response.json();
//   return data;
// }

function CartButton({ productId }) {
  const router = useRouter();

  const addProductToCart = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
      const result = await response.json();
      console.log(result);
      alert("장바구니에 담겼습니다");
      // CartPage의 fetch에서 cache: 'no-store'를 사용하므로
      // router.push만으로도 최신 데이터를 가져옴
      router.push("/cart");
    } catch (error) {
      // console.log(error.errorMessage, error.status);
      console.dir(error);
      alert(error.message);
    }
  };

  return (
    <button className={styles.addToCartButton} onClick={addProductToCart}>
      🛒 장바구니 담기
    </button>
  );
}

export default CartButton;
