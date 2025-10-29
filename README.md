https://app-router-commerce.vercel.app/

## 쇼핑몰 프로젝트

- 상품 목록
- 상품 상세 페이지
- 장바구니 페이지

## 중간 정리 (10/28)

## Next.js 중간 정리 (강의 요약 + 추가 보충)

- **Next.js 프로젝트 생성**

  - `npx create-next-app@latest`
  - 설치 시 프로젝트를 위한 폴더 생성 및 주요 설정 자동화

- **파일/폴더 네이밍 규칙**

  - next에서 라우팅 및 특수 기능을 가진 파일(page, layout 등)은 모두 소문자(`page.jsx`, `layout.jsx` 등)로 작성
  - 컴포넌트는 파스칼케이스(예: `CartList.jsx`)로 네이밍
  - 프라이빗(내부 전용) 컴포넌트/폴더는 `_components` 등 언더스코어 활용 가능

- **폴더 구조와 라우팅**

  - 폴더/파일 기반 자동 라우팅: 폴더 구조가 곧 url 라우팅
    - 예시: `/app/products/page.jsx` → `/products` 경로
  - `page.jsx` : 각 경로의 페이지 컴포넌트
  - `layout.jsx` : 해당 폴더 하위 모든 페이지에 적용되는 레이아웃(최상위 레벨에서 구조 잡기 및 공통 UI 적용)
    - `{children}`으로 하위 컴포넌트 집어넣기
  - 동적 라우팅: 대괄호(`[]`) 사용
    - 예시: `/app/products/[id]/page.jsx` → `/products/1`, `/products/2` 등
  - 중첩 라우팅 및 그룹화: `(group)`폴더 가능 (url에는 드러나지 않음)

- **스타일링**

  - `page.module.css` 등 모듈화된 css파일 사용 → import해서 해당 컴포넌트에만 스타일 적용(클래스명 충돌 없음)
  - 전역 스타일은 `globals.css`에 위치 (보통 최상위 `app` 폴더에 존재)

- **Next.js 내장 컴포넌트 및 기능**

  - **Link** : 페이지 간 이동 시 사용, a태그 대신 사용 (preload/SPA 지원, 성능/UX 향상)
  - **Image** : 이미지 제어 컴포넌트 (이미지 최적화, lazy-loading, 다양한 사이즈 대응)
  - **Head** : SEO 및 메타 태그 등 head 요소 관리에 사용
  - **Metadata 및 SEO 최적화** : 각 페이지에서 export const metadata로 설정 가능
  - **Server/Client 컴포넌트**
    - 기본적으로 Server Component (`app` 폴더 내부 모든 컴포넌트는 서버컴포넌트가 기본)
    - 필요할 때 파일 상단에 `'use client'` 선언하여 클라이언트 컴포넌트로 변경(예: 이벤트 핸들러, 상태 관리, 브라우저 API 활용 등)
  - **loading.jsx** : 해당 폴더 하위 라우트 이동/렌더링 시 자동으로 로딩 UI 표시

- **API Route (라우트 핸들러)**

  - `/app/api/xxx/route.js` 파일 내에 API endpoint 정의 (RESTful 가능)
    - 예: `/app/api/cart/route.js` → `/api/cart` 엔드포인트 제공
  - 메서드별 함수(`export async function GET, POST, DELETE 등`)로 REST 지원
  - 서버에서만 실행되므로 중요한 정보(예: DB 연결, 보안키 등) 은닉 가능
  - 외부 API 호출/확장 및 서비스의 자체 API 구축 시에 활용

- **환경변수 및 보안**

  - 중요한 정보는 `.env.local` 등에 환경변수로 관리(코드에 직접 노출 지양)
  - 서버컴포넌트나 API Route에서는 환경변수 안전하게 사용 가능

- **추가로 익혀둘 것들**

  - **Middleware** : 요청 시 선처리(인증/리디렉트 등), `/middleware.js`
  - **에러/예외 처리**: `error.js(x)`로 폴더별 에러 UI 별도 처리
  - **fetch 캐싱 및 revalidate**: 서버컴포넌트 내 fetch시 SSG/SSR 지정, 데이터의 신선도 제어(`revalidate` 옵션)
  - **동적 import** 등 코드 분할과 최적화 기법
  - **배포**: Vercel 등 플랫폼에 손쉽게 배포

## 추가 개념

