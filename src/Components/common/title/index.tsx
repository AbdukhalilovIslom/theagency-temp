import React from "react";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function Title({ lng, title }) {
  const { t, i18n } = useTranslation(lng);
  return <h3 className={classes.title}>{t(title)}</h3>;
}

export default Title;