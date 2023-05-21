import { Link,  Route, Routes } from 'react-router-dom';
import {useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import MovieList from './movielist.js';
import AddMovie from './AddMovies.js';
import NavBar from './NavBar.js';
import YoutubeEmbed from "./YoutubeEmbed";
function App() {
  const [word,setWord]=useState("")
  const [rating,setRating]=useState(1)
  const [movies, setMovies] = useState([
    {title:'Avengers',posterUrl:'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
                            ,rate:'5',description:'very good',trailer: 'eOrNdBpGMv' }
    ,{title:'Batman',posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFRbVwjbqTAHYzt3HBBKaOZMR3ZBuuh4Zug&usqp=CAU'
    ,rate:'3',description:'very good',trailer: 'mqqft2x_Aa4'}
    ,{title:'Superman',posterUrl:'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87620/89055/Batman_V_Superman_Dawn_Of_Justice_style_D_Superman_advance_buy_original_movie_posters_at_starstills__98108.1455207109.jpg?c=2'
    ,rate:'4',description:'very good',trailer: 'T6DJcgm3wNY'},{title:'Taken',posterUrl:'https://lumiere-a.akamaihd.net/v1/images/image_efeee89d.jpeg?region=0%2C0%2C800%2C1200'
    ,rate:'2',description:'very good',trailer: 'XK9zL0ze9O4'}
  ]);
  
  const handleAdd = (newMovie)=>{
    setMovies([...movies,newMovie]);
  }
const getData=(keyword)=>{
  setWord(keyword)}
  const dataRate=(rate)=>{
    setRating(rate)
  }



  return (
    
    <div className="App">
      <Link to="home"> <h1>go home </h1></Link>
      <NavBar getData={getData} dataRate={dataRate}/>
      <AddMovie handleAdd={handleAdd}/>
       <MovieList movies={movies.filter((movie)=> movie.rate>= rating && movie.title.toLowerCase().includes(word.trim().toLowerCase()))} />
       
      <Routes><Route path="home" element={<App />} /></Routes>
    </div>
  );
}

export default App;
