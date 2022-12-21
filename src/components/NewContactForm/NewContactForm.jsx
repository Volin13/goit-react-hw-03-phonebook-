import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import ErrorMsg from '../NewContactForm/NewContactForm.styled';
import Wrapper from '../Wrapper/Wrapper.styled';

const schema = yup.object().shape({
  name: yup.string().min(3, 'Its too short.').required('Type your name please'),
  number: yup
    .string()
    .matches(
      /[0-9]{3}[ .-][0-9]{2}[ .-][0-9]{2}/,
      'Invalid format. It should be 999-99-99'
    )
    .max(9, 'Invalid format. It should be 999-99-99')
    .required('Please add a phone number'),
});

const INITIAL_FORM_VALUES = { name: '', number: '' };

function NewContactForm({ addContact }) {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    resetForm();
    addContact(values);
    setSubmitting(false);
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_FORM_VALUES}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Wrapper>
            <Field
              placeholder="Name"
              className="inputStyled"
              type="text"
              name="name"
              id="standard-basic"
              label="Name"
            />
            <ErrorMsg name="name" component="div" />
          </Wrapper>
          <Wrapper>
            <Field
              placeholder="Phone number"
              className="inputStyled"
              type="text"
              name="number"
              id="standard-basic"
              label="Phone number (expample 222-99-66)"
            />
            <ErrorMsg name="number" />
          </Wrapper>
          <Wrapper>
            <button
              className="styledBtn"
              type="submit"
              sx={{ display: 'block' }}
            >
              Add to phone book
            </button>
          </Wrapper>
        </Form>
      </Formik>
    </div>
  );
}

NewContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default NewContactForm;
