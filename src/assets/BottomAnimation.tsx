import React, { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface AnimationBottomProps {
  children: ReactNode;
}

const AnimationBottom: React.FC<AnimationBottomProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.33s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default AnimationBottom;
