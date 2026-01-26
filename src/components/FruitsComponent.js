import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FruitsComponent() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    color: '',
    country: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:9070/fruits', form)
      .then(() => {
        alert('상품이 정상적으로 등록 완료 되었습니다.');
        navigate('/fruits');
      })
      .catch(err => console.log(err));
  };

  return (
    <main>
      <section>
        <h2>Fruits DB 입력 페이지</h2>

        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">과일명</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="price">가격</label>
            <input
              id="price"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="color">색상</label>
            <input
              id="color"
              name="color"
              value={form.color}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="country">원산지</label>
            <input
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              required
            />
          </p>

          <button type="submit">신규상품 등록하기</button>
        </form>
      </section>
    </main>
  );
}

export default FruitsComponent;
