import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, variant, fullWidth }) {
  return (
    <button
      className={`${styles.btn} ${
        variant === 'outlined' && styles.btn_outlined
      }`}
      style={{ width: fullWidth ? '100%' : 'initial' }}
    >
      {text}
    </button>
  );
}
