import Image from "next/image";
import React from "react";

import classes from "./styles.module.css";
export default function Loading() {
  return (
    <div className={classes.loading}>
      <Image
        src={"/icons/logo.svg"}
        width={186}
        height={60}
        alt={"logo"}
        className={classes.logo}
        priority
      />
    </div>
  );
}
