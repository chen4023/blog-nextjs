import { EmailData } from "./email";

// client에서 실행되는 함수
export async function sendContactEmail(email: EmailData) {
  // 우리 API 라우터에 이메일 전송을 위한 요청을 보냄 (fetch)
  const res = await fetch("/api/contact", {
    method: "POST", // POST 요청을 보냄
    body: JSON.stringify(email), // email 데이터를 담아서
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "🚨 서버 요청 오류 발생");
  }
  return data;
}
