// Login.js
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');      // 에러 메시지
  const [message, setMessage] = useState('');  // 성공 메시지
  const {setUserCount} = useContext(AlertContext);

  // 입력폼 변경 시 state 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
    setMessage('');
  };

  // 로그인 버튼 클릭 시
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!form.username || !form.password) {
      setError('아이디 또는 비밀번호를 입력하세요.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:9070/login', {
        username: form.username,
        password: form.password
      });
  
      // 로그인 성공 시 alert로 표시
      alert(`로그인 성공! 환영합니다, ${form.username}님.`);
  
      // 성공 메시지 화면에도 표시 (선택 사항)
      setMessage(`로그인 성공! 환영합니다, ${form.username}님.`);
      setError('');
  
      // JWT 토큰 저장
      localStorage.setItem('token', response.data.token);
  
      // 폼 초기화
      setForm({ username: '', password: '' });
  
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('로그인 실패: 알 수 없는 오류');
      }
      setMessage('');
    }
  };


  return (
    <main className="login-page">
      <section>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="username">아이디 : </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디"
              value={form.username}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor="password">패스워드 : </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="패스워드"
              value={form.password}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <input type="submit" value="로그인" />
          </p>

            {/* 메시지 출력 */}
            {message && <p style={{ color: 'green' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="auth-links">
            <Link to="/id_search">아이디 찾기</Link>
            <span>|</span>
            <Link to="/pw_search">비번 찾기</Link>
            <span>|</span>
            <Link to="/join">회원가입</Link>
          </div>
        </form>

        <dl>
          <dt>* 로그인 구현 전체 구성</dt>
          <dd>1. 프론트엔드(React) : 로그인 폼 작성, 로그인 버튼 클릭 시 서버에 인증 요청</dd>
          <dd>2. 백엔드(Node.js + Express) : 로그인 처리, JWT 토큰 발급</dd>
          <dd>3. 데이터베이스(MYSQL) : DB 입/출력</dd>
          <dd>4. 보안 : 비밀번호 bcrypt 암호화, JWT로 인증 유지</dd>
        </dl>

        <div>
          <p>DB 설계(users)</p>
          <pre>
{`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at DATE
);

INSERT INTO users (id, username, password, created_at) VALUES
(1, 'jeon', '1234', '2025-05-26'),
(2, 'jeon1', '1234', '2025-05-26'),
(3, 'jeon2', '1234', '2025-05-26'),
(4, 'jeon3', '1234', '2025-05-26'),
(5, 'jeon4', '1234', '2025-05-26');

-- UI 화면 설계: 로그인 폼, 회원가입 폼 구현`}
          </pre>
        </div>
      </section>
    </main>
  );
}

export default Login;
