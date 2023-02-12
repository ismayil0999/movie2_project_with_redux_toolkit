import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {NavLink} from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from '@mui/icons-material/Close';
import { closemenu } from '../redux/data';
export default function Body() {
    const menulist=useSelector(state=>state.movie.menu)
    const menu=useSelector(state=>state.movie.openMenu)
    const dispatch=useDispatch()
  return (
    <div className='menu' menu={menu}>
      <CloseIcon className='close' onClick={()=>{dispatch(closemenu())}}/>
        <ul>
           {menulist.map(menuitem=>{
               return  <NavLink to={menuitem.path}>
               <li>{menuitem.icon}{menuitem.name}</li>
               </NavLink>
           })}
        </ul>
    </div>
  );
}