/**
 * 에러 컴포넌트
 * - 에러 발생 시 표시되는 컴포넌트
 */
"use client";

import Image from "next/image";
import styles from "./error.module.css";

function Error({ error, reset }) {
  return (
    <div className={styles.container}>
      <div className={styles.catContainer}>
        <Image
          src="/sad-cat.png"
          alt="죄송한 고양이"
          width={300}
          height={300}
          className={styles.catImage}
        />
      </div>
      <h1 className={styles.title}>죄송합니다. 에러가 발생했습니다.</h1>
      {/* <p>{error.message}</p> */}
      <p className={styles.message}>
        010-5705-9050 번호로 문의 혹은
        <br />
        seop0317@gmail.com 으로 문의주시면 감사하겠습니다.
      </p>
      <button className={styles.resetButton} onClick={reset}>
        다시 시도
      </button>
    </div>
  );
}

export default Error;
