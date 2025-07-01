import { Link } from "react-router-dom";
import { useQuiz } from "../hooks/useQuiz"; // ① useRef import 하기

const QuizApp = () => {
  const questions = [
    { question: "React에서 상태를 관리하는 Hook은?", answer: "useState" },
    {
      question: "컴포넌트가 마운트될 때 실행되는 Hook은?",
      answer: "useEffect",
    },
    { question: "DOM에 직접 접근할 때 사용하는 Hook은?", answer: "useRef" },
  ];

  const {
    currentQuestion,
    userAnswer,
    setUserAnswer,
    answers,
    inputRef,
    handleSubmit,
    handleReset,
  } = useQuiz(questions);

  return (
    <div className="quiz-container">
      <h1>🦁 React Hooks Quiz Time</h1>
      <div className="question-section">
        <h2>문제 {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].question}</p>
        <input
          ref={inputRef} // ③ ref 속성에 연결하기
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="답을 입력하세요"
          className="answer-input"
        />
        <div className="button-group">
          {currentQuestion < questions.length - 1 ? (
            <button onClick={handleSubmit} className="submit-btn">
              {currentQuestion < questions.length - 1 ? "다음 문제" : "완료"}
            </button>
          ) : (
            <Link to="/result" className="link-btn">
              결과 보기
            </Link>
          )}
          <button onClick={handleReset} className="reset-btn">
            초기화
          </button>
        </div>
      </div>
      {currentQuestion > 0 && (
        <div className="last-answer">
          <p>최근 입력한 답: {answers[currentQuestion - 1]}</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
