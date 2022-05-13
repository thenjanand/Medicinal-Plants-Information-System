import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import LineChart from "../components/Charts/LineChart";
import { PlantLocationData } from "../Data/PlantLocationData";
import { PlantTypesData } from "../Data/PlantTypesData";
import { PartsUsedData } from "../Data/PartsUsedData";
import { PlantHeightData } from "../Data/PlantHeightData";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import theme from "../theme";
import {useHistory} from 'react-router-dom'

const Dashboard = () => {

	const history = useHistory()

	const [plantLocData, setPlantLocData] = useState({
		labels: PlantLocationData.map((data) => data.District),
		datasets: [
			{
				label: "No. of Plants",
				data: PlantLocationData.map((data) => data.NoOfPlants),
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
					"rgba(153, 102, 255, 0.5)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	});

	const [plantTypeData, setPlantTypeData] = useState({
		labels: PlantTypesData.map((data) => data.Type),
		datasets: [
			{
				label: "Total Count",
				data: PlantTypesData.map((data) => data.Count),
				backgroundColor: [
					"rgba(255, 99, 132, 0.7)",
					"rgba(54, 162, 235, 0.7)",
					"rgba(255, 206, 86, 0.7)",
					"rgba(153, 102, 255, 0.7)",
					"rgba(24, 101, 86, 0.7)",
					"rgba(100, 255, 100, 0.7)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(24, 101, 86, 1)",
					"rgba(100, 255, 100, 1)",
				],
				borderWidth: 1,
			},
		],
	});

	const [partUsedData, setPartUsedData] = useState({
		labels: PartsUsedData.map((data) => data.Part),
		datasets: [
			{
				label: "Total Count",
				data: PartsUsedData.map((data) => data.Count),
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
					"rgba(153, 102, 255, 0.5)",
					"rgba(24, 101, 86, 0.5)",
					"rgba(100, 255, 100, 0.5)",
					"rgba(20, 25, 65, 0.5)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(24, 101, 86, 1)",
					"rgba(100, 255, 100, 1)",
					"rgba(20, 25, 65, 1)",
				],
				borderWidth: 1,
			},
		],
	});

	const [plantHeightData, setPlantHeightData] = useState({
		labels: PlantHeightData.map((data) => data.Height),
		datasets: [
			{
				label: "No of Plants",
				data: PlantHeightData.map((data) => data.NoOfPlants),
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
					"rgba(153, 102, 255, 0.5)",
					"rgba(24, 101, 86, 0.5)",
					"rgba(100, 255, 100, 0.5)",
					"rgba(20, 25, 65, 0.5)",
					"rgba(98, 151, 35, 0.5)",
					"rgba(19, 255, 239, 0.5)",
					"rgba(205, 251, 65, 0.5)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(24, 101, 86, 1)",
					"rgba(100, 255, 100, 1)",
					"rgba(20, 25, 65, 1)",
					"rgba(98, 151, 35, 1)",
					"rgba(19, 255, 239, 1)",
					"rgba(205, 251, 65, 1)",
				],
				borderWidth: 1,
			},
		],
	});


	return (
		<>
			<Container
				style={{ backgroundColor: theme.palette.primary.optional }}
				disableGutters
				maxWidth={false}
			>
				<Box
					component="main"
					sx={{ flexGrow: 1, p: 2, boxShadow: 1, pt: 8,pb:5 }}
					maxWidth="85%"
					m="auto"
					bgcolor="white"
				>
					<Typography
						variant="h2"
						color="primary"
						sx={{ textAlign: "center", py: 2 }}
					>
						OVERVIEW
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4} md={4}>
							<Paper sx={{boxShadow:3,height:"100%",backgroundColor:"rgba(100, 255, 100, 0.1)"}}>
							<Typography
								color="gray"
								variant="h6"
								sx={{ textAlign: "center" }}
							>
								LOCATION
							</Typography>
							<PieChart chartData={plantLocData} />
							</Paper>
						</Grid>
						
						<Grid item xs={12} sm={8} md={8}>
							<Paper sx={{boxShadow:3,backgroundColor:"rgba(255, 99, 132, 0.2)"}}>
							<Typography
								color="gray"
								variant="h6"
								sx={{ textAlign: "center" }}
							>
								DISTRIBUTION
							</Typography>
							<BarChart chartData={plantHeightData} />
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<Paper sx={{boxShadow:3,backgroundColor:"rgba(255, 206, 86, 0.3)"}}>
							<Typography
								color="gray"
								variant="h6"
								sx={{ textAlign: "center" }}
							>
								TYPES
							</Typography>
							<LineChart chartData={plantTypeData} />
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6} md={6}>
							<Paper sx={{boxShadow:3,backgroundColor:"rgba(20, 25, 65, 0.1)"}}>
							<Typography
								color="gray"
								variant="h6"
								sx={{ textAlign: "center" }}
							>
								PARTS USED
							</Typography>
							<BarChart chartData={partUsedData} />
							</Paper>
						</Grid>
					</Grid>
					<Box sx={{display:"flex",justifyContent:"center",mt:5}}>
					<Button size="large" variant="outlined" color="secondary" onClick={() => {
						history.push("/explorespecies");
						window.scroll(0,0);
						}}>
						Explore Plants
					</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Dashboard;
