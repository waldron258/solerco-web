import * as Yup from "yup";

export const validateYupSchema = (validationSchema: Yup.ObjectShape) =>
  Yup.object(validationSchema);

export const requiredV = Yup.string()
  .max(100, "¡No puede ser mayor a 100 caracteres!")
  .required("¡Este campo es requerido!");

export const emailV = Yup.string()
  .email("Esta dirección de correo no es válida.")
  .max(100, "¡Máximo 100 caracteres!")
  .required("¡Correo requerido!");

export const passwordV = Yup.string()
  .max(100, "¡No puede ser mayor a 100 caracteres!")
  .required("¡Contraseña requerida!");

export const passwordConfirmationV = Yup.string()
  .oneOf([Yup.ref("password"), undefined], "¡Las contraseñas deben coincidir!")
  .required("¡Confirmación de contraseña requerida!");
