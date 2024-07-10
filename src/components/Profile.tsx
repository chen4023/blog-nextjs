import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="flex flex-col justify-center items-center gap-1">
      <Image
        src="/image/profile.png"
        alt="profile"
        width={200}
        height={200}
        className="rounded-full"
        priority // 해당 이미지는 중요하니까 이거 먼저 다운로드 받아줘
      />
      <h1 className="text-2xl font-bold">{"Hi, I'm Chen"}</h1>
      <p className="text-lg font-semibold">Front-Engineer</p>
      <p>꿈을 코딩하는 사람, 드림코더 엘리</p>
      <Link href="/contact">
        <button className=" bg-yellow-400 px-4 py-1 rounded-xl font-bold mt-3">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
