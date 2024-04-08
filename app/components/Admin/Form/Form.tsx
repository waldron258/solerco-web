"use client";

import { useFormik } from "formik";
import RegularButton from "../../atoms/Button/RegularButton";
import TextInput from "../../atoms/TextInput";
import {
  emailV,
  passwordV,
  validateYupSchema,
} from "@/app/lib/yup/validations";
import axios from "axios";

interface IForm {}

interface IFormikForm {
  email: string;
  password: string;
}

export default function Form(props: IForm) {
  const initialFormikValues: IFormikForm = {
    email: "",
    password: "",
  };

  const validationSchema = validateYupSchema({
    email: emailV,
    password: passwordV,
  });

  const handleSubmit = async (data: IFormikForm) => {
    const res = await axios.post("/api/login", data);
  };

  const formik = useFormik<IFormikForm>({
    initialValues: initialFormikValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const formikOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <TextInput
        label="Correo electónico"
        id="email"
        value={formik.values.email}
        onChange={formikOnChange}
        className="mb-4"
      />
      <TextInput
        label="Contraseña"
        id="password"
        value={formik.values.password}
        type="password"
        onChange={formikOnChange}
        className="mb-8"
      />
      <RegularButton
        variant="alternative"
        label="Ingresar"
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid}
        className="w-full"
      />
    </form>
  );
}
