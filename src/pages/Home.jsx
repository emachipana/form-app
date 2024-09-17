import { useState } from "react";
import Question from "../components/Question";
import { useData } from "../context/data";
import { Container, Form } from "./styles";
import { Formik } from "formik";
import { Button } from "reactstrap";

function Home() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSecondDisabled, setIsSecondDisabled] = useState(false);
  const { questions } = useData();

  const initialValues = questions.reduce((values, question) => {
    values[question.id] = "";
    return values;
  }, {});

  const validate = (values) => {
    const errors = {};

    questions.forEach(question => {
      if(!values[question.id]) errors[question.id] = "Este campo no puede ir vacio";
    });

    return errors;
  }

  const onSubmit = async (values) => {
    console.log(values);
  }

  return (
    <Container>
      <h1>Hello from home</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ 
          errors, 
          touched, 
          isValid, 
          handleSubmit,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <Question
                key={index}
                question={question}
                position={index + 1}
                isDisabled={isDisabled}
                error={errors}
                touched={touched}
                isSecondDisabled={isSecondDisabled}
                setFieldValue={setFieldValue}
                setSecondDisabled={setIsSecondDisabled}
                setIsDisabled={setIsDisabled}
                secondQuestion={questions.find(question => question.question === "¿Desea actualizar su software?")}
              />
            ))}
            <Button
              color="primary"
              disabled={!isValid}
              type="submit"
            >
              Enviar encuesta
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Home;
