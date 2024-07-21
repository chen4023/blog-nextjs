import Image from "next/image";
import Link from "next/link";
import profileImg from "../../public/images/profile.png";

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        src={profileImg}
        alt="profile"
        width={250}
        height={250}
        className="rounded-full mx-auto mb-2"
        priority // 해당 이미지는 중요하니까 우선순위로 다운로드 해줘
      />
      <h1 className="text-3xl font-bold">{`"안녕하세요, 저는 프론트엔드 개발자 현채은입니다."`}</h1>
      <p className="text-xl font-semibold">Front Engineer</p>
      <p>꿈을 코딩하는 사람</p>
      <Link href="/contact">
        <button className=" bg-yellow-400 px-3 py-1 rounded-xl font-bold mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
