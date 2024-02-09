"use client";
import { useContext, useState } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import classes from "./styles.module.css";

function SocialMedia({ ...props }) {
  return (
    <Box className={classes.social}>
      <Link href="https://www.facebook.com/uzerkmakon" target="_blank" passHref aria-label="facebook">
        <Image
          src={"/icons/facebook.svg"}
          width={25}
          height={25}
          alt={"facebook-icon"}
          className={classes.socialIcon}
        />
      </Link>
      <Link href="https://t.me/aj_distribution" target="_blank" passHref aria-label="telegram">
        <Image
          src={"/icons/telegram.svg"}
          width={25}
          height={25}
          alt={"telegram-icon"}
          className={classes.socialIcon}
        />
      </Link>
      <Link href="https://www.instagram.com/byerkmakon/" target="_blank" passHref aria-label="instagram">
        <Image
          src={"/icons/instagram.svg"}
          width={25}
          height={25}
          alt={"instagram-icon"}
          className={classes.socialIcon}
        />
      </Link>
    </Box>
  );
}

export default SocialMedia;
