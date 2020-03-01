import React from 'react';

const TrackingDetail = ({ detail }) => {
	return (
		<>
			<tr>
				<td>{detail.timeString}</td>
				<td>{detail.where}</td>
				<td>{detail.kind}</td>
			</tr>
			<style jsx>{`
			
				table {
					border-collapse: collapse;
					border-spacing: 0;
				}
				#searchResultContent {
					padding:100px 0;
				}
				#searchResultContent h2 {
					margin-bottom:10px;
					font-size:24px;
				}
				.search-result-tbl {
					width:100%;
					border-top:2px solid #333;
					margin-bottom: 10px;
				}
				.search-result-tbl th,
				.search-result-tbl td {
					padding:10px 0;
					text-align: center;
					border-bottom:1px solid #ddd;
					font-size:15px;
				}
				.search-result-tbl th {
					background-color: #f2f2f2;
				}				
			`}</style>
		</>
	);
};

export default TrackingDetail;