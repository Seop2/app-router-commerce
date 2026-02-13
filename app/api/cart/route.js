/**
 * 라우터 핸들러 파일
 */
const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

function addToCart(productId) {
  // ...
}

function convertCartItemToProductDetail() {}

// 장바구니 담기 요청을 받아 외부 장바구니 API로 전달하는 엔드포인트
export async function POST(request) {
  // 클라이언트 요청 본문에서 상품 ID를 추출합니다.
  const body = await request.json();
  const { productId } = body;
  // const cartItems = await db.get();

  // 내부 서버 대신 외부 API에 위임하여 장바구니 데이터를 저장합니다.
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ id: productId }),
    headers: {
      Authorization: "Bearer 1234567890",
    },
  });

  // 외부 API 실패 시 사용자에게 전달할 에러 응답을 생성합니다.
  if (!response.ok) {
    // console.log(response)
    const errorMessage = await response.json();
    console.log(errorMessage);
    // throw new Error({
    //   errorMessage: '장바구니에 담는 중 오류가 발생했습니다.',
    //   status: response.status,
    // });
    // throw new Error('장바구니에 담는 중 오류가 발생했습니다.');
    return Response.json({
      errorMessage: "장바구니에 담는 중 오류가 발생했습니다.",
      status: 500,
    });
  }

  // 성공 시 외부 API 결과를 그대로 반환합니다.
  const data = await response.json();
  return Response.json(data);
}
