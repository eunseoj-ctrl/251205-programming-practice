// 환경 변수 설정 파일
// .env 파일의 VITE_OPENAI_API_KEY를 window 객체에 할당
if (import.meta.env && import.meta.env.VITE_OPENAI_API_KEY) {
  window.VITE_OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
}