- DOM : 화면의 요소
- Virtual DOM : 화면을 그리기 위한 가상 요소. 보통 js 형태로 정보가 저장됨.
- JSX : Virtual DOM 을 쉽게 작성할 수 있게 하는 리액트 문법
- React + React Router : SPA형태로 페이지 형태를 모두 자바스크립트 모듈로 갖고 있음. - HTML이 하나
- Next : 서버 사이드 렌더링 - HTML 여러개 (서버가 알아서 페이지 마다 생성함)
- 모듈 : 목적과 역할에 따라 하나로 묶여 있는 여러줄의 자바스크립트 코드
- Hydration(하이드레이션) : 수분 공급, 서버 사이드 렌더링된 정적 페이지와 번들링된 자바스크립트 파일을 클라이언트에 보내면 클라이언트 사이드에서 두 코드를 서로 매칭시키는 과정 -> 정적인 DOM에 js모듈로 동적으로 만든다...

### SSR / SSG / CSR 렌더링 용어 정리

- **SSR (Server Side Rendering, 서버 사이드 렌더링)**

  - 사용자의 요청이 들어올 때마다 서버에서 HTML을 생성해서 전달하는 방식입니다.
  - 각 요청 시마다 서버가 데이터를 불러오고, 페이지를 만들어서 클라이언트에 보냅니다.
  - 예시: Next.js의 기본 페이지, 검색엔진 SEO에 유리
  - 장점: 항상 최신 데이터 제공, SEO에 좋음
  - 단점: 요청마다 서버 부하, 초기 로딩이 느려질 수 있음

- **SSG (Static Site Generation, 정적 사이트 생성)**

  - 빌드 시점에 미리 HTML 파일들을 만들어두고, 요청 시 바로 정적 파일을 전달하는 방식입니다.
  - 데이터가 자주 바뀌지 않는 페이지에 적합합니다.
  - 예시: Next.js의 `getStaticProps`, 블로그/문서 페이지 등
  - 장점: 매우 빠른 로딩, 서버 부하 적음
  - 단점: 데이터 변경 시 재빌드 필요(혹은 revalidate 설정 필요), 최신 데이터 반영이 늦을 수 있음

- **CSR (Client Side Rendering, 클라이언트 사이드 렌더링)**
  - 최초 요청 시 최소한의 HTML만 받고, 이후 자바스크립트가 실행되어 브라우저(클라이언트)에서 화면을 구성합니다.
  - 데이터 fetch와 렌더링 모두 브라우저에서 처리합니다.
  - 예시: Create React App, Next.js에서 'use client' 사용 컴포넌트
  - 장점: 인터랙티브 UI, 페이지 일부만 빠르게 갱신
  - 단점: 첫 로딩이 느릴 수 있음, SEO 불리함(크롤러가 JS 실행 필요)

> Next.js는 이 SSR, SSG, CSR 방식을 모두 선택해 사용할 수 있습니다.
> 처음 로딩시 SSR -> 페이지 이동시 CSR 방식으로 최적화

---

## Next.js에 Tailwind CSS 적용 방법

1. **Tailwind CSS 설치**

   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Tailwind config 설정**

   - `tailwind.config.js` 파일을 아래와 같이 수정해서 `app`, `pages`, `components` 디렉토리의 모든 js/ts 파일에서 Tailwind를 사용하도록 경로를 추가합니다.
     ```js
     /** @type {import('tailwindcss').Config} */
     module.exports = {
       content: [
         "./app/**/*.{js,ts,jsx,tsx}",
         "./pages/**/*.{js,ts,jsx,tsx}",
         "./components/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

3. **글로벌 CSS에 Tailwind 디렉티브 추가**

   - `globals.css` (보통 `app/globals.css` 또는 `styles/globals.css`) 파일 상단에 아래 3줄을 추가합니다:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **글로벌 CSS 임포트**

   - Next.js 13(app 디렉토리 구조)에서는 `app/layout.jsx` 또는 `_app.js(x)`에서 글로벌 CSS를 import 해야 합니다.
     ```js
     // app/layout.jsx
     import "./globals.css";
     ```

5. **Tailwind 클래스 사용하기**

   - 이제 컴포넌트에서 바로 Tailwind 유틸리티 클래스를 사용할 수 있습니다.
     ```jsx
     <button className="bg-blue-500 text-white px-4 py-2 rounded">버튼</button>
     ```

6. **(선택) 자동완성과 다크모드 등 옵션 활용**

   - VSCode에 Tailwind CSS IntelliSense 확장(권장)
   - 다크모드: `tailwind.config.js`에서 `darkMode: "class"` 등으로 설정 가능

**참고**: 공식 가이드 https://tailwindcss.com/docs/guides/nextjs
