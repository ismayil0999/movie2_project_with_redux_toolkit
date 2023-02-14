import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getMovies } from '../redux/data';
import {DetailPage} from "../style/styled"
export default function Detail() {
    const movies=useSelector(state=>state.movie.movies)
    const param=useParams()
    const film=movies.find(movie=>movie.id==param.id)
    const dispatch=useDispatch()
 useEffect(()=>{
dispatch(getMovies())
 },[1])
 console.log(film)
  return (
    <DetailPage>
      <img src={`http://image.tmdb.org/t/p/w500/${film?.backdrop_path}` }></img>
  <div className='single-detail'>
  <h3>{film?.title}</h3>
   <p>{film?.overview}</p>
   <p>IMDB: {film?.vote_average}</p>
   <p>View: {film?.popularity.toFixed(0)}</p>
   <p>Release date: {film?.release_date}</p>
  </div>
  </DetailPage>
  );
}
