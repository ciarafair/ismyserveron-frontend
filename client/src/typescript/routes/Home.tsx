import React from 'react'
import Subheading from '../components/Subheading'
import Background from '../components/Background'

const possibleStrings: Array<string> = [
	'Why are you asking me? I have no clue.',
	'Maybe, you should go check that.',
	'Sorry, I eated it.',
	'Have you turned it on and off again?',
	'./maybe.exe',
	'If it is you better go catch it!',
	"echo 'Yo momma!'",
	'sudo apt-get install idk',
]

const chosenString: string =
	possibleStrings[Math.floor(Math.random() * possibleStrings.length)]

function setElementAttribute(): void {
	// @ts-expect-error annoying null error
	const root: Element = document.body.querySelector('#root')
	// @ts-expect-error annoying null error
	const selection: Element = root.querySelector('.command')
	if (selection != null) {
		document.documentElement.style.setProperty(
			'--animationSteps',
			String(chosenString.length)
		)
		document.documentElement.style.setProperty(
			'--animationTime',
			String(25 * chosenString.length)
		)
		selection.className = 'command active'
	}
}

function Home(): React.ReactElement {
	return (
		<>
			<Background />
			<h1 className="heading">Is my server online?</h1>
			<Subheading commandString={chosenString} />
		</>
	)
}

window.addEventListener('DOMContentLoaded', function () {
	setElementAttribute()
})

export default Home
