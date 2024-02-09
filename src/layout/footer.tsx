"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function Footer({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className={classes.footer}>
      <h1>Footer</h1>
    </Box>
  );
}

export default Footer;
