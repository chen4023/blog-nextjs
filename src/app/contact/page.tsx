import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import SendEmail from "@/components/SendEmail";
export default function ContactPage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-lg">ads4023@naver.com</p>
      <div className="flex gap-7">
        <FaGithub className="text-5xl hover:text-yellow-400 cursor-pointer" />
        <SiVelog className="text-5xl hover:text-yellow-400 cursor-pointer" />
        <MdAttachEmail className="text-5xl hover:text-yellow-400 cursor-pointer" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Or Send me an email</h1>
      <SendEmail />
    </div>
  );
}
