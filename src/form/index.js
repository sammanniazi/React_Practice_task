import React from "react";
import { Formik, Form, Field } from "formik";
import { Box,Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import * as Yup from 'yup';

const StyledContainer = styled("div")({
  margin: "50px auto 0",
  maxWidth: "1200px",
 textAlign:'center',
 backgroundColor: '#f2f2f2',
 border: '5px  ',
 borderRadius: '8px',
  padding: '16px',
});




const RegistrationForm = () => {
  return (

    <StyledContainer>
    <Box
      
    >
      <h1>Registration Form</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Field
              as={TextField}
              name="name"
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ width: '75%' }}
              error={!!errors.name}
              helperText={errors.name}
              justifyContent="center"
            />

            <Field
              as={TextField}
              name="email"
              label="Email Address"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ width: '75%' }}
              error={!!errors.email}
              helperText={errors.email}
            />

            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{ width: '75%' }}
              error={!!errors.password}
              helperText={errors.password}
            />

            <Box >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                sx={{ marginTop: '16px' }}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      </Box>
      </StyledContainer>
  );
};




export default RegistrationForm;
