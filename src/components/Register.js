import React from 'react';
import { Registerbox } from '../style/styled';
export default function Register() {
  return (
    <Registerbox>
        <h3>Register</h3>
    <div>
    <input type="text" placeholder='Name'></input>
        <input type="text" placeholder='Username'></input>
        <input type="text" placeholder='Email'></input>
        <input type="text" placeholder='Password'></input>
        <input type="text" placeholder='Phone number'></input>
        <button>Register</button>
    </div>
    </Registerbox>
  );
}
