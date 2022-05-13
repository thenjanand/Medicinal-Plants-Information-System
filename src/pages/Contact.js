import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../components/FormsUI/Textfield";
import Button from "../components/FormsUI/Button";
import firebase from "../firebase.js";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../theme';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Footer from '../components/Footer';

const INITIAL_FORM_STATE = {
    FName: "",
    LName: "",
    Email: "",
    Message: "",
};

const FORM_VALIDATION = Yup.object().shape({
    FName: Yup.string().min(3, "Too Short!").required("required"),
    LName: Yup.string().min(3, "Too Short!").required("required"),
    Email: Yup.string().email('Please enter a valid email').required("required"),
    Message: Yup.string().min(10, "Too Short!").required("required"),
});

const notify = () => toast.success("Successfully sent.");

const handleSendMsg = (values, onSubmitProps) => {
    const firestore = firebase.database().ref("/Contact");
    firestore.push(values);
    // console.log("Form data", values);
    // console.log("Submit props", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    // window.location.reload();
    notify();
};



const Contact = () => {

    return (
        <>
            <Container
                style={{ backgroundColor: theme.palette.primary.optional }}
                disableGutters
                maxWidth={false}
            >
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 2, boxShadow: 1, py: 8 }}
                    maxWidth={800}
                    m="auto"
                    bgcolor="white"
                >
                    <Typography
                        variant="h2"
                        sx={{ flexGrow: 1 }}
                        color="primary"
                    >
                        Contact Us
                    </Typography>
                    <Divider>
                        <Chip label="Get in Touch" />
                    </Divider>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                            py: 2,
                            flexGrow: 1,
                            
                        }}
                    >
                        We'd love to hear from you!
                    </Typography>
                    <Formik
                        initialValues={{ ...INITIAL_FORM_STATE }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={(values, onSubmitProps) => {
                            handleSendMsg(values, onSubmitProps);
                        }}
                    >
                        <Form autoComplete="off">
                            <Grid container spacing={4}>
                                <Grid item xs={6}>
                                    <Textfield
                                        name="FName"
                                        label="First Name"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Textfield
                                        name="LName"
                                        label="Last Name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Textfield
                                        name="Email"
                                        label="Email Address"
                                    />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <Textfield
                                        name="Message"
                                        fullWidth
                                        placeholder="Enter your message"
                                        multiline
                                        rows={6}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button>Send</Button>
                                    <ToastContainer position="bottom-center"/>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Container>
             <Footer/>
        </>
    );
};

export default Contact;
