import React from 'react';
import { Input, Layout, Button } from '../../components';
import { Link } from 'react-router-dom';

export default function RegisterScreen() {
  return (
    <Layout>
      <main className='flex_main'>
        <div>
          <h1>Sign up</h1>
          <form>
            <Input type='text' placeholder='Username' />
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Input type='password' placeholder='Retype password' />
            <div style={{ marginTop: '5em' }}>
              <Button text='Sign up' fullWidth />
            </div>
          </form>
          <p>
            Already have an account?{' '}
            <Link to='/login' className='link_primary'>
              Sign in
            </Link>
          </p>
        </div>
        <div></div>
      </main>
    </Layout>
  );
}
