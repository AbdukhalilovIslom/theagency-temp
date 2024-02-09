"use client";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import Link from "next/link";
import Sidebar from "./sidebar";
import { useTranslation } from "@/app/i18n/client";
import SidebarContext from "@/context/sidebar.context";
import SocialMedia from "@/Components/common/socialMedia";

import classes from "./styles.module.css";
import NavList from "./navList";
import LangSwitcher from "./langSwitcher";

interface SidebarMenuProps {
  lng: string
}

function SidebarMenu({ lng, ...props }: SidebarMenuProps) {
  const { t, i18n } = useTranslation(lng);
  const { open, setOpen } = useContext(SidebarContext);
  return (
    <Sidebar maxWidth={"100%"} open={open} setOpen={setOpen}>
      <Box className={classes.sidebar}>
        <NavList setOpen={setOpen} lng={lng} />

        <Box className={classes.sidebarWrapper}>
          <LangSwitcher lng={lng} />
          <SocialMedia />
        </Box>
      </Box>
    </Sidebar>
  );
}

export default SidebarMenu;