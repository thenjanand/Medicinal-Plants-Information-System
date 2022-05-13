import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import theme from "../theme";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import devs from "../devs";
import Footer from '../components/Footer';

const About = () => {

    return (
        <>
            <Container
                style={{ backgroundColor: theme.palette.primary.optional }}
                disableGutters
                maxWidth={false}
            >
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 2, boxShadow: 1, pt: 8 }}
                    maxWidth={800}
                    m="auto"
                    bgcolor="white"
                >
                    <Typography
                        variant="h2"
                        sx={{ flexGrow: 1 }}
                        color="primary"
                    >
                        About
                    </Typography>
                    <Divider />
                    <Typography
                        variant="body1"
                        sx={{ flexGrow: 1, mt: 3, mb: 4, textAlign: "justify" }}
                        color="text.primary"
                    >
                        Medicinal Plants Information System aka. MPIS is an
                        information system for medicinal and aromatic plants
                        that are found in the Northeastern state of India i.e
                        Sikkim. Sikkim is bestowed with abundant medicinal and
                        aromatic plants. More than 150 species of medicinal and
                        aromatic plants are reported to be found in the state.
                        Medicinal and Aromatic plants based on the web
                        application is expected to help the public to find out
                        the benefits and its locations .This application can
                        raise public awareness about the importance of using
                        herbs as medicine. Use of Medicinal plants cannot be
                        separated from local livelihoods because they have been
                        consuming and using it for a long time through local
                        customs and knowledge.The usage of traditional remedies
                        increases when conventional medicine is ineffective in
                        the treatment of disease, such as in advanced cancer and
                        in the face of new infectious diseases. 
                    </Typography>
                    <Typography variant="body1">
                    <span style={{fontWeight: "bold",fontSize: 18}}>Objectives</span>
                    <ul>
                        <li>To create
                        maximum awareness among the common people about
                        Medicinal Plants.</li>
                        <li>This Information System will strengthen
                        the knowledge and help researchers on Medicinal Plants
                        in different Universities and Educational Institutions
                        of states by providing an open information system.</li>
                        <li>It
                        will help the Medicinal practitioners and Botanists to
                        find the herbs and medicines easily.People will come to
                        know about the type and variety of plants location wise.</li>
                    </ul>
                     </Typography>
                    <Divider>
                        <Chip label="People Behind This Wonderful Project" />
                    </Divider>
                    <Grid container spacing={3} sx={{ pt: 2 }}>
                        {devs.map((data, index) => {
                            return (
                                <>
                                    <Grid item xs={12} md={4} sm={6}>
                                        <Card
                                            sx={{
                                                maxWidth: 340,
                                                borderRadius: 5,
                                                boxShadow: 3,
                                            }}
                                            raised
                                        >
                                            <CardMedia
                                                component="img"
                                                height="190"
                                                image={data.img}
                                                alt={data.name}
                                            />
                                            <CardHeader
                                                title={data.name}
                                                sx={{ mb: -3 }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{
                                                        textAlign: "justify",
                                                    }}
                                                >
                                                    {data.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.ln,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on linkedin"
                                                >
                                                    <LinkedInIcon
                                                        sx={{
                                                            color: "#0e76a8",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.git,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on GitHub"
                                                >
                                                    <GitHubIcon
                                                        sx={{
                                                            color: "#171515",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.fb,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on facebook"
                                                >
                                                    <FacebookRoundedIcon
                                                        sx={{
                                                            color: "#3b5998",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.tw,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on twitter"
                                                >
                                                    <TwitterIcon
                                                        sx={{
                                                            color: "#00acee",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.yt,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="subscribe on youtube"
                                                >
                                                    <YouTubeIcon
                                                        sx={{
                                                            color: "#c4302b",
                                                        }}
                                                    />
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
            <Footer/>
        </>
    );
};

export default About;
