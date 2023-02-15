import React from 'react';
import { Registerbox } from '../style/styled';
export default function Login() {
  return (
    <Registerbox>
        <h3>Login</h3>
    <div>
        <input type="text" placeholder='Username or email'></input>
        <input type="text" placeholder='Password'></input>
        <button>Login</button>
    </div>
    </Registerbox>
  );
}