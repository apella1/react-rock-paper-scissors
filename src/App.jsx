import {useState} from 'react';
import './App.css'

function generateComputerChoice(compChoice) {
	const randNum = Math.floor(Math.random() * 3)
	
	switch (randNum) {
		case 1:
			compChoice == 'Rock'
			break;
		case 2:
			compChoice == 'Paper'
			break;
		default:
			compChoice == 'Scissors'
	}
}



function computeWinner (gameResult) { 
	switch (compChoice, playerChoice) {
		case compChoice == playerChoice:
			gameResult = 'Draw'
			break;
		case playerChoice == 'Rock' && compChoice == 'Scissors':
		case playerChoice == 'Scissors' && compChoice == 'Paper':
		case playerChoice == 'Paper' && compChoice == 'Rock':
			gameResult = 'You won'
			break;
		default:
			gameResult = 'You Lost'
	}

}

function handleClick (choice) {
	const [playerChoice, setPlayerChoice] = useState(null)
	setPlayerChoice(choice);
	generateComputerChoice();
	computeWinner();
}


function App({ playerChoice, compChoice, handleClick, gameResult }) {

	return (
		<div className="App">
			<div className="options">
				<button onClick={handleClick('Rock')}>Rock</button>
				<button onClick={handleClick('Paper')}>Paper</button>
				<button onClick={handleClick('Scissors')}>Scissors</button>
			</div>
			<div className="play">
				<h2>You: {playerChoice}</h2>
				<h2>Computer: {compChoice}</h2>
				<h2>Result: {gameResult}</h2>
			</div>
		</div>
	)
}

export default App
