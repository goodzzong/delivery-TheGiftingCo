import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

const App = () => {
	return (
		<>
			<div className="wrap">
				<Header />
				<Main />
				<Footer />
			</div>
			<style jsx global>{`
			* {
				box-sizing: border-box;
				margin: 0;
				padding: 0;			
			}
			body,
			input,
			button {
					font-family: 'Noto Sans KR', sans-serif;
			}

			body {
					background: #FFF;
					color: #000;
					font-size: 20px;
			}
		`}</style>
		</>
	);
};

export default App;