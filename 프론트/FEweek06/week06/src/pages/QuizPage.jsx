import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../hooks/useQuiz";

const QuizApp = () => {
  const { quizId } = useParams();

  // quizId에 따른 문제 세트 선택
  const getQuestions = (id) => {
    const questionSets = {
      1: [
        { question: "React에서 상태를 관리하는 Hook은?", answer: "useState" },
        {
          question: "컴포넌트가 마운트될 때 실행되는 Hook은?",
          answer: "useEffect",
        },
        { question: "DOM에 직접 접근할 때 사용하는 Hook은?", answer: "useRef" },
      ],
      2: [
        { question: "JavaScript에서 배열을 순회하는 메서드는?", answer: "map" },
        { question: "비동기 처리를 위한 키워드는?", answer: "async" },
        {
          question: "변수를 선언하는 키워드 중 재할당이 불가능한 것은?",
          answer: "const",
        },
      ],
      3: [
        { question: "HTTP 상태 코드 중 성공을 나타내는 것은?", answer: "200" },
        { question: "CSS에서 요소를 중앙 정렬하는 속성은?", answer: "center" },
        { question: "HTML에서 제목을 나타내는 태그는?", answer: "h1" },
      ],
    };

    return (
      questionSets[id] || [
        { question: "React에서 상태를 관리하는 Hook은?", answer: "useState" },
        {
          question: "컴포넌트가 마운트될 때 실행되는 Hook은?",
          answer: "useEffect",
        },
        { question: "DOM에 직접 접근할 때 사용하는 Hook은?", answer: "useRef" },
      ]
    );
  };

  const questions = getQuestions(quizId);

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
          ref={inputRef}
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
