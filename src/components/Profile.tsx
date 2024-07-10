import Image from "next/image";
import Link from "next/link";
import profileImg from '../../public/images/profile.png'

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        src={profileImg}
        alt="profile"
<<<<<<< HEAD
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
=======
        width={250}
        height={250}
        className="rounded-full mx-auto mb-2"
        priority // 해당 이미지는 중요하니까 우선순위로 다운로드 해줘
      />
      <h1 className="text-3xl font-bold">{"Hi, I'm Chen"}</h1>
      <p className="text-xl font-semibold">Front Engineer</p>
      <p>꿈을 코딩하는 사람, 드림코더 엘리</p>
      <Link
        href="/contact"

      >
        <button className=" bg-yellow-400 px-3 py-1 rounded-xl font-bold mt-2">Contact Me</button>
>>>>>>> 10d767b83072d4e577ad70587f1b6e8f282e3a99
      </Link>
    </section>
  );
}
