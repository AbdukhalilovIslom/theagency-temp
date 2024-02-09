"use client";
import SidebarContext from "@/context/sidebar.context";
import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect, useState } from "react";

// d="Mx1 y1Lx2 y2"

const path01Variants = {
  open: { d: "M0.366397 0.659774L13.9754 15.3156" },
  closed: { d: "M1 5L16 5" },
};

const path02Variants = {
  open: { d: "M0.3664 15.31L13.9754 0.659" },
  closed: { d: "M1 10L16 10" },
};

const path03Variants = {
  closed: { d: "M9 15L16 15" },
  moving: { d: "M16 15L16 15" },
  open: { d: "M16 10.5L16 10.5" },
};

export default function MenuIcon({ }) {
  const { open, setOpen } = useContext(SidebarContext);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const path03Controls = useAnimation();
  useEffect(() => {
    async function handleOpen() {
      if (!menuOpen) {
        setOpen(false);
        path01Controls.start(path01Variants.closed);
        path02Controls.start(path02Variants.closed);
        await path03Controls.start(path03Variants.moving);
        await path03Controls.start(path03Variants.closed);
      } else {
        await path03Controls.start(path03Variants.moving);
        await path03Controls.start(path03Variants.open);
        path01Controls.start(path01Variants.open);
        path02Controls.start(path02Variants.open);
      }
    }
    handleOpen();
    return () => { };
  }, [menuOpen, path01Controls, path02Controls, path03Controls]);

  useEffect(() => {
    if (open) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
    return () => { };
  }, [open]);

  return (
    <button
      onClick={() => {
        if (!menuOpen) {
          setOpen(true);
        }
        setMenuOpen(!menuOpen);
      }}
      style={{
        background: "none",
        border: "none",
      }}
      title="menu"
      aria-label="menu"
    >
      <svg
        width="35"
        height="35"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.1 }}
          stroke="#ccc65a"
          strokeLinecap="round"
          strokeWidth={1.5}
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.1 }}
          stroke="#ccc65a"
          strokeLinecap="round"
          strokeWidth={1.5}
        />
        <motion.path
          {...path03Variants.closed}
          animate={path03Controls}
          transition={{ duration: 0.1 }}
          stroke={menuOpen ? "#000" : "#ccc65a"}
          strokeLinecap="round"
          strokeWidth={1.5}
        />
      </svg>
    </button>
  );
}
