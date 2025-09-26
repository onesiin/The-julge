import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-[50px] bg-blue-200">찬민 테스트</div>
      <div className="text-[20px]">테일윈드 3.4버전 입니다</div>
    </>
  );
}
