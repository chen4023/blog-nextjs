import Profile from "@/components/Profile";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className="shadow-2xl text-center bg-gray-100 m-8 p-7">
        <h1 className={TITLE_CLASS}>Who Am I ?</h1>
        <p>
          개발을 사랑하는 프론트엔드 개발자 <br /> 사람과 디자인을 담는 웹앱을
          만들고 있음
        </p>
        <br />
        <h1 className={TITLE_CLASS}>Career</h1>
        <p>
          구글러 (~Now)
          <br /> 메이스북 (~2019)
          <br /> 삼성전자(~2015)
        </p>
        <br />
        <h1 className={TITLE_CLASS}>Skills</h1>
        <p>
          React, Vue, Node
          <br /> Git, Clean Code
          <br /> VS Code, IntelliJ, MongoDB
        </p>
      </section>
    </>
  );
}
