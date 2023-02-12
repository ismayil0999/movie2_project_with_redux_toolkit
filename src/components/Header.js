import React from 'react';
import { Head } from '../style/styled';
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useDispatch } from 'react-redux';
import { openmenu } from '../redux/data';
export default function Header() {
  const dispatch=useDispatch()
  return (
    <Head>
      <WidgetsIcon className="menu-icon" onClick={()=>{dispatch(openmenu())}}/>
        <h1>Movie</h1>
        <div className='search'>
<SearchIcon style={{color:"#9999A5",marginLeft:"10px"}}/>
<input type="text" placeholder='Search...'></input>
        </div>
        <div className='login'>
            <p>Register</p>
            <p>Login</p>
        </div>
    </Head>
  );
}
