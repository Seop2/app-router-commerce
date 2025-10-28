import Image from "next/image";
import CartButton from "./CarButton";
import styles from "./page.module.css";

const apiUrl = "https://app-router-api-five.vercel.app/api/products";

async function fetchProduct(productId) {
  //   await new Promise((resolve) => {
  //     // 로딩중 화면 확인 (인터넷 속도 차이 가정)
  //     setTimeout(() => {
  //       resolve("데이터 조회 완료");
  //     }, 60000);
  //   });
  const response = await fetch(`${apiUrl}/${productId}`);
  const data = response.json();
  return data;
}

async function productDetail({ params }) {
  const { id } = await params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>상품 상세</h1>
      </header>

      <div className={styles.productDetails}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image_url}
            alt={product.name}
            width={600}
            height={600}
            className={styles.productImage}
            priority
          />
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.productName}>{product.name}</h2>
          <div className={styles.productPrice}>
            ₩{product.price.toLocaleString()}
          </div>

          <div className={styles.actionSection}>
            {/* <button className={styles.addToCartButton} onClick={showAlert}>
                  🛒 장바구니 담기
                </button> */}
            <CartButton productId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default productDetail;
