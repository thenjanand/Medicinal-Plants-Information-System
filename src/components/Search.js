import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import firebase from "../firebase";
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
import theme from "../theme";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import grey from "@mui/material/colors/grey";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useHistory } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import DataSearch from "../DataSearch.json";

const Search = () => {
	const [data, setData] = useState({});

	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState({});
	const history = useHistory();
	const onOpenModal = (data) => {
		setModal(data);
		setOpen(true);
	};
	const onCloseModal = () => setOpen(false);

	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let Query = useQuery();
	let search = Query.get("query");

	useEffect(() => {
		const firestore = firebase.database().ref("/PlantDatabase");
		firestore
			.orderByChild("LocalName")
			.equalTo(search)
			.on("value", (snapshot) => {
				if (snapshot.val()) {
					const data = snapshot.val();
					setData(data);
					// console.log("data:", data);
				}
			});
	}, [search]);

	return (
		<>
			<Container
				sx={{ mx: 2, position: "fixed", zIndex: 999 }}
				maxWidth="100%"
			>
				<Box bgcolor="white" sx={{ pt: 10, mr: 3, pb: 1 }} m="auto">
					<Searchbar data={DataSearch} placeholder="Search.." />
				</Box>
			</Container>
			<Container disableGutters maxWidth={false} sx={{ px: 5 }}>
				<Box sx={{ flexGrow: 1, p: 3, pt: 21 }} m="auto">
					<Box
						maxWidth="auto"
						bgcolor={theme.palette.secondary.main}
						borderRadius={5}
						sx={{ position: "fixed", left: 3 }}
					>
						<IconButton
							onClick={(e) => {
								e.preventDefault();
								history.goBack();
							}}
							size="small"
							sx={{
								color: "white",
								backgroundColor: theme.palette.primary.main,
							}}
						>
							<KeyboardBackspaceIcon />
						</IconButton>
					</Box>
					{Object.keys(data).length === 0 ? (
						<Box m="auto" sx={{ mt: "30vh", textAlign: "center" }}>
							<Typography
								sx={{ m: "auto", color: grey[500] }}
								variant="h5"
								color="text.primary"
							>
								No search found with that name :{" "}
								{Query.get("query")}
							</Typography>
						</Box>
					) : (
						<Grid container spacing={4}>
							{Object.keys(data).map((id, index) => {
								return (
									<>
										<Grid
											item
											xs={12}
											md={4}
											sm={6}
											lg={3}
											key={id}
										>
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
														image={data[id].ImgUrl}
													/>
													<CardContent>
														<Typography
															gutterBottom
															variant="h6"
															component="div"
														>
															{data[id].LocalName}
														</Typography>
														<Typography
															variant="body2"
															color="text.secondary"
														>
															<span
																style={{
																	position:
																		"relative",
																	top: 4,
																	left: -2,
																}}
															>
																<LocationOnRoundedIcon
																	color="primary"
																	fontSize="small"
																/>
															</span>
															{data[id].Location}
														</Typography>
													</CardContent>
													<CardActions>
														<Button
															size="small"
															onClick={() =>
																onOpenModal(
																	data[id]
																)
															}
														>
															View
														</Button>

														<Button size="small">
															<Link
																to={`/plant/${id}`}
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
								<Modal
									open={open}
									onClose={onCloseModal}
									center
								>
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
					)}
				</Box>
			</Container>
		</>
	);
};

export default Search;
