import React from 'react';
import styles from './Plan.module.css';

import { MdDone as CheckIcon } from 'react-icons/md';

export default function Plan({ type, min, max, gain }) {
  return (
    <div className={styles.container}>
      <h3>{type} plan</h3>
      <div>
        <ul>
          <li>
            <CheckIcon /> {gain}% daily percentage gain
          </li>
          <li>
            <CheckIcon /> 7 days
          </li>
          <li>
            <CheckIcon /> Deposit between ${min} - ${max || 'infinity'}
          </li>
          <li>
            <CheckIcon /> 100% refundable
          </li>
          <li>
            <CheckIcon /> Instant payments
          </li>
        </ul>
        <button>Sign up</button>
      </div>
    </div>
  );
}
