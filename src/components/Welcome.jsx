import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Welcome.css";
import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo ao Quiz!</h2>
      <p>Escolha uma categoria e clique no botão abaixo para começar:</p>
      {/* Adicione um botão de seleção de categoria, se aplicável */}
      {/* <CategorySelector categories={quizState.categories} onSelect={selectedCategory => dispatch({ type: "SELECT_CATEGORY", payload: selectedCategory })} /> */}
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
