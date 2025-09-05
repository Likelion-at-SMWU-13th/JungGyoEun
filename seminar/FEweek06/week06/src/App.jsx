import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuizPage />} />
          <Route path="quiz/:quizId" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
