import React from 'react';
import "./Movies.css";
import ReactStars from 'react-rating-stars-component';


function MoviesCard({movie}) {
  return (
    <div className="card">
          <div className="image">
            <img src= {movie.posterurl} />
          </div>
          <div className="details" >
            <div className="center" style={{padding:"20px"}}>
              <h1>{movie.name}</h1>
              <p>{movie.description}</p>
              <ReactStars classNames="star"
                count={5}
                size={24}
                activeColor="#ffd700"
                value={movie.rating}
                edit={false}
                margin= "0 auto"
                />
        
            </div>
          </div>
        </div>
      
    )
  }

export default MoviesCard