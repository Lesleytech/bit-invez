import React from 'react';
import { Input, Layout, Button } from '../../components';
import { Link } from 'react-router-dom';

export default function LoginScreen() {
  return (
    <Layout>
      <main className='flex_main'>
        <div>
          <h1 className='mb-0'>Sign in</h1>
          <p className='text-secondary mt-0'>With your email and password</p>
          <form>
            <Input type='email' placeholder='Type email' />
            <Input type='password' placeholder='Type password' />
            <div style={{ marginTop: '5em' }}>
              <Button text='Sign in' fullWidth />
            </div>
          </form>
          <div className='or_seperator'>
            <span></span>
            <p>or</p>
            <span></span>
          </div>
          <Button variant='outlined' text='Create account' fullWidth />
          <p>
            Forgot password?{' '}
            <Link to='/' className='link_primary'>
              Reset password
            </Link>
          </p>
        </div>
        <div></div>
      </main>
    </Layout>
  );
}
