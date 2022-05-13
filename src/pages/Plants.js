import React, { useState, useEffect} from "react";
import firebase from "../firebase";
import { useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import theme from "../theme";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {useHistory} from 'react-router-dom'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import Doc from '../components/Doc';

const Plants = () => {

	const [plantData, setPlantData] = useState({});

	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const firestore = firebase.database().ref(`/PlantDatabase/${id}`);
		firestore.get().then((snapshot) => {
			if (snapshot.exists()) {
				setPlantData({ ...snapshot.val() });
			} else {
				setPlantData({});
			}
		});
	}, [id]);

	return (
		<>
			<Container
				style={{ backgroundColor: theme.palette.primary.optional }}
				disableGutters
				maxWidth={false}
			>
				<Box
					component="main"
					sx={{ flexGrow: 1, p: 4, boxShadow: 1, pt: 10 }}
					m="auto"
					maxWidth={800}
					bgcolor="white"
				>
					<Box
						bgcolor={theme.palette.secondary.main}
						borderRadius={5}
						sx={{ position: "fixed", left: 4 }}
					>
						<IconButton
							onClick={(e) => {
							e.preventDefault();
							history.goBack();
							}}
							size="small"
							sx={{ color: "white", backgroundColor: theme.palette.primary.main }}
						>
							<KeyboardBackspaceIcon />
						</IconButton>
				</Box>
				<Typography
                        variant="h2"
                        sx={{ flexGrow: 1 }}
                        color="primary"
                    >
                        {plantData.LocalName}
                        <PDFDownloadLink document={<Doc plantData={plantData}/>} filename="download.pdf">
                        <IconButton color="error" sx={{fontSize:12,float:"right",display:{xs:"none",sm:"block"}}}>
								<PictureAsPdfRoundedIcon/><span style={{position:"relative",top:-8,left: 2}}>Download</span>
						</IconButton>
						</PDFDownloadLink>
						<PDFDownloadLink document={<Doc plantData={plantData}/>} filename="download.pdf">
						<IconButton color="error" sx={{fontSize:12,float:"right",display:{xs:"block",sm:"none"}}}>
								<PictureAsPdfRoundedIcon/>
						</IconButton>
						</PDFDownloadLink>
                    </Typography>
                    <Divider sx={{pt:1}}/>
					<Grid container sx={{py:2}}>
						<Grid item xs={12} sm={6} md={6}>
							<Card
								sx={{
									maxWidth: 300,
									minWidth: 200,
									borderRadius: 5,
								}}
								
							>
									<CardMedia
										component="img"
										alt="plant"
										height="300"
										image={plantData.ImgUrl}
										style={{objectFit:"fill"}}
									/>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<Typography sx={{fontSize: 20,pt:3,pl:2}} variant="subtitle2" color="text.secondary"><span style={{fontWeight:"bold"}}>Local Name :</span> {plantData.LocalName}</Typography>
							<Typography sx={{fontSize: 20,pl:2}} variant="subtitle2" color="text.secondary"><span style={{fontWeight:"bold"}}>Scientific Name :</span> <span style={{fontStyle:"italic"}}>{plantData.ScientificName}</span></Typography>
							<Typography sx={{fontSize: 20,pl:2}} variant="subtitle2" color="text.secondary"><span style={{fontWeight:"bold"}}>Family :</span> {plantData.PlantFamily}</Typography>
							<Typography sx={{fontSize: 20,pl:2}} variant="subtitle2" color="text.secondary"><span style={{fontWeight:"bold"}}>Types :</span> {plantData.Types}</Typography>
							<Typography sx={{fontSize: 20,pl:2}} variant="subtitle2" color="text.secondary"><span style={{fontWeight:"bold"}}>Parts Used :</span> {plantData.PartsUsed}</Typography>
							<Typography sx={{fontSize: 20,pl:2}} variant="subtitle2" color="text.secondary"><span style={{fontWeight:"bold"}}>Location :</span> {plantData.Location}</Typography>
							<Typography sx={{fontSize: 20,pl:2}} variant="subtitle2" color="text.secondary"><span style={{fontWeight:"bold"}}>WikiLink :</span> <a href={plantData.WikiLink} target="_blank" rel="noopener noreferrer">Visit</a></Typography>
						</Grid>
						<Grid xs={12}>
							<Typography color="primary" sx={{pt:2,textAlign:'justify',fontWeight:'bold'}} variant="h6">Description</Typography>
							<Typography sx={{textAlign:'justify', wordWrap:"break-word"}} variant="body1">{plantData.Description}</Typography>
							<Typography color="primary" sx={{pt:2,textAlign:'justify',fontWeight:'bold'}} variant="h6">Distribution</Typography>
							<Typography sx={{textAlign:'justify', wordWrap:"break-word"}} variant="body1">{plantData.Distribution}</Typography>
							<Typography color="primary" sx={{pt:2,textAlign:'justify',fontWeight:'bold'}} variant="h6">Uses</Typography>
							<Typography sx={{textAlign:'justify', wordWrap:"break-word"}} variant="body1">{plantData.Uses}</Typography>


						</Grid>
					</Grid>

				</Box>
			</Container>
		</>
	);
};

export default Plants;
