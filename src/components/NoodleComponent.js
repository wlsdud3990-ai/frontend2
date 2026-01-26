import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../AlertContext'; // ✅ 추가

function NoodleComponent() {
  const navigate = useNavigate();

  // ✅ AlertContext에서 showAlert 가져오기
  const { showAlert } = useContext(AlertContext);

  const [form, setForm] = useState({
    name: '',
    company: '',
    kind: '',
    price: '',
    e_date: ''
  });

  // 입력값 변경 시 state 업데이트
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 등록 버튼 클릭
  const handleSubmit = () => {
    axios.post('http://localhost:9070/noodle', form)
      .then(() => {
        showAlert('등록되었습니다', 'success'); // ✅ 전역 알림
        navigate('/noodle'); // ✅ 목록 페이지로 이동
      })
      .catch(() => {
        showAlert('등록에 실패했습니다', 'error');
      });
  }; // ✅ 여기 닫힘 중요!!

  return (
    <main>
      <h2>누들 등록</h2>

      <input name="name" placeholder="이름" onChange={handleChange} /><br />
      <input name="company" placeholder="회사" onChange={handleChange} /><br />
      <input name="kind" placeholder="종류" onChange={handleChange} /><br />
      <input name="price" placeholder="가격" onChange={handleChange} /><br />
      <input name="e_date" placeholder="유통기한" onChange={handleChange} /><br />

      <button onClick={handleSubmit}>등록</button>
    </main>
  );
}

export default NoodleComponent;
