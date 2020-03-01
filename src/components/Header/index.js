import React from 'react';

const Header = () => {
	return (
		<>
			<header>
				<div className="area">
					<h1>Logo</h1>
				</div>
			</header>
			<style jsx>{`
				header {
					width: 100%;
					padding: 20px;
				}
			`}</style>
		</>
	);
};

export default Header;