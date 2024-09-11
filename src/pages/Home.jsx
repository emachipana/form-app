import { useState } from "react";
import Question from "../components/Question";
import { useData } from "../context/data";
import { Container } from "./styles";

function Home() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { questions } = useData();

  return (
    <Container>
      <h1>Hello from home</h1>
      {questions.map((question, index) => (
        <Question 
          key={index}
          question={question}
          position={index + 1}
          isDisabled={isDisabled}
        />
      ))}
    </Container>
  );
}

export default Home;
