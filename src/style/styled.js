import styled from 'styled-components';
const Head=styled.div`
display:flex;
justify-content:space-between;
width:100%;
overflow-x:hidden;
align-items:center;
color:white;

padding-left:5%;
padding-right:5%;
box-sizing:border-box;
}
i{
    color:#9999A5;
}
a{
    color:white;
    text-decoration:none;
}
.login{
    display:flex;
    gap:20px;
}
p:hover{
    color:yellow;
}
.menu-icon{
    display:none;
}
@media screen and (max-width:700px){
    .menu-icon{
        display:block
    }
}
`
const Content =styled.div`
display:flex;
color:white;
width:100%;
padding-bottom:150px;
@media screen and (max-width:700px){
    margin-top:3%;
}
ul{
   padding:30px;
   padding-top:0px !important;
}
li{
    list-style-type:none;
    display:flex;
    align-items:center;
    gap:10px;
    height:40px;
    color:#A7A7AF;
    font-size:16px;
    font-weight:600;
}
li:hover{
    color:white;
}
a{
    text-decoration:none;
}
.menu{
    width:30%;
}
.close{
    display:none;
}
.search{
    height:40px;
    display:flex;
    align-items:center;
    background:#101010;
    width:90%;
    border-radius:50px;
    padding:5px;
    margin-left:3%;
    margin-top:2%;
}
input{
    background:#101010;
    border:none;
    outline:none;
    color:white;
    font-size:16px;
    width:100%;
}
@media screen and (max-width:700px){
    .menu{
        position:absolute;
        top:0;
        left:${props=>props.menu===true ? "0%" : "-100%"};
        z-index:1000000;
        background:#000000;
        width:100%;
        padding-top:30px;
    }
    .close{
        display:block;
        margin-left:5%;
        font-size:30px;
    }
}
.pathname{
    margin-top:2%;
    text-align:start !important;
}
`
const HomeScreen=styled.div`
display:flex;
width:100%;
flex-direction:column;
justify-content:start;
align-items:center;
overflow-x:hidden;
padding-left:3%;
padding-right:3%;
color:white;
.noresult{
    color:gray;
}
.slider{
    width:100%;
    height:400px;
    overflow:hidden;
    @media screen and (max-width:535px){
        max-height:300px;
    }
    @media screen and (max-width:443px){
        height:200px;
    }
}
.slider div{
    position:relative;
    height:100%;
}
.slider img{
    position:absolute;
    top:0;
    left:0;
    z-index:-10000;
    width:100%;
    height:100%;
    border-radius:8px;
}
.content{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:flex-start;
    background:rgba(0, 0, 0, 0.596);
    box-sizing:border-box;
    padding-left:20px;
    h1{
        font-size:60px;
        font-weight:500px;
        @media screen and (max-width:443px){
            font-size:30px;
        }
    }
    p{
        text-align:start;
        width:60%;
        font-size:14px;
        color:#b5b5be;
        @media screen and (max-width:443px){
           font-size:10px;
           width:100%;
        }
    }
}
.slider ul{
    display:none !important;
}
.poster-slider{
    width:100%;
    display:flex;
    gap:10px;
    padding-top:20px;
    overflow-x:scroll;
    flex-wrap:no-wrap;
    ::-webkit-scrollbar{
        display:none;
    }
   div{
       display:flex;
       flex-direction:column;
       align-items:center;
       width:150px;
       gap:3px;
       img{
        width:100px;
        height:100px;
        border-radius:100%;
        border:3px solid #F5C518;
        padding:5px;
    }
    h4{
        height: 20px;
  width: 130px;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin: 0 5px 0 5px;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
    }
    p{
        color:#8B8B96;
    }
   }
}
.newest-movies{
    width:100%;
    min-height:200px;
}
.movie-section{
    display:flex;
    flex-wrap:wrap;
    overflow:hidden;
    flex-shrink:0;
    height:auto;
    gap:20px;
    row-gap:60px;
    width:100%;
    padding-bottom:60px;
}
.movie-section a{
    color:white;
}
.movie-section  div{
  min-width:170px;
  max-width:170px;
    height:250px;
    border-radius:10px;
    position:relative;
    h5{
        height: 20px;
        width: 100%;
        padding: 0;
        overflow: hidden;
        position: relative;
        text-align:start;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p{
        text-align:start;
        color:#6E6E77;
        margin-top:-14px;
    }
    a{
        width:100%;
        height:220px;
        position:absolute;
        top:0;
        left:0;
        background:#000000cc;
     display:flex;
     justify-content:center;
     align-items:center;
     flex-direction:column;
     transition:0.5s ease;
     opacity:0;
        z-index:100000;
        color:white;
        h4{
            border-radius:100%;
            border:3px solid #F5C518;
            padding:5px;
            position:absolute;
            top:70%;
            right:0;
        }
    }
}
.movie-section div img{
    width:100%;
    height:220px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
}
.movie-section div:hover a{
    opacity:1;
}
.newest-movies h2{
    width:100%;
    text-align:start;
    display:flex;
    font-size:18px;
    font-weight:600;
    align-items:center;
    color:#fffff;
gap:10px;
::before{
    content:"";
    width:7px;
    height:30px;
    background:#F5C518;
    display:block;
    border-radius:20px;
}
}
.collection{
    background:#101010;
    min-width:300px !important;
    height:170px !important;
    display:flex;
    align-items:start;
    justify-content:center;
    flex-direction:column;
    padding-left:5%;
    padding-right:5%;
    box-sizing:border-box;
    cursor:pointer;
    h4{
        text-align:start;
        height:30px;
    }
    h5{
        color:#B5B5BE;
        margin-top:0px;
    }
}
.genres-section{
    display:flex;
  
  
    width:100%;
    gap:30px;
    padding-top:40px;
    padding-left:3%;
    div{
        width:170px;
    }
}
.genre-box{
        width:170px !important;
        height:65px;
        border-radius:8px;
}
.actor-box img{
    width:160px !important;
    height:160px !important;
    border-radius:10px;
}
.actor-box h4{
    text-align:start;
    margin-top:-0px;
}
.actor-box h4:hover{
    color:#F5C518;
}
.actors{
    margin-left:-2% !important;
    margin-top:30px;
}
.noborder{
    border:3px solid #222222 !important;
}
@media screen and (max-width:700px){
    width:100%;
    .movie-section{
        display:flex;
        flex-wrap:nowrap;
        flex-shrink:0;
        overflow:scroll !important;
        height:auto;
        width:100%;
        padding-bottom:60px;
    }
    .newest-movies{
      width:100%;
    }
    .genres-section{
        display:none;
    }
}
@media screen and (max-width:470px){
    .poster-slider{
        gap:10px;
    }
    .poster-slider div{
        width:130px;
        h4{
            width:100px;
            font-size:14px;
        }
        p{
            margin-top:-5px;
            font-size:13px;
        }
    }
   .poster-slider div img{
        width:70px;
        height:70px;
    }
}

`
const FooterComponent=styled.section`
display:flex;
width:100%;
overflow:hidden;
flex-wrap:wrap;
flex-shrink:0;
gap:50px;
padding-left:7%;
box-sizing:border-box;
p{
    color:#93939A;
    text-align:start;
    cursor:pointer;
}
p:hover{
    color:#F5C518;
}
.icons i{
    color:white;
}
`
const Discover=styled.div`
display:flex;
width:90%;
flex-direction:column;
justify-content:start;
align-items:center;
overflow-x:hidden;
padding-left:3%;
padding-right:3%;
color:white;
a{
    color:white;
}
h2{
    text-align:start;
    width:100%;
}
.filtering{
    width:100%;
    display:flex;
    gap:30px;
}
select{
    width:100px;
    height:30px;
    background:transparent;
    color:white;
    border:none;
    outline:none;
}
select *{
    background:black;
    border:none;
    outline:none;
}
select option{
  padding:5px;
  font-size:18px;
  border:none !ipmortant;
}
.apply-button{
    background:#F5C518;
    width:120px;
    padding:5px;
    height:40px;
    border-radius:20px;
    cursor:pointer;
}
.discovery{
    padding-top:20px;
    padding-bottom:100px;
}
.pagination{
    color:white !important;
}
.pagination button{
    background:#F5C518;
}
.pathname{
    text-align:start;
    width:100%;
    color:#707079;
}
.discovery{
   display:flex;
   flex-shrink:0;
   flex-wrap:wrap;
    gap:10px;
    flex-shrink:0;
    flex-wrap:wrap;
    row-gap:60px;
    justify-content:center;
}
.discovery div{
  width:170px;
    height:250px;
    position:relative;
    margin:auto;
    a{
        position:absolute;
        width:100%;
        height:220px;
        background:#000000cc;
        top:0;
        left:0;
        z-index:100000;
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        opacity:0;
    }
    :hover a{
        opacity:1;
    }
   h5{ height: 20px;
    width: 100%;
    padding: 0;
    overflow: hidden;
    position: relative;
    text-align:start;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
   }
   p{
    text-align:start;
    color:#6E6E77;
    margin-top:-14px;
}
@media screen and (max-width:391px){
    width:140px;
    height:220px;
    margin-top:10px;
}
}
.discovery div img{
    width:100%;
    height:220px;
    border-top-right-radius:7px;
    border-top-left-radius:7px;
    @media screen and (max-width:391px){
        height:200px;
    }
}
@media screen and (max-width:433px){
    .filtering{
        display:none;
    }
    }
`
const Trendscomponent=styled.section`
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
box-sizing:border-box;
padding-left:3%;
overflow:hidden;
margin-top:-0%;
p{
    color:#A4B5BE;
    margin-top:-10px;
    font-size:15px;
    text-align:start;
}
img{
    width:auto;
    height:80%;
    border-radius:7px;
}
.trend-movie-info{
    width:100%;
    h4{
        text-align:start;
        margin-top:3px;
        color:#F7F7F7;
    }
    h4:hover{
        color:yellow;
    }
}
.alt-info{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    font-size:20px;
    margin-top:-20px;
}
.trend-movie-box{
    width:100%;
    display:flex;
    height:250px;
    gap:15px;
    cursor:pointer;
    box-sizing:border-box;
    padding-right:3%;
    h5{
        text-align:start;
        color:#AFB5BE;
    }
    .overview{
        height:55px;
        width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:no-space;
    }
}
`
const EmptyScreen=styled.div`
width:100%;
height:500px;
display:flex;
flex-direction:column;
align-items:flex-start;
padding-left:3%;
box-sizing:border-box;
div{
    display:flex;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
    h5{
        text-align:center;
    }
}
`
const Registerbox=styled.div`
width:100%;
padding-bottom:100px;
height:400px;
div{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:30px;
    width:100%;
}
input{
    background:#101010;
    color:white !important;
    width:60%;
    height:30px;
    padding:5px;
    border-radius:7px;
}
button{
    background:#F5C518;
    width:61%;
    padding:5px;
    height:50px;
    border-radius:7px;
    cursor:pointer;
    font-weight:bolder;
    border:none;
    outline:none;
}
`
const DetailPage=styled.div`
width:100%;
display:flex;
flex-direction:column;
overflow:hidden;
.poster{
    width:150px !important;
    height:200px;
    margin-top:2%;
}
button{
    width:150px;
    padding:5px;
    background:#303030;
    height:40px;
    border-radius:5px;
    border:none;
    outline:none;
}
button:hover{
    background:#F5C518;
}
.info{
    display:flex;
    gap:20px;
    @media screen and (max-width:600px){
        flex-direction:column;
    }
}
img{
    width:70% !important;
    border-radius:7px;
}
.single-detail{
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:flex-start;
    h3{
        text-align:start;
        width:100%;
    }
    p{
        width:70%;
        text-align:start;
        color:#737378;
    }
}
.icons{
    display:flex;
    width:100%;
    justify-content:flex-start;
    align-items:center;
    gap:30px;
    padding-top:10px;
    color:gray;
    box-sizing:border:box-box;
}
.comment{
    width:100%;
    height:auto;
    display:${props=>props.comment===true ? "flex" : "none"};
   padding-top:5%;
   color:#737378;
   box-sizing:border-box;
}
@media screen and (max-width:700px){
    img{
        width:100% !important;
    }
    p{
        width:100% !important;
    }
    .single-detail{
        padding-left:2%;
        box-sizing:border-box;
        padding-right:3%;
    }
}
@media screen and (max-width:600px){
    .poster{
        margin-top:-17%;
        margin-left:2%;
    }
}
@media screen and (max-width:400px){
    .poster{
width:120px !important;
height:160px !important;
    }
}
`
export {Head,Content,HomeScreen,FooterComponent,Discover,Trendscomponent,EmptyScreen,Registerbox,DetailPage}