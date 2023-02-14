import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import HomeIcon from '@mui/icons-material/Home';
import SensorsIcon from '@mui/icons-material/Sensors';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AirplayIcon from '@mui/icons-material/Airplay';
import WindowIcon from '@mui/icons-material/Window';
import { useState } from "react";
export const getMovies=createAsyncThunk("getMovies",async()=>{
  const response =await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=70529d61fe54b1ad1ecaac7877cf57d4&language=en&page=1")
  return response.data.results
})
export const getSearch=createAsyncThunk("getSearch",async()=>{
  const response =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=70529d61fe54b1ad1ecaac7877cf57d4&query `)
  return response.data.results
})


const menuList=[
    {
     name:"Home",
     icon:<HomeIcon/>,
     path:"/"
    },
    {
        name:"Discovery",
        icon:<SensorsIcon/>,
        path:"/discovery"
       },
       {
        name:"Trends",
        icon:<TrendingUpIcon/>,
        path:"/trends"
       },
       {
        name:"Movies",
        icon:<MovieFilterIcon/>,
        path:"/movies"
       },
       {
        name:"Tv Shows",
        icon:<LiveTvIcon/>,
        path:"/tvshows"
       },
       {
        name:"Actors",
        icon:<AutoAwesomeIcon/>,
        path:"/actors"
       },
       {
         name:"Tv Channels",
         icon:<AirplayIcon/>,
         path:"/tvchannel"
       },
       {
        name:"Collections",
        icon:<WindowIcon/>,
        path:"/collections"
      }


]
const slider=[
  {
    url:"https://cdn.shopify.com/s/files/1/1140/8354/files/Captain_America_The_First_Avenger_480x480.jpeg?v=1616652230",
    name:"Captain America",
    description:"During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort.",

  },
  {
    url:"https://images.fanart.tv/fanart/shutter-island-51e2f8f7840a8.jpg",
    name:"Shutter Island",
    description:"Shutter Island is a novel by American writer Dennis Lehane, published by HarperCollins in April 2003. It is about a U.S. Marshal who goes to an isolated hospital for the criminally insane to investigate the disappearance of a patient who is a multiple murderer. ",
  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToT7ATE0nJ55D0FnaFaAyS49skcTOR8xL-EQ&usqp=CAU",
    name:"Mad Max Fury",
    description:"Set in a post-apocalyptic desert wasteland where petrol and water are scarce commodities, Fury Road follows Max Rockatansky, who joins forces with Imperator Furiosa against cult leader Immortan Joe and his army, leading to a lengthy road battle."
  }
]
const posterslider=[
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3qTMbK-Nx0uMEQ839An3a7yrF0m0LlzQoA&usqp=CAU",
    name:"Captain America",
    desc:"New movie"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRS6v4qBzj512R2RoXuZgL2SxBKpFIHoKWA&usqp=CAU",
    name:"Chilling Adventures of Sabrina",
    desc:"Watch now"
  },
  {
    img:"https://render.fineartamerica.com/images/rendered/search/poster/5.5/8/break/images/artworkimages/medium/2/django-unchained-prospera-kartika.jpg ",
    name:"Django Unchained",
    desc:"Cooming Soon",
    class:"noborder"
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Fear_the_Walking_Dead_season_4.jpg/220px-Fear_the_Walking_Dead_season_4.jpg ",
    name:"Fear the Walking Dead",
    desc:"Watch now",
    class:"noborder"
  },
  {
   img:"https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg ",
   name:"Mad Max Fury",
   desc:"Watch now"
  },{
    img:"https://i.insider.com/4fce34716bb3f7ee21000006?width=400&format=jpeg ",
    name:"Breakign Bad",
    desc:"Cooming Soon"
  }
]
const collection=[
  {
    title:"Everything New on Netflix in February list",
    subtitle:"6 there is content"
  },
  {
    title:"The Best TV and Movies to Watch in February",
    subtitle:"9 there is content"
  },
  {
    title:"New movies to be released in 2021",
    subtitle:"3 there is content"
  }
]
const actors=[
  {
    img:"https://static1.purebreak.com/people/1/44/26/41/@/642493-ross-lynch-a-l-avant-premiere-des-nouvel-624x0-1.jpg",
    name:"Ross Lynch"
  },
  {
    img:"https://i.insider.com/5cd2e66193a1522764463094?width=700",
    name:"Dwayne Jhonson"
  },
  {
    img:"https://images.hellomagazine.com/imagenes/celebrities/20221104156142/angelina-jolie-rare-photo-daughter-zahara-museum/0-759-310/angelina-jolie-eternals-t.jpg ",
    name:"Angelina Jolie"
  },
  {
    img:"https://www.cheatsheet.com/wp-content/uploads/2020/07/Brad-Pitt-11-scaled.jpg ",
    name:"Brad Pitt"
  },
  {
    img:"https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg ",
    name:"Leonardo Di Caprio"
  }
]
export const data=createSlice({
    name:"movies",
   initialState:{
     menu:menuList,
     slider:slider,
     poster:posterslider,
     movies:[],
     loading:false,
     collection:collection,
     actors:actors,
     openMenu:false,
     key:"",
     searchresult:[]
   },
   reducers:{
     openmenu:(state)=>{
       state.openMenu=true
     },
     closemenu:(state)=>{
      state.openMenu=false
    },
    searchItem:(state,payload)=>{
      state.key=payload.title
    }
   },
   extraReducers:(builder)=>{
    builder.addCase(getMovies.pending,(state,action)=>{
      state.loading=true;
  });
    builder.addCase(getMovies.fulfilled,(state,action)=>{
      state.movies=action.payload;
  });
  builder.addCase(getMovies.rejected,(state,action)=>{
    state.loading=false
})
builder.addCase(getSearch.fulfilled,(state,action)=>{
  state.searchresult=action.payload
})
   }
})
export const {openmenu,closemenu,searchItem}=data.actions
export default data.reducer