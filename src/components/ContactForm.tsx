"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

const LABEL_CLASS = "mb-1 text-white font-semibold";
const INPUT_CLASS = "w-full px-2 py-1";

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "이메일이 전송되었습니다 !", state: "success" });
    // setTimeout(() => {
    //   setBanner(null);
    // }, 3000);
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 bg-slate-700 px-4 py-5 my-5 rounded-lg"
      >
        <label htmlFor="from" className={LABEL_CLASS}>
          Your Email
        </label>
        <input
          type="email"
          placeholder="abc1234@naver.com"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className={INPUT_CLASS}
        />
        <label htmlFor="subject" className={LABEL_CLASS}>
          Subject
        </label>
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className={INPUT_CLASS}
        />
        <label htmlFor="message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          rows={10}
          placeholder="메세지을 입력해주세요."
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className={INPUT_CLASS}
        />
        <button className="w-full bg-yellow-400 mt-3 h-7 rounded-sm font-bold hover:bg-yellow-300">
          Submit
        </button>
      </form>
    </section>
  );
}
