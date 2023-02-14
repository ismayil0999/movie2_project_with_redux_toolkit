import React,{useRef,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {NavLink} from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { closemenu } from '../redux/data';
import { searchItem } from '../redux/data';
import { getSearch } from '../redux/data';
export default function Body() {
    const menulist=useSelector(state=>state.movie.menu)
    const menu=useSelector(state=>state.movie.openMenu)
    const films=useSelector(state=>state.movie.searchresult)
    const dispatch=useDispatch()
    const title=useRef()
  useEffect(()=>{
    dispatch(getSearch())
  },)
  console.log(films)
  
  return (
    <div className='menu' menu={menu}>
      <CloseIcon className='close' onClick={()=>{dispatch(closemenu())}}/>
      <div className='search'>
<SearchIcon style={{color:"#9999A5",marginLeft:"10px"}}/>
<input type="text" ref={title} placeholder='Search...' onChange={()=>{ dispatch(searchItem({title:title.current.value})) }}></input>
        </div>
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