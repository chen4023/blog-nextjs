import Profile from "@/components/Profile";

export default function AboutPage() {
  return (<div>
    <Profile />
    <section className="flex flex-col m-auto shadow-2xl text-center items-center bg-gray-100 mt-6 py-7 w-[80%]">
      <h1 className="text-2xl font-bold">Who Am I ?</h1>
      <p>개발을 사랑하는 풀스택 개발자 <br /> 사람과 디자인을 담는 웹앱을 만들고 있음</p>
      <br />
      <h1 className="text-2xl font-bold">Career</h1>
      <p>구글러 (~Now)<br /> 메이스북 (~2019)<br /> 삼성전자(~2015)</p>
      <br />
      <h1 className="text-2xl font-bold">Skills</h1>
      <p>React, Vue, Node<br /> Git, Clean Code<br /> VS Code, IntelliJ, MongoDB</p>

    </section>
  </div>)
}
