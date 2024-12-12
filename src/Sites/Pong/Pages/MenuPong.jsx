import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/menuPong.css";

function MenuPong() {
    const navigate = useNavigate();
    const [matchmaking, setMatchmaking] = useState(false);

    function handlePlay() {
        navigate(`/pong/solo`);
    }

    function handleGoToMainMenu() {
        navigate(`/`);
    }

    return (
        <div className="menu-container">
            <h1 className="menu-title">PONG</h1>
            <button
                className={`menu-button ${matchmaking ? "disabled" : ""}`}
                onClick={handlePlay}
                disabled={matchmaking}
            >
                Jouer
            </button>
            <button
                className="menu-secondary-button"
                onClick={handleGoToMainMenu}
            >
                Menu principal
            </button>
        </div>
    );
}

export default MenuPong;
