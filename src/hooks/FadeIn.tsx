import { useInView } from "@/hooks/useInView";
import type { ElementType, ReactNode, CSSProperties, HTMLAttributes } from "react";

interface FadeInProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeIn({
  as: Tag = "div",
  children,
  y = 20,
  delay = 0,
  duration = 0.6,
  className,
  style,
  ...rest
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}