import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const apiUrl = "https://app-router-api-five.vercel.app/api/products";

async function fetchProducts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

/** 상품 목록 페이지 */
async function ProductList() {
  const products = await fetchProducts();
  console.log(products);

  return (
    <div className={styles.productContainer}>
      <h1 className={styles.productTitle}>상품 목록 페이지</h1>
      <ul className={styles.productGrid}>
        {products.map((product) => {
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
