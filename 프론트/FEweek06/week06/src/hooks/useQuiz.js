import { useState, useRef, useCallback } from "react"; // ① useRef import 하기

export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const inputRef = useRef(null); // ② inputRef 객체로 useRef( ) 생성

  const handleSubmit = useCallback(() => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [currentQuestion, userAnswer, answers, questions.length]);

  const handleReset = useCallback(() => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setAnswers([]);
    inputRef.current.value = ""; // ④-2. input 내용 지우기
    inputRef.current.focus(); // ④-3. input에 포커스 하기
  }, []);

  return {
    currentQuestion,
    userAnswer,
    setUserAnswer,
    answers,
    inputRef,
    handleSubmit,
    handleReset,
  };
};
