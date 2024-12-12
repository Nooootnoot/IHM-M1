import {useEffect, useState} from "react";
import useWindowDimensions from "../hooks/useWindowDimensions.js";

export default function MatchSolo() {
    const { width, height } = useWindowDimensions();

    const [player1Y, setPlayer1Y] = useState(height / 2 - 50);
    const [player2Y, setPlayer2Y] = useState(height / 2 - 50);
    const [ballX, setBallX] = useState(width / 2);
    const [ballY, setBallY] = useState(height / 2);
    const [ballSpeedX, setBallSpeedX] = useState(0);
    const [ballSpeedY, setBallSpeedY] = useState(0);
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [keysPressed, setKeysPressed] = useState({});

    const [lastWinner, setLastWinner] = useState(null);

    useEffect(() => {
        const handleKeyPress = (e) => {
            setKeysPressed((prevKeys) => ({ ...prevKeys, [e.key]: true }));
        };

        const handleKeyRelease = (e) => {
            setKeysPressed((prevKeys) => ({ ...prevKeys, [e.key]: false }));
        };

        const updateGame = () => {
            if (gameStarted) {
                setBallX((prevX) => prevX + ballSpeedX);
                setBallY((prevY) => prevY + ballSpeedY);

                // Check collisions with players
                if (
                    (ballX < 20 && ballY > player1Y && ballY < player1Y + 100) ||
                    (ballX > width - 40 && ballY > player2Y && ballY < player2Y + 100)
                ) {
                    setBallSpeedX((prevSpeedX) => {
                        if (prevSpeedX < 0) {
                            return -(prevSpeedX - 1);
                        } else {
                            return -(prevSpeedX + 1);
                        }
                    });
                    setBallSpeedY((prevSpeedY) => {
                        if (prevSpeedY < 0) {
                            return prevSpeedY - 1;
                        } else {
                            return prevSpeedY + 1;
                        }
                    });

                    // Move the ball outside of the player to prevent sticking
                    if (ballX < 20) {
                        setBallX(20);
                    } else {
                        setBallX(width - 40);
                    }
                }

                // Check top collision
                if (ballY < 0) {
                    setBallSpeedY((prevSpeedY) => -prevSpeedY);
                    setBallY(0);
                }

                // Check bottom collision
                if (ballY > height - 20) {
                    setBallSpeedY((prevSpeedY) => -prevSpeedY);
                    setBallY(height - 20);
                }

                // Check scoring
                if (ballX < 0) {
                    setScorePlayer2((prevScore) => prevScore + 1);
                    resetGame();
                    setLastWinner(1);
                } else if (ballX > width) {
                    setScorePlayer1((prevScore) => prevScore + 1);
                    resetGame();
                    setLastWinner(0);
                }
            }
        };

        const resetGame = () => {
            setBallX(width / 2);
            setBallY(height / 2);
            setBallSpeedX(0);
            setBallSpeedY(0);
            setPlayer1Y(height / 2 - 50);
            setPlayer2Y(height / 2 - 50);
            setGameStarted(false);
        };

        const gameInterval = setInterval(updateGame, 20);

        window.addEventListener("keydown", handleKeyPress);
        window.addEventListener("keyup", handleKeyRelease);

        return () => {
            clearInterval(gameInterval);
            window.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("keyup", handleKeyRelease);
        };
    }, [player1Y, player2Y, ballX, ballY, ballSpeedX, ballSpeedY, gameStarted, width, height]);

    useEffect(() => {
        const handleContinuousMovement = () => {
            const increment = 10;

            if (keysPressed[" "]) {
                if (!gameStarted) {
                    setGameStarted(true);
                    setBallSpeedX(lastWinner === 0 ? 5 : -5);
                    setBallSpeedY(5);
                }
            }

            if (keysPressed["z"] && player1Y > 0) {
                setPlayer1Y((prevY) => (prevY - increment >= 0 ? prevY - increment : 0));
            } else if (keysPressed["s"] && player1Y < height - 100) {
                setPlayer1Y((prevY) => (prevY + increment <= height - 100 ? prevY + increment : height - 100));
            }

            if (keysPressed["ArrowUp"] && player2Y > 0) {
                setPlayer2Y((prevY) => (prevY - increment >= 0 ? prevY - increment : 0));
            } else if (keysPressed["ArrowDown"] && player2Y < height - 100) {
                setPlayer2Y((prevY) => (prevY + increment <= height - 100 ? prevY + increment : height - 100));
            }
        };

        const continuousMovementInterval = setInterval(handleContinuousMovement, 20);

        return () => {
            clearInterval(continuousMovementInterval);
        };
    }, [keysPressed, player1Y, player2Y, height, gameStarted]);

    return (
        <div
            className="SoloPong"
        >
            <div style={{ position: 'relative', height: `${height}px`, width: `${width}px`, margin: 'auto' }}>
                <div style={{ position: 'absolute', top: `${player1Y}px`, left: '0', height: '100px', width: '20px', background: 'blue' }} />
                <div style={{ position: 'absolute', top: `${player2Y}px`, right: '0', height: '100px', width: '20px', background: 'red' }} />
                <div style={{ position: 'absolute', top: `${ballY}px`, left: `${ballX}px`, height: '20px', width: '20px', background: 'black', borderRadius: '50%' }} />
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', position: 'absolute', top: '0', left: "50%", transform: 'translateX(-50%)'}}>
                <p>Player 1 Score: {scorePlayer1}</p>
                <p>Player 2 Score: {scorePlayer2}</p>
            </div>
        </div>
    );
};