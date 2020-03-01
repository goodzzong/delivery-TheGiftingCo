import React from 'react';

const Error = ({ msg }) => {
	return (
		<>
			<div className="error">
				{msg ? msg : '유효하지 않은 운송장번호 이거나 택배사 코드 입니다.'}
			</div>
			<style jsx>{`
			div.error {
				text-align:center;
				margin-top: 50px;
				color: red;
				margin-bottom: 1px;
			}
		`}</style>
		</>

	);
};

export default Error;