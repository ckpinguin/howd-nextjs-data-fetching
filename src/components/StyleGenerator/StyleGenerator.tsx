"use client";

import React from "react";

import styles from "./StyleGenerator.module.css";

function StyleGenerator() {
  return <div className={styles.wrapper}>{/* where the magic happens */}</div>;
}

export default StyleGenerator;
