import { createContext, useState } from 'react';

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [noodleCount, setNoodleCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [bookstoreCount, setBookStoreCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  // 🔔 알림 상태
  const [alert, setAlert] = useState({
    message: '',
    type: '' // success | error
  });

  // 🔔 알림 표시 함수 (전역)
  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });

    // 3초 후 자동으로 알림 제거
    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        bookstoreCount, noodleCount, setNoodleCount, questionCount, setQuestionCount, serCount, setUserCount,
        showAlert // ✅ 반드시 내려줘야 함
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
