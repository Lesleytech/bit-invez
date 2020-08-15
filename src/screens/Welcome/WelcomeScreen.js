import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import styles from './WelcomeScreen.module.css';
import { Navbar } from '../../components';
import Plan from '../../components/Plan/Plan';

export default function WelcomeScreen() {
  const [amount, setAmount] = useState(null);
  const [plan, setPlan] = useState(null);
  const [price, setPrice] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (amount >= 50 && plan) {
      if (plan === 'basic') {
        setPercentage(35);
        setPrice((amount + amount * 0.35).toFixed(2));
      } else if (plan === 'standard') {
        setPercentage(84);
        setPrice((amount + amount * 0.84).toFixed(2));
      } else if (plan === 'premium') {
        setPercentage(210);
        setPrice((amount + amount * 2.1).toFixed(2));
      }
    } else {
      setPrice(0);
      setPercentage(0);
    }
  }, [amount, plan]);

  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div>
            <h1>
              We provide Instant access to investing, anytime and anywher
              <span>e.</span>
            </h1>
            <p>
              Investing has never been easier. Everything you are looking for in
              an ultimate investment platform.
            </p>
            <button className={styles.btn}>Start now</button>
          </div>
          <div>
            <div className={styles.screen_container}>
              <img src='screen.png' alt='' className={styles.screen} />
              <div className={styles.graph_container}>
                <p>Graph will go here...</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.plans}>
          <div>
            <h2>
              Our investment plan<span>s.</span>
            </h2>
            <div className={styles.plans_container}>
              <Plan type='Basic' gain={5} duration={7} min={50} max={5000} />
              <Plan type='Standard' gain={6} duration={14} min={100} />
              <Plan type='Premium' gain={7} duration={30} min={100} />
            </div>
          </div>
        </section>
        <section className={styles.profit_calc}>
          <div>
            <h2>
              Profit Calculato<span>r.</span>
            </h2>
            <div className={styles.calc_container}>
              <div>
                <input
                  type='number'
                  placeholder='Enter amount in USD'
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                  min={50}
                />
                <select
                  name='plan'
                  defaultValue='select plan'
                  onChange={(e) => setPlan(e.target.value)}
                >
                  <option value='select plan' disabled>
                    Select plan
                  </option>
                  <option value='basic'>Basic</option>
                  <option value='standard'>Standard</option>
                  <option value='premium'>Premium</option>
                </select>
              </div>
              <div>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  className={styles.circular_loader}
                  styles={{ path: { stroke: '#44f' }, text: { fill: '#44f' } }}
                />
                <span className={styles.price}>${price}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
