import React from 'react';
import styles from './Input.module.css';

export default function Input({
  type,
  onChange,
  value,
  disabled,
  helperText,
  placeholder,
  error,
}) {
  return (
    <div className={styles.input_container}>
      <input
        type={type}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={styles.input}
        placeholder={placeholder}
        style={{
          color: error ? '#f44' : 'initial',
        }}
      />
      <small className={styles.helper_text}>{helperText}</small>
    </div>
  );
}
