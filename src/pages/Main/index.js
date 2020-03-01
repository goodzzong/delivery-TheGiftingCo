import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "@/data/rootActions";
import TrackingInfo from "@/pages/Main/TrackingInfo";
import * as selectors from "@/data/rootSelectors";
import Error from '@/components/Error';

const Main = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const trackingInfo = useSelector(selectors.delivery.getDelivery);

	const onChange = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const code = e.target.t_code.value;

		dispatch(actions.delivery.getDelivery(code, value));
		document.getElementById('form').reset();
		setValue('');

	}

	useEffect(() => {
		console.log('trackingInfo:', trackingInfo);
	}, [trackingInfo])

	return (
		<>
			<section id="container">
				<article id="searchContent">
					<div className="area">
						<h2>배송 조회</h2>
						<form id="form" onSubmit={handleSubmit}>
							<ul>
								<li><input type="radio" name="t_code" value="05" id="t_code_05" /> <label htmlFor="t_code_05">한진택배</label></li>
								<li><input type="radio" name="t_code" value="23" id="t_code_23" /> <label htmlFor="t_code_23">경동택배</label></li>
								<li><input type="radio" name="t_code" value="04" id="t_code_04" /> <label htmlFor="t_code_04">CJ대한통운</label></li>
							</ul>
							<div className="search-area">
								<input
									type="text"
									name="t_invoice"
									placeholder="운송장번호"
									value={value}
									onChange={onChange}
								/>
								<button type="submit">검색</button>
							</div>
						</form>
					</div>
				</article>

				{trackingInfo.error && <Error msg={trackingInfo.error.msg} />}
				{trackingInfo.trackingInfo.result === "Y" && <TrackingInfo trackingInfo={trackingInfo.trackingInfo} trackingDetail={trackingInfo.trackingDetail} />}

			</section>
			<style jsx>{`
				ul, li {
				list-style: none;
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
				
			`}</style>
		</>
	);
};

export default Main;