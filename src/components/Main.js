import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieDetail from '../sub/MovieDetail';
import '../css/movie.css';

function Main(props) {
  //1. 상태관리
  const [isLoading, setIsLoading] = useState(true); //로딩바
  const [movies, setMovies] = useState([]); //json데이터

  //2. 영화데이터 로딩하기
  //const getMovies = async() => {
  //   //방법 1.  방법 2.는 FIGMA에 정리
  //   const json = await(
  //     await fetch(
  //       "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
  //     )
  //   ).json();
  //   setMovies(json.data.movies); //상태변수에 데이터 배열값 담기
  //   setIsLoading(false); //데이터 로딩시  상태변수는 false임
  // };

  // //3. 라이프사이클에서 데이터를 한번만 로딩한다.
  // useEffect(()=>{
  //   getMovies();
  // },[]);

  //방법2. 영화데이터 가져오기
  const getMovies = async () => {
    try{
      const{
        data:{
          data:{movies},
        },
      }= await axios.get(
        'https://yts.lt/api/v2/list_movies.json?sort_by=rating'
      );

      console.log(movies) //index.js의 React.StrictMode로 인해서 2번 출력됨(버그 미리 잡기를 위함. 배포시 한번만 출력됨. )

      setMovies(movies);
      setIsLoading(false);
    }catch(error){
      console.log('영화 데이터 로딩 오류 : ', error);
      setIsLoading(false);
    }
  };

  //componentDidMount 대체 함수
  useEffect(()=>{
    getMovies();
  },[]); //빈배열 - 아무것도 없는 경우  한번만 로딩함.

  //4. 콘솔창에 출력하여 확인
  console.log(movies);
  
  return (
    <main>
      {/* 삼항조건 연산자를 사용하여 isLoading값이 true/false값에 따라 화면변경하기 */}
      {isLoading?(<div className="loading_bar"><img
      src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`}
      // src={`${process.env.PUBLIC_URL}/images/loader.jpg`}
      alt="로딩중"
      // />):'영화목록 출력하기'}
      /></div>):(
        <section>
          <ul className="movie_List">
            {movies.map((movie)=>(
              // <li key={movie.id}>
              //   <p>영화 아이디 : {movie.id}</p>
              //   <p>출시연도 : {movie.year}</p>
              //   <p>영화제목 : {movie.title}</p>

              //   {/* 줄거리는 내용이 많기 때문에 중간에 생략기호(...) 나오게 한다. 
              //     .slice(0, 길이값)
              //   */}
              //   <p>영화줄거리 : {movie.summary.slice(0,200)}...</p>
              //   <p>영화포스터 이미지 : <img src={movie.large_cover_image} alt="" /></p>
              //   <p>장르 : {movie.genres}</p>
              //   <p>평점 : {movie.rating}</p>
              // </li>
              <MovieDetail 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.large_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

export default Main;