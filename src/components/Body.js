import React from 'react';
import { Content } from '../style/styled';
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu  from './Menu';
import Actor from './Actor';
import Discovery from './Discovery';
import Trends from './Trends';
import Movies from './Movies';
import Empty from './Empty';
export default function Body() {
  const menu=useSelector(state=>state.movie.openMenu)
  return (
    <Content menu={menu}>
   <Menu/>
   <Routes>
     <Route path="/" exact element={<Home/>}></Route>
     <Route path="/actor" element={<Actor/>}></Route>
     <Route path="/discovery" element={<Discovery/>}></Route>
     <Route path='/trends' element={<Trends/>}></Route>
     <Route path='/movies' element={<Movies/>}></Route>
     <Route path='/tvshows' element={<Empty/>}></Route>
   </Routes>
   </Content>
  );
}
