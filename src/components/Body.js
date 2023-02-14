import React from 'react';
import { Content } from '../style/styled';
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import Menu  from './Menu';
import Discovery from './Discovery';
import Trends from './Trends';
import Movies from './Movies';
import Empty from './Empty';
import Actors from './Actors';
import Channels from './Channels';
import Register from './Register';
import Login from './Login';
import Detail from './Detail';
export default function Body() {
  const menu=useSelector(state=>state.movie.openMenu)
  return (
    <Content menu={menu}>
   <Menu/>
   <Routes>
     <Route path="/" exact element={<Home/>}></Route>
     <Route path="/discovery" element={<Discovery/>}></Route>
     <Route path='/trends' element={<Trends/>}></Route>
     <Route path='/movies' element={<Movies/>}></Route>
     <Route path='/tvshows' element={<Empty/>}></Route>
     <Route path='/actors' element={<Actors/>}></Route>
     <Route path='/tvchannel' element={<Channels/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/detail/:id" element={<Detail/>}></Route>
   </Routes>
   </Content>
  );
}
