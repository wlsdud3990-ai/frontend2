import React from 'react';
import {Link} from 'react-router-dom';

function MovieDetail({
  id,
  year,
  title,
  summary,
  poster,
  genres,
  rating,
}) {
  //console.log(poster)
  return (
    <li>
      <Link to={`/movie/${id}`}>
      {/* <p>id : {id}</p> */}
      <img
        src={poster}
        alt={title}
        // style={{ width: '200px' }}
      />
      <h3 className="movie_title">
      {title}
      </h3>
      
      <p className="movie_year"><b>출시년도</b> : {year}</p>
      <p className="movie_genres"><b>장르&nbsp;</b>     : {genres?.join(', ')}</p>
      <p><b>줄거리</b> : {summary.slice(0,180)}...</p>
      <p className="rating"><b>평점</b> : {rating}</p>
      </Link>
    </li>
  );
}

export default MovieDetail;