import React from 'react';

import styles from './Button.module.css';

export type ButtonProps = {};

function Button({}: ButtonProps) {
  return <div className={styles.wrapper}></div>;
}

export default Button;
