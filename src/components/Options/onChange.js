function onChange(event, question, setFieldValue, secondQuestion, setSecondDisabled, setIsDisabled) {
  const answer = event.target.value;
  setFieldValue(question.id, answer);
  
  const validation = (que, res) => question.question === que && answer === res;
  if(validation("¿Tiene un software en su empresa?", "No")) {
    setSecondDisabled(true);
    setFieldValue(secondQuestion.id, "-");
    return setIsDisabled(false);
  }else if(validation("¿Tiene un software en su empresa?", "Si")) {
    setSecondDisabled(false)
  }

  if(validation("¿Desea actualizar su software?", "No")) {
    setIsDisabled(true)
  }else if(validation("¿Desea actualizar su software?", "Si")) {
    setIsDisabled(false);
  }
}

export default onChange;
