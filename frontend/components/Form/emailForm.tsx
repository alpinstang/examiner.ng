import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import emailRegEx from "../../utils/emailRegex";
import composeValidators from "../../utils/composeValidators";
import WrappedTextField from "./WrappedtextField";

const EmailForm = (props: any) => {
  const { getForm } = props;

  const isValidEmail = (value: any) =>
    emailRegEx.test(value) ? undefined : "Not Valid Email";
  const required = (value: any) => (value ? undefined : "Required");
  const validators = composeValidators(required, isValidEmail);

  const handleSubmit = async (formValues: any) => {
    getForm(formValues);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              fullWidth
              name="email"
              component={WrappedTextField}
              type="email"
              label="Email"
              validate={validators}
            />

            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  );
};

EmailForm.propTypes = {
  getForm: PropTypes.func,
};

export default EmailForm;
