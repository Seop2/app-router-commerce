import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const apiUrl = "https://app-router-api-five.vercel.app/api/products";

// 상품 목록 데이터를 외부 API에서 가져오는 함수
async function fetchProducts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

/** 상품 목록 페이지 */
async function ProductList() {
  // 서버 컴포넌트에서 API 호출 후 렌더링에 필요한 데이터를 준비합니다.
  const products = await fetchProducts();
  console.log(products);

  return (
    <div className={styles.productContainer}>
      <h1 className={styles.productTitle}>상품 목록 페이지</h1>
      <ul className={styles.productGrid}>
        {products.map((product) => {
          // 각 상품 카드를 클릭하면 동적 라우트 상품 상세 페이지로 이동합니다.
          return (
            <li key={product.id} className={styles.productCard}>
              <Link href={`products/${product.id}`}>
                <h2 className={styles.productName}>{product.name}</h2>
                <Image
                  src={product.image_url}
                  alt={product.name}
                  className={styles.productImage}
                  width={300}
                  height={300}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
