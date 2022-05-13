import React from 'react'
import {Line} from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'

const PieChart = ({chartData}) => {
	return (
		<div>
			<Line data={chartData}/>
		</div>
	)
}

export default PieChart