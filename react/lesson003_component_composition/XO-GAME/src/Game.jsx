import { useState } from 'react';
import { GameLayout } from './components';
import { fieldInit } from './utils';

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(fieldInit());
	const [winningCells, setWinningCells] = useState([]);

	const props = {
		currentPlayer,
		isGameEnded,
		isDraw,
		field,
		setField,
		setIsDraw,
		setIsGameEnded,
		setCurrentPlayer,
		winningCells,
		setWinningCells,
	};

	return <GameLayout {...props} />;
}
