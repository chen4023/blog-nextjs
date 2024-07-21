import { sendEmail } from "@/service/email";
import * as yup from "yup";
// server에서 실행되는 함수
const bodySchma = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
// ⭐️ 응답을 보낼 때에는 return 필수 ⭐️
export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchma.isValidSync(body)) {
    // isValidSync : 설정한 bodyShma에 맞는지 유효성 검사 확인
    return new Response(JSON.stringify({ message: "메일 전송에 실패했음" }), {
      status: 400,
    });
  }
  const { from, subject, message } = body;
  // 노드 메일러를 통해 메일을 전송하면됨
  return sendEmail(body)
    .then(() => {
      // 메일 전송을 성공한 경우
      return new Response(
        JSON.stringify({ message: "메일을 성공적으로 보냈음" }),
        {
          status: 200,
        }
      );
    })
    .catch(() => {
      return new Response(JSON.stringify({ message: "메일 전송에 실패했음" }), {
        status: 500,
      });
    });
}
