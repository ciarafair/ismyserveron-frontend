import React from 'react'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import CommandLine from '../components/commandLine'

function Home(): React.ReactElement {
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<div className="flex-row">
					<CommandLine />
				</div>
				<div className="flex-row">
					<p className='info'>
						Hello world! This website serves as a portfolio for my work.
					</p>
				</div>
			</main>
			<div className='crt' />
		</>
	)
}


export default Home
