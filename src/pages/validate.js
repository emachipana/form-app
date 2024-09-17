export const validate = (values, questions) => {
  const errors = {};

  if(!values.rSocial) errors.rSocial = "Este campo es obligatorio"
  
  if(values.ruc && isNaN(values.ruc * 1)) errors.ruc = "Solo se aceptan números";

  if(!values.email) {
    errors.email = "Este campo es obligatorio";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
    errors.email = "El formato es incorrecto"
  }

  questions.forEach(question => {
    if(!values[question.id]) errors[question.id] = "Este campo es obligatorio";
  });

  return errors;
}
