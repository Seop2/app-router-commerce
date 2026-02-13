import Image from "next/image";
import CartButton from "./CarButton";
import styles from "./page.module.css";

const apiUrl = "https://app-router-api-five.vercel.app/api/products";

// 단일 상품 상세 정보를 조회하는 함수
async function fetchProduct(productId) {
  const response = await fetch(`${apiUrl}/${productId}`);
  const data = response.json();
  return data;
}

// 동적 라우트 파라미터(id)를 기반으로 상세 페이지를 렌더링합니다.
async function productDetail({ params }) {
  // URL 경로의 [id] 값을 받아 해당 상품 데이터를 조회합니다.
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

          {/* 장바구니 담기 버튼 영역 */}
          <div className={styles.actionSection}>
            <CartButton productId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default productDetail;
