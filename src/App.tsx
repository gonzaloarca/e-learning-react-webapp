import React from 'react';
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.App}>
			<header className={styles['App-header']}>
				<img src='./img/logo.svg' className={styles['App-logo']} alt='logo' />
				<p className='font-bold'>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className={styles['App-link']}
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
