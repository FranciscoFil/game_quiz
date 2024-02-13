import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";
import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const getMessage = () => {
    if (quizState.score === quizState.questions.length) {
      return "Parabéns! Você acertou todas as perguntas!";
    } else if (quizState.score >= quizState.questions.length / 2) {
      return "Bom trabalho! Você acertou mais da metade das perguntas.";
    } else {
      return "Continue praticando. Você pode melhorar!";
    }
  };

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>{getMessage()}</p>
      <p>
        Pontuação: {quizState.score} de {quizState.questions.length} perguntas.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
