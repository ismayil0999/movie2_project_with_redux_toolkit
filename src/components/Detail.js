import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getMovies,opencomment } from '../redux/data';
import {DetailPage} from "../style/styled";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
export default function Detail() {
    const movies=useSelector(state=>state.movie.movies)
    const comment=useSelector(state=>state.movie.comment)
    const param=useParams()
    const film=movies.find(movie=>movie.id==param.id)
   const dispatch=useDispatch()
   useEffect(()=>{
  dispatch(getMovies())
   },[])
 console.log(film)
  return (
    <DetailPage comment={comment}>
      <img src={`http://image.tmdb.org/t/p/w500/${film?.backdrop_path}`}></img>
      <div className='info'>
      <img src={`http://image.tmdb.org/t/p/w500/${film?.poster_path}`} className="poster"></img>
  <div className='single-detail'>
  <h3>{film?.title}</h3>
 <button>Trailer</button>
   <p>{film?.overview}</p>
   <p>IMDB: {film?.vote_average}</p>
   <p>View: {film?.popularity.toFixed(0)}</p>
   <p>Release date: {film?.release_date}</p>
   <p>Language: {film?.original_language.toUpperCase()}</p>
   <p>Genres: Action, Dram, Adeventure</p>
   <div className='icons'>
        <ThumbUpIcon/>0
        <ThumbDownIcon/>0
        <CommentIcon onClick={()=>{dispatch(opencomment())}}/>
      </div>
      <div  className="comment">
        <h5>No comment here</h5>
      </div>
  </div>
      </div>
  </DetailPage>
  );
}
