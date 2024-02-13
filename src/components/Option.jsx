import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Option.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState] = useContext(QuizContext);

  const isCorrect = quizState.answerSelected && option === answer;
  const isWrong = quizState.answerSelected && option !== answer;

  const optionClasses = [
    "option",
    isCorrect ? "correct" : "",
    isWrong ? "wrong" : "",
    hide ? "hide" : "",
  ].join(" ");

  return (
    <div onClick={() => selectOption()} className={optionClasses}>
      <p>{option}</p>
    </div>
  );
};

export default Option;
