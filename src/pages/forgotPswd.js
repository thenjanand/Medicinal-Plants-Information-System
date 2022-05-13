import React, { useState, useContext, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../components/FormsUI/Textfield";
import Button from "../components/FormsUI/Button";
import { auth } from "../firebase.js";
import { ToastContainer, toast } from "react-toastify";
import theme from "../theme";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../components/Authentication/AuthProvider";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import useMounted from '../hooks/useMounted'
import Divider from '@mui/material/Divider'

const INITIAL_FORM_STATE = {
    email: "",
};

const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
        .email("please enter a valid email")
        .required("required"),
});

const ForgotPswd = () => {

    const { user } = useContext(AuthContext);

    const mounted = useMounted()

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const notify = () => toast.success("Password reset link sent.");

    const handleSubmit = ({email}, onSubmitProps) => {
        frgtPswd(email);
    };

    async function frgtPswd(email) {
        try {
            setError("");
            setLoading(true);
            await auth.sendPasswordResetEmail(email,{url: 'https://aashu-007.github.io/MedicinalPlantsInformationSystem/login'}).then(res=>{
                setError("A link to reset your password has been sent to your email");
                notify()
            })
        } catch (err) {
            console.log(err.message);
            setError("There's no account with this email.");
        }
        if(mounted.current === true){
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user && user.emailVerified) {
            history.push("/");
        }
    }, [user, history]);

    return (
        <>
            <Container disableGutters maxWidth={false} sx={{ pt: 15 }}>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, pt: 4 }}
                    maxWidth={300}
                    m="auto"
                    border={1}
                    boxShadow={10}
                    bgcolor="white"
                    borderColor={theme.palette.primary.main}
                >
                    <Formik
                        initialValues={{ ...INITIAL_FORM_STATE }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={(values, onSubmitProps) => {
                            handleSubmit(values, onSubmitProps);
                        }}
                    >
                        <Form autoComplete="off">
                            <Grid container spacing={4}>
                                <Typography
                                    variant="h3"
                                    sx={{ pl: 4, pt: 2,fontSize:35 }}
                                    color="primary"
                                >
                                    Forgot Password
                                </Typography>
                                <Grid item xs={12}>
                                    {error && (
                                        <Alert
                                            severity="error"
                                            sx={{ mt: -3, mb: 1 }}
                                        >
                                            {error}
                                        </Alert>
                                    )}
                                    <Textfield
                                        name="email"
                                        label="Email"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        disabled={loading}
                                    >
                                        Submit
                                    </Button>
                                    <Divider sx={{pt:2}}>OR</Divider>
                                    <Typography
                                        variant="body2"
                                        color="text.primary"
                                        sx={{ m:"auto",pt:1 ,textAlign:"center",fontSize:16}}
                                    >
                                        <Link
                                            to="/login"
                                            style={{ color: "green",textDecoration:"none" }}
                                        >
                                            Login
                                        </Link>
                                    </Typography>
                                    <ToastContainer position="bottom-center" />
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Container>
        </>
    );
};

export default ForgotPswd;
