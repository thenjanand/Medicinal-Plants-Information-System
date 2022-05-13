import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<>
			<Container sx={{ mt: "30vh" }}>
				<Box m="auto" maxWidth={303} sx={{ flexGrow: 1 }}>
				<Typography variant="h1" color="secondary" style={{textAlign:"center"}}>
				404 
				</Typography>
					<Typography variant="subtitle1">
						page not found! Seems like not a valid url.
					</Typography>
					<Link to="/" style={{ textDecoration: 'inherit',color:'inherit'}}>
						<Button fullWidth variant="outlined" color="primary">
							Go Back to Home
						</Button>
					</Link>
				</Box>
			</Container>
		</>
	);
};

export default ErrorPage;
