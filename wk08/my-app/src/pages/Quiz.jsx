import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { quizId } = useParams();
  useEffect(() => {
    fetch(`http://asldjasld/api/quiz/${quizId}`)
      .then(resp => resp.json())
      .then(data => {});
  }, [quizId]);

  return <div>{quizId}</div>;
};

export default Quiz;
