import React, { useEffect } from 'react';
import { Trendscomponent } from '../style/styled';
import { useSelector,useDispatch } from 'react-redux';
import { getMovies } from '../redux/data';
import { useLocation } from 'react-router-dom';
export default function Trends() {
    const movies=useSelector(state=>state.movie.movies)
    const location=useLocation()
  
  return (
   <Trendscomponent>
       <p className='pathname'>HOME - {location.pathname.toUpperCase().split("/")}</p>
       <h2>Trends</h2>
       <p>Discover the best dubbing, subtitled TV series and movies with advanced filters and watch them in 1080p quality. </p>
       <div className='trend-movies'>
{
    movies.slice(0,10).map(movie=>{
        return <div className='trend-movie-box'>
              <img src={`http://image.tmdb.org/t/p/w500/` + movie.poster_path} alt=""></img>
              <div className='trend-movie-info'>
<h4>{movie.title}</h4>
             
              <div className='alt-info'>
                  <h6>Mystery</h6>
                  <h6>{movie.vote_average}</h6>
        </div>
        <p className='overview'>{movie.overview}</p>
        <h5>{movie.vote_count} views</h5>
        </div>
        </div>
    })
}
       </div>
   </Trendscomponent>
  );
}
