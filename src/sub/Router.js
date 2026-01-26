import React from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom';


function Router(props) {
  
  const productId = useParams.productId;//파라미터 생성
  //예) board.php?id=250

  const location = useLocation(); //url주소
  const navigate = useNavigate(); //이전, 다음

  return (
    <main>
      <section>
        <h3>리액트 라우터 상세 설명 - 서브 페이지</h3>
        <p>✨ Route = 페이지이동</p>
        <p>✨ 라우팅이란? 사용자가 요청한 url에 따라 해당 url주소로 페이지를 이동하는 것이다.</p>
        <p>✨ 리액트에서는 route를 사용하기 위해 npm i react-router-dom 패키지를 설치해야 한다.</p>
        <p>✨ 리액트는 SPA(Single Page Application)방식으로서 기존의 MPA(Multi Page Application)방식에서는 여러개의 페이지를 사용하여 새로운 페이지를 로드하는 방식이였으나, 리액트에서는 새로운 페이지를 로딩하지 않고, 하나의 페이지(콤포넌트)안에서 필요한 데이터만 로딩하여 출력하는 형태를 가지고 있다.</p>
        <p>✨ React-Router-Dom은 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리이다.</p>
        <br />

        <h3>1. 리액트 라우터(React Router)</h3>
        <ul>
          <li>- 사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트를 제공한다.</li>
          <li>- 가장 많이 사용하는 라우터 콤포넌트는 BrowerRouter, HashRouter이다.</li>
          <li>- BrowerRouter : html5를 지원하는 브라우저의 주소를 감지</li>
          <li>- HashRouter : hash주소를 감지</li>
          <li>- 설치시 npm i react-router-dom 명령어로 설치하고 프로젝트 시작</li>
        </ul>
        <br />

        <h3>2. 리액트 라우터 관련태그</h3>
        <ul>
          <li>- BrowerRouter : 컴포넌트를 감싸는 영역으로 주로 메뉴나 헤더를 감싼다.</li>
          <li>- 여러 Route를 감싸서 그중에 규칙이 일치하는 라우트 단 하나를 렌더링 시키는 역할</li>
          <li>- Route : path속성에 경로, element속성에 콤포넌트를 넣어주고 여러 라우팅을 매칭하고 싶은 경우에 url뒤에 '*'를 사용.</li>
          <li>- Link = html5의 a태그와 같다. 미리보기시 a태그로 변경됨.</li>
        </ul>
        <br />

        <h3>3. 결과</h3>
        <p>{productId}번 페이지입니다.</p>
        <ul>
          <li>- hash : {location.hash}</li>
          <li>- pathname : {location.pathname}</li>
          <li>- search : {location.search}</li>
          <li>- state : {location.state}</li>
          <li>- key : {location.key}</li>
        </ul>
        <br />

        <p>✨ 4. useNavigate를 사용하여 페이지 버튼 만들기</p>
        <ul>
          <li><button onClick={()=>navigate(-2)}>뒤로 2페이지 이동</button></li>
          <li><button onClick={()=>navigate(-1)}>뒤로 1페이지 이동</button></li>
          <li><button onClick={()=>navigate(1)}>앞으로 1페이지 이동</button></li>
          <li><button onClick={()=>navigate(2)}>앞으로 2페이지 이동</button></li>
          <li><button onClick={()=>navigate('/movie202601/')}>첫페이지</button></li>
        </ul>

        <br />

        <h3>✨ github는 홈으로 이동시 https://id.github.io/로 기본 이동하게 되는데 사용자가 만든 레포지토리명을 기본 루트경로로 설정을 해야 함.</h3>
        <p>
          1. 헤더 콤포넌트에서 h1 주소 변경 Link to='/movie202601/'
        </p>

        <p>
          2. Router콤포넌트에서 아래 주소 설정
          button onClick={()=>navigate('/movie202601/')}
        </p>

        <p>
          3. Navigation콤포넌트에서
          Link to='/movie202601/' title="홈으로" Home
          Link to='/movie202601/api' title="영화api 페이지"
          Link to='/movie202601/contact' title="문의하기"
          Link to='/movie202601/router' title="리액트에서 라우터 설정 방법과 활용"
        </p>

        <br /><br />
      </section>
    </main>
  );
}

export default Router;