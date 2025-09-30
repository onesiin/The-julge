import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined" | "blue";
  size?: "large" | "medium" | "small";
  children: React.ReactNode;
}

/**
 * THE-JULGE 프로젝트 공용 직사각형 버튼 컴포넌트
 *
 * @param {Object} props - Button 컴포넌트 props
 * @param {"primary"|"outlined"|"blue"} [props.variant="primary"] - 버튼 스타일 지정 (primary: 빨간색? solid, outlined: 빨간색 테두리, blue: 파란색 테두리)
 * @param {"large"|"medium"|"small"} [props.size="large"] - 버튼 높이 지정, 너비는 부모에서 제어 (large: 48px, medium: PC 48px/Mobile 37px, small: 37px)
 * @param {string} [props.className=""] - 기존 className 전달 또는 새로 추가할 className (너비 제어 등)
 * @param {React.ReactNode} props.children - 버튼 내용(텍스트)
 * @param {Object} [restProps] - 버튼에 전달되는 추가 속성(onClick, disabled, type 등)
 *
 */

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "large",
  className = "",
  children,
  ...restProps
}) => {
  // 공통 스타일
  const BASE_STYLES =
    "font-medium rounded-md transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-gray-40 disabled:text-white disabled:border-gray-40 disabled:cursor-not-allowed";

  // 높이별 스타일
  const SIZE_STYLES = {
    large: "h-12 text-body-1-bold",
    medium: "h-[37px] text-body-2-bold md:h-12 md:text-body-1-bold",
    small: "h-[37px] text-body-2-bold",
  };

  // variant별 스타일
  const VARIANT_STYLES = {
    primary: "bg-primary-20 text-white hover:bg-primary-10 focus:ring-primary-20",
    outlined: "bg-white text-primary-20 border border-primary-20 hover:bg-red-10 focus:ring-primary-20",
    blue: "bg-white text-blue-20 border border-blue-20 hover:bg-blue-10 focus:ring-blue-20",
  };

  const finalClasses = [BASE_STYLES, SIZE_STYLES[size], VARIANT_STYLES[variant], className].filter(Boolean).join(" ");

  return (
    <button className={finalClasses} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
