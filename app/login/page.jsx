"use client";

// / -> 루트 URL 페이지 컴포넌트
// /login -> 로그인 페이지 컴포넌트

function LoginPage() {
  const logText = () => {
    console.log("로그인 페이지입니다.");
  };

  return (
    <div>
      <button onClick={logText}>로그인</button>
    </div>
  );
}

export default LoginPage;
