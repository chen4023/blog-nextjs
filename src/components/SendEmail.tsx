import React from "react";

export default function SendEmail() {
  return (
    <form className="flex flex-col gap-1 w-[30%] bg-slate-700 px-4 py-5 rounded-lg">
      <label className="mb-1 text-white font-semibold">Your Email</label>
      <input
        type="email"
        placeholder="abc1234@naver.com"
        className="w-full h-8 px-2 py-1"
      />
      <label className="mb-1 text-white font-semibold">Subject</label>
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        className="w-full h-8 px-2 py-1"
      />
      <label className="mb-1 text-white font-semibold">Message</label>
      <textarea
        placeholder="메세지를 입력해주세요."
        className="w-full h-52 px-2 py-1"
      />
      <button className="w-full bg-yellow-400 mt-3 h-7 rounded-sm font-bold hover:bg-yellow-300">
        Submit
      </button>
    </form>
  );
}
