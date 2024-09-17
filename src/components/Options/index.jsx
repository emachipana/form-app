import { FormGroup, Input, Label } from "reactstrap";
import { List } from "./styles";
import { Field } from "formik";
import onChange from "./onChange";

function Options({ question, setFieldValue, error, touched, secondQuestion, setSecondDisabled, setIsDisabled }) {
  return (
    <List>
      { question.options.map((option, index) => (
          <FormGroup check key={index}>
            <Label check>
              <Field
                type="radio"
                name={question.id}
                value={option}
                onChange={(e) => 
                  onChange(e, question, setFieldValue, secondQuestion, setSecondDisabled, setIsDisabled)
                }
                as={Input}
                invalid={error[question.id] && touched[question.id]}
              />
              { option }
            </Label>
          </FormGroup>
        )) }
    </List> 
  );
}

export default Options;
