"use client";

import { useRouter } from "next/navigation";

export default function SignupUi() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/page/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">개발중입니다</h1>
      <button onClick={handleLoginClick} className="text-[#EA3C12] hover:underline font-medium">
        로그인으로 돌아가기
      </button>
    </div>
  );
}
