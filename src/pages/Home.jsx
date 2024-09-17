import { useState } from "react";
import Question from "../components/Question";
import { useData } from "../context/data";
import { Container, Form } from "./styles";
import { Formik } from "formik";
import { Button, Spinner } from "reactstrap";
import { getData } from "../services/sunat";
import { validate } from "./validate";
import InputGroup from "../components/InputGroup";
import apiFetch from "../services/apiFetch";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSecondDisabled, setIsSecondDisabled] = useState(false);
  const { questions } = useData();
  const navigate = useNavigate();

  let initialValues = questions.reduce((values, question) => {
    values[question.id] = "";
    return values;
  }, {});

  initialValues = {...initialValues, rSocial: "", ruc: "", email: ""};

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const body = {
        rSocial: values.rSocial,
        ruc: values.ruc,
        email: values.email
      }
      const company = await apiFetch("companies", { body });
      const data = Object.entries(values).filter(val => val[0] !== "email" && val[0] !== "ruc" && val[0] !== "rSocial");
      for(const [questionId, answer] of data) {
        const body = {
          questionId,
          answer,
          companyId: company.id
        }

        await apiFetch("answers", { body });
      }
      navigate("/success");
      setIsLoading(false);
    }catch(error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  const handleRucChange = async (name, event, setFieldValue) => {
    const ruc = event.target.value;
    setFieldValue(name, ruc);
    
    if(ruc.length === 11 && !isNaN(ruc * 1)) {
      const data = await getData(ruc);
      setFieldValue("rSocial", data.razonSocial || "");
    }
  }

  return (
    <Container>
      <h1>Hello from home</h1>
      <Formik
        initialValues={initialValues}
        validate={(values) => validate(values, questions)}
        onSubmit={onSubmit}
      >
        {({ 
          errors, 
          touched, 
          isValid,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputGroup
              id="ruc"
              label="RUC"
              value={values.ruc}
              placeholder="Ingresa tu ruc"
              error={errors.ruc}
              handleBlur={handleBlur}
              handleChange={(e) => handleRucChange("ruc", e, setFieldValue)}
              isTouched={touched.ruc}
            />
            <InputGroup
              id="rSocial"
              value={values.rSocial}
              label="Razón social"
              placeholder="Ingresa el nombre de tu empresa"
              error={errors.rSocial}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isTouched={touched.rSocial}
            />
            <InputGroup
              id="email"
              value={values.email}
              label="Correo"
              placeholder="Ingresa tu correo electronico"
              error={errors.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isTouched={touched.email}
            />
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
              disabled={!isValid || isLoading}
              type="submit"
            >
              {
                isLoading
                ? <>
                    <Spinner size="sm" />
                    {" "}
                    Enviando...
                  </>
                : "Enviar encuesta" 
              }
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Home;
