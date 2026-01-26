import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/movie.css';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(
          `https://yts.lt/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await res.json();
        setMovie(json.data.movie);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie();
  }, [id]);

  if (!movie) {
    return <div className="loading_bar"><img
      src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`}
      // src={`${process.env.PUBLIC_URL}/images/loader.jpg`}
      alt="로딩중"
      // />):'영화목록 출력하기'}
      /></div>;
  }

  return (
    <div className="movie_detail">
      <h3 className="movie_title">영화 상세보기</h3>
      <ul>
        {/* <li>ID : {id}</li> */}
        <li>이미지 : <img src={movie.large_cover_image} /></li>
        <li classNamd="movie_title">제목 : {movie.title}</li>
        <li className="movie_year">개봉년도 : {movie.year}</li>
        <li>줄거리 : {movie.summary}</li>
        <li className="rating">평점 : ⭐ {movie.rating}</li>
      </ul>
      <button
        className="back_button"
        onClick={() => navigate(-1)}
      >
        ← 이전 페이지
      </button>
    </div>
  );
}

export default Detail;
