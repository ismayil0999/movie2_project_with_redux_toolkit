import React from 'react';
import { Head } from '../style/styled';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useDispatch } from 'react-redux';
import { openmenu } from '../redux/data';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const dispatch=useDispatch()
  return (
    <Head>
      <WidgetsIcon className="menu-icon" onClick={()=>{dispatch(openmenu())}}/>
        <h1>Movie</h1>

        <div className='login'>
          <NavLink to="/register">
          <p>Register</p>
          </NavLink>
           <NavLink to="/login">
           <p>Login</p>
           </NavLink>
        </div>
    </Head>
  );
}
