import React,{useEffect} from 'react';
import { Discover } from '../style/styled';
import { getMovies } from '../redux/data';
import { useSelector,useDispatch } from 'react-redux';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function Movies() {
    const movies=useSelector(state=>state.movie.movies)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMovies())
    },)
  return (
   <Discover>
       <h2>Movies</h2>
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
     <div className='movie-section discovery'>
        {movies.slice(0,10).reverse().map(movie=>{
            return  <div>
            <img src={`http://image.tmdb.org/t/p/w500/` + movie.poster_path} alt=""></img>
            <h5>{movie.title}</h5>
            <p>Action</p>
            <a href='#'>
             <PlayCircleIcon fontSize='large'/>
             <h4>{movie.vote_average}</h4>
            </a>
            </div>
          })
        }
        </div>
      <Pagination count={5} shape="rounded" className='pagination' />
      </Discover>
  );
}
