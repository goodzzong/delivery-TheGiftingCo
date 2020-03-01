import React from 'react';
import TrackingDetail from './TrackingDetail';

const TrackingInfo = ({ trackingInfo, trackingDetail }) => {
	const level = ['배송준비중', '집화완료', '배송중', '지점 도착', '배송출발', '배송 완료'];
	console.log(trackingInfo);
	console.log(trackingDetail);
	return (
		<>
			<article id="searchResultContent" className="area">
				<h2>기본정보</h2>
				<table className="search-result-tbl">
					<thead>
						<tr>
							<th>운송장 번호</th>
							<th>보내는 분</th>
							<th>받는 분</th>
							<th>상품 정보</th>
							<th>처리현황</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{trackingInfo.invoiceNo}</td>
							<td>{trackingInfo.senderName}</td>
							<td>{trackingInfo.receiverName}</td>
							<td>{trackingInfo.itemName}</td>
							<td>{level[trackingInfo.level]}</td>
						</tr>
					</tbody>
				</table>
				<h2>배송현황</h2>
				<table className="search-result-tbl">
					<thead>
						<tr>
							<th>날짜</th>
							<th>장소</th>
							<th>처리현황</th>
						</tr>
					</thead>
					<tbody>
						{trackingDetail.map((detail, index) => (
							<TrackingDetail key={index} detail={detail} />
						))}
					</tbody>
				</table>
			</article>

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

export default TrackingInfo;