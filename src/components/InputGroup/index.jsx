import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { Container, Title } from "../Question/styles";

function InputGroup({ id, value, label, placeholder, handleChange, handleBlur, error, isTouched }) {
  return (
    <Container>
      <FormGroup>
        <Label htmlFor={id}><Title>{label}</Title></Label>
        <Input 
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          invalid={error && isTouched}
        />
        {
          error && isTouched && <FormFeedback>{ error }</FormFeedback>
        }
      </FormGroup>
    </Container>
  );
}

export default InputGroup;
