"use client";

import { useRouter } from "next/navigation";

export default function LoginUi() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/page/signup");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* 로고 이미지 가져와서 붙여넣기 */}
      <div className="w-[248px] h-[45px] bg-[#EA3C12] rounded mb-8"></div>

      <div className="w-[350px] mb-4">
        <span className="block text-gray-700 text-sm font-medium mb-2">이메일</span>
        <input
          type="email"
          placeholder="입력"
          className="w-full h-[58px] border border-gray-300 rounded-[8px] px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EA3C12] focus:border-transparent"
        />
      </div>

      <div className="w-[350px] mb-6">
        <span className="block text-gray-700 text-sm font-medium mb-2">비밀번호</span>
        <input
          type="password"
          placeholder="입력"
          className="w-full h-[58px] border border-gray-300 rounded-[8px] px-4 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EA3C12] focus:border-transparent"
        />
      </div>

      <button className="w-[350px] h-[48px] bg-[#EA3C12] text-white rounded-[8px] font-medium hover:bg-[#d6340f] transition-colors duration-200 mb-4">
        로그인 하기
      </button>

      <div className="w-[350px] h-[19px] text-center">
        <span className="text-gray-600 text-sm">회원이 아니신가요? </span>
        <button onClick={handleSignupClick} className="text-[#EA3C12] hover:underline font-medium text-sm">
          회원가입 하기
        </button>
      </div>
    </div>
  );
}
