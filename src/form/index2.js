import React from "react";
import { Formik, Form, Field } from "formik";
import { Box, Button, TextField, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";
import * as Yup from 'yup';

const StyledContainer = styled("div")({
    margin: "50px auto 0",
    maxWidth: "1200px",
    textAlign: 'center',
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
            <h1>Create Post</h1>
            <Formik
                initialValues={{ id: '', title: '', body: '' }}
                validationSchema={Yup.object({
                    id: Yup.number()
                        .required('id is required'),

                    title: Yup.string().required("Title is required"),
                    body: Yup.string().required("Body is required"),

                })}
                onSubmit={(values, { setSubmitting }) => {

                    console.log('Submitting form:', values);
                    fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('Data received:', data);
                            alert('Post created successfully');
                            setSubmitting(false);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('Failed to create post');
                            setSubmitting(false);
                        });
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                    {console.log('here errros', errors)}
                        <Field
                            as={TextField}
                            name="id"
                            label="ID"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            sx={{ width: '75%' }}
                            error={!!errors.id}

                        />

                        <Field
                            as={TextField}
                            name="title"
                            label="Title"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            sx={{ width: '75%' }}
                            error={!!errors.title}

                        />

                        <Field
                            rows={1}
                         
                            style={{ width: '75%' }}
                            placeholder="enter your text"
                            name="body"

                            variant="outlined"
                            margin="normal"

                            sx={{ width: '75%' }}
                            error={!!errors.body}


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
