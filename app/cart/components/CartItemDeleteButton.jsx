"use client";

import { useRouter } from "next/navigation";

const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

async function deleteCartItem(productId) {
  const response = await fetch(apiUrl, {
    method: "DELETE",
    body: JSON.stringify({ productId }),
  });
  const deletedItem = await response.json();
  return deletedItem;
}

function CartItemDeleteButton({ productId }) {
  const router = useRouter();

  const deleteItem = async () => {
    // console.log('상품 삭제');
    const response = await deleteCartItem(productId);
    console.log(response);
    alert("상품이 삭제되었습니다.");
    router.refresh(); //현재 페이지 새로고침
  };

  return <button onClick={deleteItem}>상품 삭제</button>;
}

export default CartItemDeleteButton;
