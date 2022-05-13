import React from "react";
import {
	Document,
	Page,
	Text,
	Image,
	View,
	StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		padding: "40",
	},
	title: {
		fontSize: "45",
		color: "green",
		marginBottom: "10",
	},
	para: {
		fontSize: "13",
		fontWeight: "light",
	},
	subtitle: {
		fontSize: "25",
		color: "green",
		marginTop: "20",
		marginBottom: "5",
	},
	imgBorder: {
		padding: 2,
	},
	box: {
		border: 2,
		padding: 5,
		marginTop: 10,
	},
	data: {
		fontSize: 18,
		color: "green",
	},
});

const Doc = ({ plantData }) => {
	return (
		<>
			<Document>
				<Page size="A4" style={styles.page}>
					<View>
						<Text style={styles.title}>{plantData.LocalName}</Text>
						<View style={styles.imgBorder}>
							<Image src={plantData.ImgUrl} />
						</View>
						<View style={styles.box}>
							<Text>
								Local Name :{" "}
								<Text style={styles.data}>
									{plantData.LocalName}
								</Text>
							</Text>
							<Text>
								Scientific Name :{" "}
								<Text style={styles.data}>
									{plantData.ScientificName}
								</Text>
							</Text>
							<Text>
								Plant Family :{" "}
								<Text style={styles.data}>
									{plantData.PlantFamily}
								</Text>
							</Text>
							<Text>
								Types :{" "}
								<Text style={styles.data}>
									{plantData.Types}
								</Text>
							</Text>
							<Text>
								Parts Used :{" "}
								<Text style={styles.data}>
									{plantData.PartsUsed}
								</Text>
							</Text>
							<Text>
								Location :{" "}
								<Text style={styles.data}>
									{plantData.Location}
								</Text>
							</Text>
						</View>
						<Text style={styles.subtitle}>Description</Text>
						<Text style={styles.para}>{plantData.Description}</Text>
						<Text style={styles.subtitle}>Distribution</Text>
						<Text style={styles.para}>{plantData.Distribution}</Text>
						<Text style={styles.subtitle}>Uses</Text>
						<Text style={styles.para}>{plantData.Uses}</Text>
					</View>
				</Page>
			</Document>
		</>
	);
};

export default Doc;
