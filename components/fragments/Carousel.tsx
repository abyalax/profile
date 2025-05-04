"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MappingComponentProps<T> {
  data: T[];
  children: (data: T[]) => ReactNode;
}

const Carousel = <T,>({ data, children }: MappingComponentProps<T>) => {
  const wrapperRef = useRef(null);

  return (
    <div className="overflow-x-scroll cursor-grab" ref={wrapperRef} style={{ scrollbarWidth: "none" }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -5000, right: 0 }} 
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-4"
      >
        {children(data)}
      </motion.div>
    </div>
  );
};

export default Carousel;
