import React from 'react';

const Main = () => {
	return (
		<>
			<section id="container">
				<article id="searchContent">
					<div className="area">
						<h2>배송 조회</h2>

						<ul>
							<li><input type="radio" name="" id="" /> <label htmlFor="">한진택배</label></li>
							<li><input type="radio" name="" id="" /> <label htmlFor="">경동택배</label></li>
							<li><input type="radio" name="" id="" /> <label htmlFor="">CJ대한통운</label></li>
						</ul>
						<div className="search-area">
							<input type="text" placeholder="운송장번호" />
							<button value="">검색</button>
						</div>

					</div>
				</article>

				<article id="searchResultContent" className="area">
					<h2>기본정보</h2>
					<table className="search-result-tbl">
						<tr>
							<th>운송장 번호</th>
							<th>보내는 분</th>
							<th>받는 분</th>
							<th>상품 정보</th>
							<th>처리현황</th>
						</tr>
						<tr>
							<td>356883833504</td>
							<td>㈜*</td>
							<td>장*</td>
							<td>배송상품</td>
							<td>배송완료</td>
						</tr>
					</table>
					<h2>배송현황</h2>
					<table className="search-result-tbl">
						<tr>
							<th>날짜</th>
							<th>장소</th>
							<th>처리현황</th>
						</tr>
						<tr>
							<td>2020-02-05 19:24:00</td>
							<td>서울중앙우체국</td>
							<td>집하완료</td>
						</tr>
						<tr>
							<td>2020-02-05 19:25:00</td>
							<td>서울중앙우체국</td>
							<td>접수</td>
						</tr>
						<tr>
							<td>2020-02-05 19:35:00</td>
							<td>서울중앙우체국</td>
							<td>발송</td>
						</tr>
					</table>
				</article>
			</section>
			<style jsx>{`
				ul, li {
				list-style: none;
				}
				table {
					border-collapse: collapse;
					border-spacing: 0;
				}
				.area {
					max-width: 1100px;
					margin: 0 auto;
				}
				#searchContent {
					background-color: #444;
					padding: 100px 0;
					text-align: center;
				}
				#searchContent h2 {
					color: #fff;
				}
				#searchContent ul{
					margin:20px 0;
				}
				#searchContent ul li {
					display: inline-block;
					margin:0 10px;
					color:#fff;
				}
				#searchContent ul li input[type="radio"] {
					vertical-align: middle;
					position: relative; 
					top:-3px;
				}
				.search-area {
					max-width:600px;
					margin:0 auto;
					overflow: hidden;
				}
				.search-area input[type="text"] {
					float:left;
					width:calc(100% - 100px);
					height:50px;
					border: 0;
					border-radius: 5px 0 0 5px;
					background-color: #fff;
					font-size:16px;
					text-indent: 10px;
				}
				.search-area button {
					width: 100px;
					height: 50px;
					border: 0;
					border-radius: 0 5px 5px 0;
					background-color: green;
					color: #fff;
					font-size: 16px;
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

export default Main;