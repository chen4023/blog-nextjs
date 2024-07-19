import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_AUTH_USER,
    pass: process.env.NEXT_PUBLIC_AUTH_PASS,
  },
});

export const sendMail = async (prevState: any, formData: FormData) => {
  try {
    const { email, subject, message } = Object.fromEntries(formData);

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_AUTH_USER,
      to: "ads4023@gmail.com",
      subject: `문의합니다: ${subject}`,
      html: `<p>${message}</p>`,
    });
    console.log("이메일 전송 성공");
    return { message: "이메일 전송 성공" };
  } catch (error) {
    console.error(error);
  }
};
