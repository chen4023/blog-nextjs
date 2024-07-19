import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import ContactForm from "@/components/ContactForm";

const LINKS = [
  { icon: <FaGithub />, url: "https://github.com/chen4023" },
  { icon: <SiVelog />, url: "https://velog.io/@chen4023/posts" },
  { icon: <MdAttachEmail />, url: "" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-lg">ads4023@naver.com</p>
      <ul className="flex gap-6">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-5xl hover:text-yellow-400 cursor-pointer"
            target="-blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h1 className="text-3xl font-bold mb-4">Or Send me an email</h1>
      <ContactForm />
    </section>
  );
}
