import React from "react";
import firebase from "../firebase.js";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ScrollToTop from "react-scroll-to-top";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import theme from "../theme";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Divider from "@mui/material/Divider";
import Searchbar from "../components/Searchbar";
import DataSearch from "../DataSearch.json";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';

const style = {
	scroll: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: 30,
		right: 15,
		bottom: 15,
	},
};

const GetData = () => {
	const [plantData, setPlantData] = useState([]);
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState({});
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)

	const onOpenModal = (data) => {
		setModal(data);
		setOpen(true);
	};
	const onCloseModal = () => setOpen(false);

	useEffect(() => {
		setLoading(true);
		console.log("Loading 1",loading)
		const firestore = firebase.database().ref("/PlantDatabase");
		firestore.on("value", (response) => {
			const data = response.val();
			let PlantsInfo = [];
			for (let id in data) {
				PlantsInfo.push({
					id: id,
					ImgUrl: data[id].ImgUrl,
					LocalName: data[id].LocalName,
					PlantFamily: data[id].PlantFamily,
					ScientificName: data[id].ScientificName,
					Distribution: data[id].Distribution,
					PartsUsed: data[id].PartsUsed,
					Uses: data[id].Uses,
					Types: data[id].Types,
					Location: data[id].Location,
				});
			}
			setPlantData(PlantsInfo);
			setLoading(false);
		});
		console.log("Loading 2",loading)
	}, [loading]);

	return (
		<>
			<Container sx={{ mx: 2,position:"fixed",zIndex:999}} maxWidth="100%">
				<Box bgcolor="white" sx={{ pt: 10,mr:4,pb:1 }} m="auto">
					<Searchbar data={DataSearch} placeholder="Search.."/>
				</Box>
			</Container>
			<Container disableGutters maxWidth={false} sx={{ px: 5, py: 3 }}>
				<Box component="main" sx={{ flexGrow: 1 ,px:3,pt:17}}>
					{loading ? 
						(
							<Box sx={{display:"flex",justifyContent:"center",maxWidth:"500",mt:"25vh"}}>
								<CircularProgress color="success" />
							</Box>
						):
						(
							<>
								<Grid container spacing={5}>
						{plantData.slice((page-1)*16,(page-1)*16+16).map((data, index) => {
							return (
								<>
									<Grid item xs={12} md={4} sm={6} lg={3}>
										<Card
											sx={{
												maxWidth: 275,
												minWidth: 150,
											}}
											raised
										>
											<CardActionArea>
												<CardMedia
													component="img"
													alt="plant"
													height="180"
													image={data.ImgUrl}
												/>
												<CardContent>
													<Typography
														gutterBottom
														variant="h6"
														component="div"
													>
														{data.LocalName}
													</Typography>
													<Typography
														variant="body2"
														color="text.secondary"
													>
													<span style={{position:"relative",top:4,left:-2}}>
														<LocationOnRoundedIcon
															color="primary"
															fontSize="small"
															
														/>
													</span>
														{data.Location}
													</Typography>
												</CardContent>
												<CardActions>
													<Button
														size="small"
														onClick={() =>
															onOpenModal(data)
														}
													>
														View
													</Button>

													<Button size="small" onClick={() => window.scroll(0,0)
													}>
														<Link
															to={`/plant/${data.id}`}
															style={{
																textDecoration:
																	"inherit",
																color: "inherit",
															}}
														>
															Read More
														</Link>
													</Button>
												</CardActions>
											</CardActionArea>
										</Card>
									</Grid>
								</>
							);
						})}
						{open && setModal != null ? (
							<Modal open={open} onClose={onCloseModal} center>
								<Typography variant="h4" color="primary">
									{modal.LocalName}
								</Typography>
								<Divider />
								<Typography
									variant="subtitle1"
									color="text.primary"
								>
									<span style={{ fontWeight: "bold" }}>
										Local Name :{" "}
									</span>
									{modal.LocalName}
								</Typography>
								<Typography
									variant="subtitle1"
									color="text.primary"
								>
									<span style={{ fontWeight: "bold" }}>
										Scientific Name :{" "}
									</span>
									<span style={{fontStyle:"italic"}}>
									{modal.ScientificName}
									</span>
								</Typography>
								<Typography
									variant="subtitle1"
									color="text.primary"
								>
									<span style={{ fontWeight: "bold" }}>
										Family :{" "}
									</span>
									{modal.PlantFamily}
								</Typography>
								<Typography
									variant="subtitle1"
									color="text.primary"
								>
									<span style={{ fontWeight: "bold" }}>
										Types :{" "}
									</span>
									{modal.Types}
								</Typography>
								<Typography
									variant="subtitle1"
									color="text.primary"
								>
									<span style={{ fontWeight: "bold" }}>
										Parts Used :{" "}
									</span>
									{modal.PartsUsed}
								</Typography>
								<Typography
									variant="subtitle1"
									color="text.primary"
								>
									<span style={{ fontWeight: "bold" }}>
										Location :{" "}
									</span>
									{modal.Location}
								</Typography>
							</Modal>
						) : (
							""
						)}
					</Grid>
					<Pagination
						sx={{display:"flex",justifyContent:"center",width:"100%",pt:2,mt:2}}
						color="primary"
						count={(plantData?.length/15).toFixed(0)}
						onChange={(_,value) => {
							setPage(value);
							window.scroll(0,0);
						}}
					/>
							</>
						)}
				</Box>
			</Container>

			<ScrollToTop
				smooth
				style={style.scroll}
				component=<KeyboardArrowUpIcon style={{ color: "white" }} />
			/>
		</>
	);
};

export default GetData;
