/**
 * 라우터 핸들러 파일
 */
const apiUrl = "https://app-router-api-five.vercel.app/api/cart";

function addToCart(productId) {
  // ...
}

function convertCartItemToProductDetail() {}

export async function POST(request) {
  const body = await request.json();
  const { productId } = body;
  // const cartItems = await db.get();

  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ id: productId }),
    headers: {
      Authorization: "Bearer 1234567890",
    },
  });

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

  const data = await response.json();
  return Response.json(data);
}
