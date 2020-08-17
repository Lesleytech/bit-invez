import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Layout, Plan } from '../../components';

export default function WelcomeScreen() {
  const [amount, setAmount] = useState('');
  const [plan, setPlan] = useState(null);
  const [price, setPrice] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (amount && plan) {
      if (plan === 'basic' && (amount < 50 || amount > 500)) {
        setError('Amount must be $50 - $500 for basic plan');
      } else if (plan === 'standard' && (amount < 500 || amount > 2000)) {
        setError('Amount must be $500 - $2000 for standard plan');
      } else if (plan === 'premium' && amount < 2000) {
        setError('Amount must be at least $2000 for premium plan');
      } else {
        setError(null);
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
      }
    }
  }, [amount, plan]);

  useEffect(() => {
    if (error) {
      setPrice(0);
      setPercentage(0);
    }
  }, [error]);

  return (
    <Layout>
      <main>
        <section className='hero_section'>
          <div>
            <h1>
              We provide instant access to investing, anytime and anywher
              <span>e.</span>
            </h1>
            <p>
              Investing has never been easier. Everything you are looking for in
              an ultimate investment platform.
            </p>
            <button className='btn_fill'>Start now</button>
          </div>
          <div>
            <div className='screen_container'>
              <img src='screen.png' alt='' className='screen' />
              <div className='graph_container'>
                <p>Graph will go here...</p>
              </div>
            </div>
          </div>
        </section>
        <section className='plans_section'>
          <h2>
            Our investment plan<span>s.</span>
          </h2>
          <div className='plans_container'>
            <Plan type='Basic' gain={5} min={50} max={500} />
            <Plan type='Standard' gain={6} min={500} max={2000} />
            <Plan type='Premium' gain={7} min={2000} />
          </div>
        </section>
        <section className='profit_calc_section'>
          <h2>
            Profit Calculato<span>r.</span>
          </h2>
          <div className='calc_container'>
            <div>
              <div>
                <input
                  type='number'
                  placeholder='$ Amount'
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
              <small id='profit_calc_error'>{error}</small>
            </div>
            <div>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                className='circular_loader'
                styles={{
                  path: { stroke: 'var(--primary-color)' },
                  text: { fill: 'var(--primary-color)' },
                }}
              />
              <span className='price'>${price}</span>
            </div>
          </div>
        </section>
        <section className='services_section'>
          <h2>
            What makes us uniqu<span>e?</span>
          </h2>
          <div>
            <div>
              <h3>Professionalism</h3>
              <p>Our staff includes several specialist.</p>
            </div>
            <div>
              <h3>Round the clock support</h3>
              <p>
                At any time you can contact our support team and get answers to
                your questions.
              </p>
            </div>
            <div>
              <h3>Fixed income</h3>
              <p>
                Profit is calcuated on a regular basis, you can monitor it in
                your personal account
              </p>
            </div>
            <div>
              <h3>Reliability</h3>
              <p>
                Trade conviniently from your comfort zone. You chose when to
                trade with us and when to exit.
              </p>
            </div>
            <div>
              <h3>Convenient withdrawals</h3>
              <p>
                Withdraw your money in an instant using a wide range of
                available payment systems.
              </p>
            </div>
            <div>
              <h3>Commitment</h3>
              <p>
                We are hightly committed to bringing you the best experience. We
                work so hard to make sure you feel safe and at home.
              </p>
            </div>
          </div>
        </section>
        <div className='sections_edit'>
          <section>
            <h2>
              We can manage your financ<span>e.</span>
            </h2>
            <p>
              Our team consist of professionals who provide clients and partners
              with confidence and only best consulting and financial services.
              Join our company and use a great chance to conquer the trading
              market and be one of those who eager to lead and innovate in the
              financial industry.
            </p>
            <button className='btn_fill'>Join us</button>
          </section>
          <section>
            <h2>
              Invest for what matters to yo<span>u.</span>
            </h2>
            <p>
              Everyone has their own goals. A dream home. Children’s education.
              A trip to the moon. No matter what your goals are, Bit Invez works
              hard to help you reach them.
            </p>
          </section>
          <section>
            <h2>
              Build your investing foundatio<span>n.</span>
            </h2>
            <p>
              We all have to start somewhere. Let us help get you on the right
              track as you start your investing journey.Sometimes investing can
              be complicated and confusing. Bit Invez breaks down the
              complexities of investing with intuitive tools that add efficiency
              and simplicity.
            </p>
          </section>
          <section>
            <h2>
              Learn to trad<span>e.</span>
            </h2>
            <p>
              Learn how to trade on the largest financial market with us with
              ease and full collaboration. Feel free to subscribe, so as to
              learn and have financial freedom.
            </p>
            <p>
              <b>Full mentorship - $250</b>
            </p>
            <button className='btn_fill'>Subscribe now</button>
          </section>
          <section>
            <h2>
              Accurate Signal<span>s.</span>
            </h2>
            <p>
              We provide accurate signals for beginners in forex trading for a
              life time. Feel free to subscribe.
            </p>
            <p>
              <b>Signals - $150</b>
            </p>
            <button className='btn_fill'>Subscribe now</button>
          </section>
          <section>
            <h2>
              Ready to get free access to the world of investin<span>g?</span>
            </h2>
            <p>Create an account to start using the platform.</p>
            <button className='btn_fill'>Create account</button>
          </section>
        </div>
      </main>
      <footer>
        <div>
          <strong className='brand'>
            <span>Bi</span>t<span> i</span>nvez
            <span>.</span>
          </strong>
          <p>
            Trade from your comfort zone. You chose when to trade with us and
            when to exit to your own satisfaction.
          </p>
        </div>
        <div>
          <div>
            <h3>Contact us</h3>
            <p>+123 456 789 </p>
            <address>North Broadway, Southern Hermishphere </address>
            <p>support@bitinvez.com</p>
          </div>
          <div>
            <ul>
              <li>
                <FaFacebook className='social_icon' />
              </li>
              <li>
                <FaInstagram className='social_icon' />
              </li>
              <li>
                <FaTwitter className='social_icon' />
              </li>
            </ul>
            <strong>2% referal commission</strong>
          </div>
        </div>
        <small>Copyright &copy;2020 All rights reserved BitInvex, Inc.</small>
      </footer>
    </Layout>
  );
}
