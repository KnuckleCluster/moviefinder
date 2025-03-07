import React from 'react'

function MovieCard({ movie }) {
  return (
    <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : '404.png'} alt={movie.Title} />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard