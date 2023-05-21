import React, { Children } from "react";
import StarRatingComponent from 'react-star-rating-component';
import YoutubeEmbed from "./YoutubeEmbed";
import { Link, Route, Routes } from 'react-router-dom';

const Trailor =(trailer,desc) =>{
      return(<div>
      <YoutubeEmbed embedId="${trailer}" />
      <p>description of this movie : ${desc}</p>
      </div>)
};


const Movie = ( {movie} ) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <div>
        <Link to='trailor'>
        <img
          width="200"
          alt={`The movie titled: ${movie.title}`}
          src={movie.posterUrl}
        />
         </Link> 
      </div>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
      
      <p>{movie.description}</p>

      <Routes><Route path="trailor" element={<Trailor trailer={movie.Trailor} desc={movie.description}  />} /> </Routes>
    </div>
  );
};


export default Movie;