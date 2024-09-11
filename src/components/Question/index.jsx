import { Block, Container } from "./styles";

function Question({ question, position, isDisabled }) {
  return (
    <Container>
      { isDisabled && <Block /> }
      {position}.- {question.question}
    </Container>
  );
}

export default Question;
