import { FormFeedback } from "reactstrap";
import { Block, Container, Title } from "./styles";
import { ErrorMessage } from "formik";
import Options from "../Options";

function Question({ question, position, isDisabled, isSecondDisabled, error, touched, setFieldValue, setSecondDisabled, setIsDisabled, secondQuestion }) {
  return (
    <Container>
      { (isSecondDisabled && question.question === "¿Desea actualizar su software?" && <Block />) || (isDisabled && !question.isToFilter && <Block />) }
      <Title>
        {position}.- {question.question}
      </Title>
      <Options 
        question={question}
        error={error}
        secondQuestion={secondQuestion}
        setFieldValue={setFieldValue}
        setSecondDisabled={setSecondDisabled}
        touched={touched}
        setIsDisabled={setIsDisabled}
      />
      <ErrorMessage 
        name={question.id}
        component={FormFeedback}
        className="d-block"
      />
    </Container>
  );
}

export default Question;
