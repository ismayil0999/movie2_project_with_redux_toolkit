import React, {useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMovies } from '../redux/data';
import Slider from "react-slick";
import { HomeScreen } from '../style/styled';
import { useSelector,useDispatch } from 'react-redux';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
export default function Home() {
  const slideItem=useSelector(state=>state.movie.slider)
  const poster=useSelector(state=>state.movie.poster)
  const movies=useSelector(state=>state.movie.movies)
  const collection=useSelector(state=>state.movie.collection)
  const genres=useSelector(state=>state.movie.genre)
  const actors=useSelector(state=>state.movie.actors)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getMovies())
  },[])
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000
  };
  return (
   <HomeScreen>
    
    <Slider className='slider' {...settings}>
       {slideItem.map(slide=>{
         return <div>
           <img src={slide.url}></img>
<div className='content'>
<h1>{slide.name}</h1>
<p>{slide.description}</p>
</div>
         </div>
       })}
      </Slider>
      <div className='poster-slider'>
        {poster.map(posters=>{
          return <div>
            <img src={posters.img} className={posters.class}></img>
            <h4>{posters.name}</h4>
            <p>{posters.desc}</p>
          </div>
        })}
      </div>
      <div className='newest-movies'>
        <h2>Newest Movies</h2>
     <div className='movie-section movie'>
        {movies.slice(0,10).map(movie=>{
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
        </div>
        <div className='newest-movies'>
        <h2>Collections</h2>
     <div className='movie-section collection-section'>
       {
         collection.map(collections=>{
           return <div className='collection'>
             <h5 className='admin'>admin</h5>
<h4>{collections.title}</h4>
<h5>{collections.subtitle}</h5>
           </div>
         })
       }
        </div>
        </div>
        <div className='newest-movies'>
        <h2>Newest Series</h2>
     <div className='movie-section'>
        {movies.slice(10,20).map(movie=>{
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
        </div>
        <div className='genres'>
        <div className='genres-section'>
          {
            genres.map(genre=>{
              return <div style={{background:genre.background}} className="genre-box">
                <h3>{genre.name}</h3>
              </div>
            })
          }
        </div>
        </div>
        <div className='newest-movies actors'>
        <h2>Popular Actors</h2>
     <div className='movie-section'>
      {
        actors.map(actor=>{
          return <div className='actor-box'>
            <img src={actor.img}></img>
            <h4>{actor.name}</h4>
          </div>
        })
      }
        </div>
        </div>
   </HomeScreen>
  );
}
