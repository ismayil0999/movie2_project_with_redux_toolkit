import React,{useEffect} from 'react';
import { Discover } from '../style/styled';
import { getMovies } from '../redux/data';
import { useSelector,useDispatch } from 'react-redux';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Pagination from '@mui/material/Pagination';
import { useLocation } from 'react-router-dom';
export default function Discovery() {
    const movies=useSelector(state=>state.movie.movies)
    const dispatch=useDispatch()
    const location=useLocation()
    useEffect(()=>{
        dispatch(getMovies())
    },)
  return (
   <Discover>
         <p className='pathname' style={{textAlign:"start"}}>HOME - {location.pathname.toUpperCase().split("/")}</p>
       <h2>Discovery</h2>
<div className='filtering'>
      <select>
          <option>All </option>
          <option>Movies</option>
          <option>Series</option>
      </select>
      <select>
          <option>Adeventure </option>
          <option>Animation</option>
          <option>Crime</option>
          <option>History</option>
          <option>Comedy</option>
      </select>
      <select>
          <option>Sd </option>
          <option>Hd</option>
          <option>Ultra Hd</option>
      </select>
      <button className='apply-button'>Apply</button>
      </div>
     <div className='discovery'>
        {movies.map(movie=>{
            return  <div>
            <img src={`http://image.tmdb.org/t/p/w500/` + movie.poster_path} alt=""></img>
            <h5>{movie.title}</h5>
            <p>Action</p>
            <a href='#'>
             <PlayCircleIcon fontSize='large'/>
            </a>
            </div>
          })
        }
        </div>
      <Pagination count={5} shape="rounded" className='pagination' />
      </Discover>
  );
}
