"use client";
import { createContext } from "react";

const SidebarContext = createContext({
    open: false,
    setOpen: () => { },
});

export default SidebarContext;