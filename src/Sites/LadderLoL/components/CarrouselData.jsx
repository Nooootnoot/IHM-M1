import {Flex, Typography} from "antd";
import '../css/Carrousel.css';

export default function CarrouselData({data, version}) {
    function timeAgo(timestamp) {
        // Convertir le timestamp de millisecondes en secondes
        timestamp = Math.floor(timestamp / 1000);

        const now = Math.floor(Date.now() / 1000); // Timestamp actuel en secondes
        const diffSeconds = now - timestamp;

        // Constantes de temps
        const oneMinute = 60; // minutes
        const oneHour = 3600; // heures
        const oneDay = 86400; // jours
        const oneWeek = 7 * oneDay;

        if (diffSeconds < oneHour) {
            const minutes = Math.floor(diffSeconds / oneMinute);
            return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else if (diffSeconds < oneDay) {
            const hours = Math.floor(diffSeconds / oneHour);
            return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        } else if (diffSeconds < oneWeek) {
            const days = Math.floor(diffSeconds / oneDay);
            return `il y a ${days} jour${days > 1 ? 's' : ''}`;
        } else {
            const date = new Date(timestamp * 1000);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont de 0 à 11
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
    }

    return (
        <Flex
            style={{
                width: "200px",
                height: "75px",
                padding: "5px",
            }}
            align="center"
        >
            <Flex
                vertical
                justify="center"
                align="center"
            >
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.championName}.png`}
                    alt="icon"
                    className="carrousel-champ-icon"
                    style={{
                        boxShadow: `0 0 15px 2px ${data.result ? "#1A981A" : "#ea1515"}`
                    }}
                />
                <Typography.Text className="carrousel-kda">{data.kills + "/" + data.deaths + "/" + data.assists}</Typography.Text>
            </Flex>
            <Flex
                vertical
                style={{
                    height: "100%",
                    marginLeft: "10px"
                }}
                align="start"
            >
                <Typography.Text className="carrousel-joueur">{data.joueur}</Typography.Text>
                <Typography.Text className="carrousel-date">{timeAgo(data.gameCreation)}</Typography.Text>
                <Typography.Text className="carrousel-gamemode">{data.gamemode}</Typography.Text>
            </Flex>
        </Flex>
    )
}